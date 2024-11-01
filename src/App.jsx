import BalancePage from "./pages/balance";
import DashboardPage from "./pages/dashboard";
import ErrorRoute from "./pages/errorPage";
import ForgotPage from "./pages/forgot";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
const myRouter = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Navigate to="/login" replace />, // diarahkan otomatis ke /login
  //   errorElement: <ErrorRoute/>
  // },
  {
    path: "/",
    element: <DashboardPage />, // diarahkan otomatis ke /login
    errorElement: <ErrorRoute/>
  },
  {
    path: "/login",
    element: <SignInPage/>,
  },
  {
    path: "/register",
    element: <SignUpPage/>,
  },
  {
    path: "/forgot",
    element: <ForgotPage/>
  },
  {
    path: "/balance",
    element: <BalancePage />
  }
]);

const App = () => {

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;