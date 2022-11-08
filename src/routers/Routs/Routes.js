import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Services from "../../pages/Services/Services";
import SignUp from "../../pages/SignUp/SignUp";


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
                
            }
        ]
    }
])


export default router;