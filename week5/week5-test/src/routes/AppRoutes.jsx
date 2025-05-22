import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
// import ProjectPage from "../pages/ProfectPage";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/project" element={ <ProjectPage /> } /> */}
        {/* 향후 다른 페이지도 여기에 추가 가능 */}
      </Routes>
    </Router>
  );
}