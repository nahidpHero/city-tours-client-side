import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Addservice from "../../pages/Addservice/Addservice";
import Blog from "../../pages/Blog/Blog";
import Details from "../../pages/Details/Details";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Review from "../../pages/Review/Review";
import Services from "../../pages/Services/Services";
import SignUp from "../../pages/SignUp/SignUp";
import PrivetRouts from "./PrivetRoutes/PrivetRouts";


const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'home',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/services',
                element:<Services></Services>,
                
            },
            {
                path:'/services/:id',
                element:<Details></Details>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
                
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/review',
                element:<PrivetRouts><Review></Review></PrivetRouts>
            },
            {
                path:'/addservice',
                element:<PrivetRouts><Addservice></Addservice></PrivetRouts>
            }

        ]
    }
])


export default router;