import React, { Suspense, useEffect } from "react";
import AppRouter from "./AppRouter";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./store/userGoggle/userGoogleSlice";
import Loading from "./components/Loading/Loading";
function App() {
  const { user } = useSelector((state) => state.userGoogle);
  const dispatch = useDispatch();
  const userLocal = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    try {
      dispatch(setUser(userLocal));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <AppRouter></AppRouter>
      </Suspense>
    </>
  );
}

export default App;
