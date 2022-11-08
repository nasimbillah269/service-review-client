import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import ServiceDetail from "../../pages/ServiceDetail/ServiceDetail";
import Services from "../../pages/Services/Services";
import SingUp from "../../pages/SignUp/SingUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:_id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params._id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SingUp></SingUp>
            }
        ]

    }

]);
export default router;