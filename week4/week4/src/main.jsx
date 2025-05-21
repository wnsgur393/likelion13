import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import Search from "./pages/Search";
import RootLayout from "./layouts/RootLayout";
import MyLayout from "./layouts/MyLayout";
import EditName from "./pages/EditName";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path="search" element={<Search />} />
      </Route>
      <Route path="account" element={<MyLayout />}>
        <Route path="edit-name" element={<EditName />} />
      </Route>
    </Routes>
  </BrowserRouter>
);