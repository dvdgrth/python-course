import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Loader } from "lucide-react"; // Import the Loader icon from lucide-react
import "./LessonPage.css";
import remarkGfm from "remark-gfm"; // Import remark-gfm for GitHub Flavored Markdown
import rehypeRaw from "rehype-raw"; // Import rehype-raw for rendering HTML

const LessonPage = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate(); // Initialize navigate
  const [lessonContent, setLessonContent] = useState("");
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the Markdown file from the public folder
    fetch(`/lessons/lesson${lessonId}.md`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Lesson not found");
        }
        return response.text();
      })
      .then((text) => {
        setLessonContent(text); // Set the content as the Markdown text
        setLoading(false); // Stop loading when content is fetched
      })
      .catch(() => {
        setError(
          "Aufgabe konnte nicht geladen werden. Bitte versuche es nochmal."
        ); // Handle any errors
        setLoading(false); // Stop loading if there's an error
      });
  }, [lessonId]);

  return (
    <div className="LessonPage">
      {loading ? (
        // Loading spinner using lucide-react Loader
        <div className="spinner">
          <Loader className="spinner-icon" size={48} />
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="lesson-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={materialDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {lessonContent}
          </ReactMarkdown>
        </div>
      )}
      {/* Back button */}
      <button onClick={() => navigate(-1)} className="back-button">
        Zurück
      </button>
    </div>
  );
};

export default LessonPage;
