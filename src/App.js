import React, { Suspense, useEffect } from "react";
import AppRouter from "./AppRouter";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./store/userGoggle/userGoogleSlice";
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
      <Suspense fallback={<></>}>
        <AppRouter></AppRouter>
      </Suspense>
    </>
  );
}

export default App;
