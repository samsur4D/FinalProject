import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Contact from "../Pages/Contact";
import Secret from "../Pages/Common/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/Dashboard/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/contact',
          element: <PrivateRoute> <Contact></Contact> </PrivateRoute>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/secret',
          element: <PrivateRoute> <Secret></Secret> </PrivateRoute>
        }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute> <DashBoard></DashBoard>  </PrivateRoute>,
    children: [
       {
        path: 'cart',
        element: <Cart></Cart>
       },
      //  admin routes
       {
        path: 'usersAll',
        element: <AllUsers></AllUsers>
       },
       {
        path: 'cart',
        element: <Cart></Cart>
       },
       {
        path: 'cart',
        element: <Cart></Cart>
       },
       {
        path: 'cart',
        element: <Cart></Cart>
       },
       {
        path: 'cart',
        element: <Cart></Cart>
       },
    ]
  }
]);
