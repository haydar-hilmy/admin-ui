import ErrorRoute from "./pages/errorPage";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />, // diarahkan otomatis ke /login
    errorElement: <ErrorRoute/>
  },
  {
    path: "/login",
    element: <SignInPage/>,
  },
  {
    path: "/register",
    element: <SignUpPage/>,
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