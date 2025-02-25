import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./AppLayout";
import FavPage from "./pages/FavPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/fav" element={<FavPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
