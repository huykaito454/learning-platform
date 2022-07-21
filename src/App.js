import React, { Suspense } from "react";
import AppRouter from "./AppRouter";

function App() {
  return (
    <>
      <Suspense fallback={<></>}>
        <AppRouter></AppRouter>
      </Suspense>
    </>
  );
}

export default App;
