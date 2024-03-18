import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import LoginRedirect from "./Pages/LoginRedirect";
import Dashboard from "./Pages/Dashboard";
import UserPage from "./Pages/UserPage";
import SignUpRedirect from "./Pages/Redirect/SignUpRedirect";

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
  },
  {
    path: '/login/redirect',
    element: <LoginRedirect/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  },
  {
    path: '/user',
    element: <UserPage/>
  },
  {
    path: '/redirect/signup',
    element: <SignUpRedirect/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);