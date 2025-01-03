import BalancePage from "./pages/balance";
import DashboardPage from "./pages/dashboard";
import ErrorRoute from "./pages/errorPage";
import ForgotPage from "./pages/forgot";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import TransactionPage from "./pages/transaction";
import GoalPage from "./pages/goalpage";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
const App = () => {

  const { isLoggedIn } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />
  }

  const myRouter = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Navigate to="/login" replace />, // diarahkan otomatis ke /login
    //   errorElement: <ErrorRoute/>
    // },
    {
      path: "/",
      element: <RequireAuth><DashboardPage /></RequireAuth>,
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
      element: <RequireAuth><BalancePage /></RequireAuth>
    },
    {
      path: "/transaction",
      element: <RequireAuth><TransactionPage/></RequireAuth>
    },
    {
      path: "/goals",
      element: <RequireAuth><GoalPage/></RequireAuth>
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};



export default App;