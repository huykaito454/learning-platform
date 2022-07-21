import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const MainLayout = lazy(() => import("./layout/MainLayout"));
const HomePage = lazy(() => import("./pages/HomePage"));
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Route>
    </Routes>
  );
}
