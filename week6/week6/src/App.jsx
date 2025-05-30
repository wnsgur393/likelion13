import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Top10 from "./pages/Top";
import RootLayout from "./routes/RootLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route index element={<Top10 />} />
        </Route>
         {/* Root가 아닌 다른 레이아웃 적용할 땐 여기에 레이아웃 추가하면 된다 */}
      </Routes>
    </Router>
  );
}
