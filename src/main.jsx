import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import List from "./pages/List/LIst.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sign from "./pages/Sign/Sign.jsx";
import {ToastContainer} from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/sign",
    element: <Sign />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer/>
  </StrictMode>
);
