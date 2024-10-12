import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CourseOverview.css";

const CourseOverview = () => {
  const [lessons, setLessons] = useState([]); // State to hold the list of lessons
  const [error, setError] = useState(null); // State for error handling
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    // Fetch lessons data from a JSON file or an API
    const fetchLessons = async () => {
      try {
        const response = await fetch("/lessons.json"); // Assuming you have a lessons.json file
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setLessons(data.lessons); // Assuming the JSON has a "lessons" array
      } catch (error) {
        setError("Failed to load lessons"); // Handle any errors
      } finally {
        setLoading(false); // Set loading to false after fetch attempt
      }
    };

    fetchLessons(); // Call the fetch function
  }, []); // Effect runs only once when the component mounts

  // Render the component
  return (
    <div className="CourseOverview">
      <h2>Wir lernen Python!</h2> {/* Title for the overview */}
      {loading ? ( // Show loading text while fetching
        <p>Loading lessons...</p>
      ) : error ? (
        <p>{error}</p> // Display error message if there's an error
      ) : (
        <ul className="lesson-list">
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              <Link to={`/lesson/${lesson.id}`}>
                Aufgabe {lesson.id}: {lesson.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

CourseOverview.propTypes = {
  // You can define prop types if needed
};

CourseOverview.defaultProps = {
  // You can define default props if needed
};

export default CourseOverview;
