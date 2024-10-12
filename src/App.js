import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseOverview from "./components/CourseOverview/CourseOverview";
import LessonPage from "./components/LessonPage/LessonPage";

function App() {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Use Routes instead of Switch */}
        <Route path="/" element={<CourseOverview />} />{" "}
        {/* Use element prop to render components */}
        <Route path="/lesson/:lessonId" element={<LessonPage />} />{" "}
        {/* Use element prop */}
      </Routes>
    </Router>
  );
}

export default App;
