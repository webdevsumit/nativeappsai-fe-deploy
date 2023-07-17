import {
    Outlet,
    createBrowserRouter, 
    // Outlet,
} from "react-router-dom";

// loaders
import { loader as authLoader } from "../components/Auth";
import { loader as SignupLoader } from './../pages/Signup';
import { loader as OrderDetailsLoader } from './../pages/OrderDetails';
import { loader as SignoutLoader } from './../components/SignOut';
import { loader as AccountLoader } from './../pages/Account';
import { loader as StoreDashboardLoader } from './../pages/StoreDashboard';
// import { loader as AppConfirmPageLoader } from "../pages/AppConfirmPage";
import EditProduct, { loader as editProductLoader } from "../pages/EditProduct";
import Landing from "./../pages/Landing"
import TermsAndConditions from "./../pages/TermsAndConditions"
import Signup from './../pages/Signup';
import OrderDetails from './../pages/OrderDetails'
import Error404Page from './../components/Error404Page'
import Login from './../pages/Login';
// import ForgotPassword from './../pages/ForgotPassword';
import Auth from "../components/Auth";
import PricacyPolicy from "../pages/PricacyPolicy";
import SignOut from './../components/SignOut';
// import Meets from "../pages/Meets";
import Products from "../pages/Products";
import AddNewProduct from "../pages/AddNewProduct";
import SignupAddStoreDetails from "../pages/SignupAddStoreDetails";
import Orders from "../pages/Orders";
import Account from "../pages/Account";
import UserMenu from "../components/UserMenu";
import StoreDashboard from "../pages/StoreDashboard";
import AppSettings from "../pages/AppSettings";
import AppGenerator from "../pages/AppGenerator";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Auth />,
        errorElement: <Error404Page />,
        loader: authLoader,
        children: [
            {
                path: "/",
                element: <p></p>,
            },
            {
                path: "/dashboard",
                element: <StoreDashboard />,
                loader: StoreDashboardLoader,
            },
            {
                path: "/app-settings",
                element: <AppSettings />,
            },
            {
                path: "/app-generator",
                element: <AppGenerator />,
            },
            {
                path: "/products",
                element: <Outlet />,
                children: [
                    {
                        path: "/products",
                        element: <Products />,
                    },
                    {
                        path: "/products/add",
                        element: <AddNewProduct />,
                    },
                    {
                        path: "/products/edit/:id",
                        element: <EditProduct />,
                        loader: editProductLoader,
                    },
                ]
            },
            {
                path: "/customer-service",
                element: <h3 style={{textAlign: 'center'}}><a target='blank' href='https://wa.me/917999004229'>Chat on Whatsapp</a></h3>,
            },
            {
                path: "/orders",
                element: <Outlet />,
                children: [
                    {
                        path: "/orders",
                        element: <Orders />,
                    },
                    {
                        path: "/orders/:orderId",
                        element: <OrderDetails />,
                        loader: OrderDetailsLoader,
                    },
                ]
            },
            {
                path: "/account",
                element: <Outlet />,
                children: [
                    {
                        path: "/account",
                        element: <Account />,
                        loader: AccountLoader,
                    }
                ]
            },
            // {
            //     path: "/meeting/:meetId/confirm",
            //     element: <AppConfirmPage />,
            //     loader: AppConfirmPageLoader
            // },
            {
                path: "/menu",
                element: <UserMenu />,
            },
            {
                path: "/yourPrivaryPolicy",
                element: <UserMenu />,
            },
            {
                path: "/yourTermsAndConditions",
                element: <UserMenu />,
            },
        ]
    },
    {
        path: "/landing",
        element: <Landing />,
        errorElement: <Error404Page />,
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
        element: <Outlet />,
        children: [
            {
                path: "/signup/:planType",
                element: <Signup />,
                loader: SignupLoader,
            },
            {
                path: "/signup/:planType/store",
                element: <SignupAddStoreDetails />,
                loader: SignupLoader,
            }
        ]
    },
    {
        path: "/login",
        element: <Login />,
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