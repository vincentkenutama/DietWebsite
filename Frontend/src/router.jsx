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