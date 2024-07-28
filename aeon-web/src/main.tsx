import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "../src/app/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./app/pages/ErrorPage.tsx";
import Calculator from "./app/pages/Calculator.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/calculator",
    element: <Calculator />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
