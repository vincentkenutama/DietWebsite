import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import LoginRedirect from "./Pages/LoginRedirect";
import Dashboard from "./Pages/Dashboard";
import UserPage from "./Pages/UserPage";

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
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);