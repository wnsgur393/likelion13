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
      </Routes>
    </Router>
  );
}
