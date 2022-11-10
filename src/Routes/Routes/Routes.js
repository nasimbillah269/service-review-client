import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddServices from "../../pages/AddServices/AddServices";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home";
// import LimitService from "../../pages/LimitService/LimitService";
import Login from "../../pages/Login/Login";
import MyReview from "../../pages/MyReview/MyReview";
import ServiceDetail from "../../pages/ServiceDetail/ServiceDetail";
import Services from "../../pages/Services/Services";
import SingUp from "../../pages/SignUp/SingUp";
import UpdateReview from "../../pages/UpdateReview/UpdateReview";
import PrivetRoute from "../PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://service-review-server-khaki.vercel.app/services/limit'),
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://service-review-server-khaki.vercel.app/services')
            },
            {
                path: '/services/:_id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({ params }) => fetch(`https://service-review-server-khaki.vercel.app/services/${params._id}`)
            },
            {
                path: '/reviews',
                element: <PrivetRoute><MyReview></MyReview></PrivetRoute>,
                loader: () => fetch('https://service-review-server-khaki.vercel.app/reviews')
            },
            {
                path: '/addservices',
                element: <PrivetRoute><AddServices></AddServices></PrivetRoute>

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/updatereview/:_id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://service-review-server-khaki.vercel.app/reviews/${params._id}`)

            },

            {
                path: '/login',
                element: <Login></Login>,

            },
            {
                path: '/signup',
                element: <SingUp></SingUp>
            }
        ]
    }

]);
export default router;