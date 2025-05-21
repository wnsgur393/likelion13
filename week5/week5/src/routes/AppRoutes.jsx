import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import DiaryPage from "../pages/DiaryPage";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={ <ProjectPage /> } />
        <Route path="/diary" element={<DiaryPage />} />
      </Routes>
    </Router>
  );
}