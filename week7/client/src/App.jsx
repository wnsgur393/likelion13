import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import Top from "./pages/Top";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyPage from "./pages/MyPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route index element={<Top />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
