import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./LessonPage.css";
import remarkGfm from "remark-gfm"; // Import remark-gfm for GitHub Flavored Markdown
import rehypeRaw from "rehype-raw"; // Import rehype-raw for rendering HTML

const LessonPage = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate(); // Initialize navigate
  const [lessonContent, setLessonContent] = useState("");
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
      })
      .catch(() => {
        setError("Failed to load lesson content"); // Handle any errors
      });
  }, [lessonId]);

  return (
    <div className="LessonPage">
      {error ? (
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
                    style={atomDark}
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
