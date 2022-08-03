import { lazy } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Standard from "./pages/Standard";
import TeacherClass from "./pages/TeacherPage/TeacherClass";
const MainLayout = lazy(() => import("./layout/MainLayout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const StudentPage = lazy(() => import("./pages/StudentPage"));
const QuestionPage = lazy(() => import("./pages/StudentPage/QuestionPage"));
const TeacherMainLayout = lazy(() =>
    import("./layout/TeacherLayout/MainTeacherLayout")
);
const TeacherLogin = lazy(() => import("./pages/TeacherPage/TeacherLogin"));
const MainStudentLayout = lazy(() =>
    import("./layout/StudentLayout/MainStudentLayout")
);
const StudentHomePage = lazy(() =>
    import("./pages/StudentPage/StudentHomePage")
);
export default function AppRouter() {
    const { user } = useSelector((state) => state.userGoogle);
    const userInformation = localStorage.getItem("user");
    return (
        <Routes>
            {/* ----- Guest -------- */}
            <Route path="/" element={<MainLayout></MainLayout>}>
                <Route path="/" element={<HomePage></HomePage>}></Route>
            </Route>
            <Route path="/standard" element={<Standard></Standard>}></Route>
            <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
            <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
            {/* ----- Teacher -------- */}
            <Route
                path="/teacher"
                element={
                    userInformation ? (
                        <TeacherMainLayout></TeacherMainLayout>
                    ) : (
                        <Navigate to="/" />
                    )
                }
            >
                <Route
                    path="/teacher/class"
                    element={<TeacherClass></TeacherClass>}
                ></Route>
            </Route>
            <Route path="/teacher/login" element={<TeacherLogin />}></Route>
            {/* ----- Student -------- */}
            <Route
                path="/student"
                element={
                    userInformation ? (
                        <MainStudentLayout></MainStudentLayout>
                    ) : (
                        <Navigate to="/" />
                    )
                }
            >
                <Route
                    path="/student"
                    element={<StudentHomePage></StudentHomePage>}
                ></Route>
            </Route>
        </Routes>
    );
}
