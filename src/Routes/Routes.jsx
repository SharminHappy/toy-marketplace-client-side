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
import MyToy from "../MyToy/MyToy";
import Blog from "../Pages/Blog/Blog";



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
        path:'/alltoys',
        element:<PrivateRoute><AllToys></AllToys></PrivateRoute>,
        
      },
      {
        path:'/singleToy/:id',
        element:<PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)

      },
      {
        path:'/mytoy',
        element:<PrivateRoute><MyToy></MyToy></PrivateRoute>,

      },
      {
        path:'/blog',
        element:<Blog></Blog>


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