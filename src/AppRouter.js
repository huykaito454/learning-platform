import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const MainLayout = lazy(() => import("./layout/MainLayout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Route>
      <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
      <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
      <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
    </Routes>
  );
}
