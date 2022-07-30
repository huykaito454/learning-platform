import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import "react-calendar/dist/Calendar.css";
import "sweetalert2/src/sweetalert2.scss";
import QuestionChoice from "./modules/studentmain/QuestionChoice";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
