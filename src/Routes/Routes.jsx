import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddToy from "../Pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import Categorys from "../Pages/Categorys/Categorys";
import AllToys from "../AllToys/AllToys";
import SingleToy from "../Pages/SingleToy/SingleToy";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/addtoy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
      },
      {

        path: '/categorys',
        element: <PrivateRoute><Categorys></Categorys></PrivateRoute>
      },
      {
        path:'/alltoy',
        element:<AllToys></AllToys>,
      },
      {
        path:'/singleToy/:id',
        element:<PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)

      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <SignUp></SignUp>,
      }
    ]
  },
]);

export default router;