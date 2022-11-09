import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddServices from "../../pages/AddServices/AddServices";
import Home from "../../pages/Home/Home";
// import LimitService from "../../pages/LimitService/LimitService";
import Login from "../../pages/Login/Login";
import MyReview from "../../pages/MyReview/MyReview";
import ServiceDetail from "../../pages/ServiceDetail/ServiceDetail";
import Services from "../../pages/Services/Services";
import SingUp from "../../pages/SignUp/SingUp";
import PrivetRoute from "../PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services/limit'),
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
                path: '/reviews',
                element: <PrivetRoute><MyReview></MyReview></PrivetRoute>,
                loader: () => fetch('http://localhost:5000/reviews')
            },
            {
                path: '/addservices',
                element: <PrivetRoute><AddServices></AddServices></PrivetRoute>

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