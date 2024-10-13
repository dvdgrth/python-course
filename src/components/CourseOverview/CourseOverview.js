import React from "react";
import { Link } from "react-router-dom";
import "./CourseOverview.css";

const CourseOverview = () => {
  // Hardcoded list of lessons
  const lessons = [
    { id: 1, title: "Hallo Welt!" },
    { id: 2, title: "Wie heißt Du?" },
    { id: 3, title: "Wie alt bist Du?" },
    { id: 4, title: "100 Jahre" },
    { id: 5, title: "Taschenrechner" },
    { id: 6, title: "Cooler Typ" },
    { id: 7, title: "Hausaufgabenhelfer" },
    { id: 8, title: "Spotify-Jahresstatistik" },
    { id: 9, title: "Du kommst hier nicht rein" },
    { id: 10, title: "Passwort" },
    { id: 11, title: "elif" },
    { id: 12, title: "Taschenrechner Deluxe" },
    { id: 13, title: "Eine Cola bitte" },
    { id: 14, title: "Schere, Stein, Papier" },
    { id: 15, title: "Let's make some money!" },
  ];

  // Render the component
  return (
    <div className="CourseOverview">
      <h2>Wir lernen Python!</h2>
      <ul className="lesson-list">
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <Link to={`/lesson/${lesson.id}`}>
              Aufgabe {lesson.id}: {lesson.title}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="https://www.online-python.com/"
            target="_blank"
            rel="noreferrer"
          >
            Online Python Editor &#128279;
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CourseOverview;
