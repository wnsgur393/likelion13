import "./index.css"; // 폰트 및 글로벌 스타일 적용
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import DiaryPage from "./pages/DiaryPage";
import RootLayout from "./routes/RootLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route index element={<HomePage />} />
          <Route path="/project" element={ <ProjectPage /> } />
          <Route path="/diary" element={<DiaryPage />} />
        </Route>
         {/* Root가 아닌 다른 레이아웃 적용할 땐 여기에 레이아웃 추가하면 된다 */}
      </Routes>
    </Router>
  );
}