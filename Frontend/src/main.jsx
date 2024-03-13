import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage/>,
  },
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: '/signup',
    element: <SignUpPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);