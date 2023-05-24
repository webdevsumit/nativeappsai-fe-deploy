import {
    createBrowserRouter, 
    // Outlet,
} from "react-router-dom";

// loaders
import { loader as authLoader } from "../components/Auth";
import { loader as SignupLoader } from './../pages/Signup';
import { loader as SignoutLoader } from './../components/SignOut';

import Landing from "./../pages/Landing"
import TermsAndConditions from "./../pages/TermsAndConditions"
import Signup from './../pages/Signup';
import Error404Page from './../components/Error404Page'
import Login from './../pages/Login';
// import ForgotPassword from './../pages/ForgotPassword';
import Auth from "../components/Auth";
import PricacyPolicy from "../pages/PricacyPolicy";
import SignOut from './../components/SignOut';
import Meets from "../pages/Meets";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Auth />,
        errorElement: <Error404Page />,
        loader: authLoader,
        children: [
            {
                path: "/",
                element: <Meets />,
            },
        ]
    },
    {
        path: "/landing",
        element: <Landing />,
        errorElement: <Error404Page />,
    },
    {
        path: "/customer-service",
        element: <h6>Customer Care</h6>,
    },
    {
        path: "/termsAndConditions",
        element: <TermsAndConditions />,
    },
    {
        path: "/privacyPolicy",
        element: <PricacyPolicy />,
    },
    {
        path: "/signup/:planType",
        element: <Signup />,
        loader: SignupLoader,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/create-store",
        element: <h6>Customer account</h6>,
    },
    {
        path: "/forgot-password",
        element: <h6>Forgot Password</h6>,
    },
    // {
    //     path: "/forgot-password",
    //     element: <ForgotPassword />,
    // },
    {
        path: "/sign-out",
        element: <SignOut />,
        loader: SignoutLoader,
    },
]);