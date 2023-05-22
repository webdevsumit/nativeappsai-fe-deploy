import {
    createBrowserRouter, 
    // Outlet,
} from "react-router-dom";

// loaders
import { loader as authLoader } from "../components/Auth";
import { loader as SignupLoader } from './../pages/Signup';

import Landing from "./../pages/Landing"
import TermsAndConditions from "./../pages/TermsAndConditions"
import Signup from './../pages/Signup';
import Error404Page from './../components/Error404Page'
import Login from './../pages/Login';
// import ForgotPassword from './../pages/ForgotPassword';
import Auth from "../components/Auth";
import PricacyPolicy from "../pages/PricacyPolicy";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Auth />,
        errorElement: <Error404Page />,
        loader: authLoader,
        children: [
        //     {
        //         path: "/explore",
        //         element: <Explore />,
        //         children: [
        //             {
        //                 path: "/explore/stores",
        //                 element: <ExploreStores />,
        //             },
        //         ]
        //     },
        //     {
        //         path: "/notifications",
        //         element: <UserNotifications /> ,
        //     },
        //     {
        //         path: "/bag",
        //         element: <Outlet /> ,
        //         children: [
        //             {
        //                 path: "/bag",
        //                 element: <UserBag />,
        //                 loader: UserBagLoader,
        //             },
        //             {
        //                 path: "/bag/addressAndPay",
        //                 element: <SetAddressAndPay />,
        //                 loader: SetAddressAndPayLoader,
        //             },
        //             {
        //                 path: "/bag/BrazilPayment",
        //                 element: <BrazilPayment />,
        //                 // loader: SetAddressAndPayLoader,
        //             },
        //             {
        //                 path: "/bag/IndiaPayment",
        //                 element: <IndiaPayment />,
        //                 // loader: SetAddressAndPayLoader,
        //             },
        //             {
        //                 path: "/bag/USPayment",
        //                 element: <USPayment />,
        //                 // loader: SetAddressAndPayLoader,
        //             },
        //         ]
        //     },
        //     {
        //         path: "/menu",
        //         element: <Outlet />,
        //         children: [
        //             {
        //                 path: "/menu",
        //                 element: <UserMenu />,
        //             },
        //             {
        //                 path: "/menu/account-settings",
        //                 element: <UserAccount />,
        //                 loader: UserAccountLoader,
        //             },
        //             {
        //                 path: "/menu/general-settings",
        //                 element: <GlobalSettings />,
        //                 loader: GlobalSettingsLoader,
        //             },
        //             {
        //                 path: "/menu/previous-orders",
        //                 element: <Outlet />,
        //                 children: [
        //                     {
        //                         path: "/menu/previous-orders",
        //                         element: <PreviousOrders />,
        //                     },
        //                     {
        //                         path: "/menu/previous-orders/:orderId",
        //                         element: <OrderDetails />,
        //                         loader: OrderDetailsLoader,
        //                     },
        //                 ]
        //             },
        //         ]
        //     },
        //     {
        //         path: "/",
        //         element: <AllExploredStores />,
        //         loader: AllExploredStoresLoader,
        //     },
        //     {
        //         path: "/:storeId",
        //         element: <Outlet />,
        //         children: [
        //             {
        //                 path: "/:storeId",
        //                 element: <StoreViewForUser />,
        //                 loader: StoreViewForUserLoader,
        //             },
        //             {
        //                 path: "/:storeId/grid",
        //                 element: <StoreViewForUserGrid />,
        //                 loader: StoreViewForUserLoader,
        //                 children: [
        //                     {
        //                         path: "/:storeId/grid/:productId",
        //                         element: <StoreViewForUserGridProduct />,
        //                         loader: StoreViewForUserGridProductLoader,
        //                     },
        //                 ]
        //             },
        //         ]
        //     },
        //     {
        //         path: "/create-store",
        //         element: <CreateStore />,
        //         loader: CreateStoreLoader,
        //     },
        ]
    },
    // {
    //     path: "/my-store",
    //     element: <StoreAuth />,
    //     errorElement: <Error404Page />,
    //     loader: StoreAuthLoader,
    //     children: [
    //         {
    //             path: "/my-store/dashboard",
    //             element: <StoreDashboard />,
    //             loader: StoreDashboardLoader,
    //         },
    //         {
    //             path: "/my-store/import-products",
    //             element: <ImportProducts />,
    //             loader: ImportProductsLoader,
    //             children: [
    //                 {
    //                     path: "/my-store/import-products",
    //                     element: <ImportProductsMenu />,
    //                 },
    //                 {
    //                     path: "/my-store/import-products/viaCSV",
    //                     element: <ImportProductsViaCsvFile />,
    //                 },
    //                 {
    //                     path: "/my-store/import-products/viaTicTag",
    //                     element: <TictagIntegration />
    //                 },
    //                 {
    //                     path: "/my-store/import-products/addManually",
    //                     element: <AddNewProduct />,
    //                     loader: AddNewProductLoader
    //                 },
    //             ]
    //         },
    //         {
    //             path: "/my-store/notifications",
    //             element: <UserNotifications onStore={true} />,
    //         },
    //         {
    //             path: "/my-store/orders",
    //             element: <Outlet />,
    //             children: [
    //                 {
    //                     path: "/my-store/orders",
    //                     element: <StorePreviousOrders />,
    //                 },
    //                 {
    //                     path: "/my-store/orders/:orderId",
    //                     element: <OrderDetails onStore={true} />,
    //                     loader: OrderDetailsLoader,
    //                 },
    //             ]
    //         },
    //         {
    //             path: "/my-store/balance",
    //             element: <h6>balance</h6>,
    //         },
    //         {
    //             path: "/my-store/managedByTicTag",
    //             element: <TicTagStoreManagementMessage />,
    //         },
    //         {
    //             path: "/my-store/menu",
    //             element: <StoreMenu />,
    //             children: [
    //                 {
    //                     path: '/my-store/menu/store-settings',
    //                     element: <StoreSettings />,
    //                     loader: StoreSettingsLoader,
    //                 },
    //                 {
    //                     path: '/my-store/menu/manage-products',
    //                     element: <ManageProducts />,
    //                     loader: ManageProductsLoader,
    //                     children: [
    //                         {
    //                             path: '/my-store/menu/manage-products/:productId',
    //                             element: <MyStoreEditProduct />,
    //                             loader: MyStoreEditProductLoader,
    //                         },
    //                     ]
    //                 },
    //                 {
    //                     path: '/my-store/menu/general-settings',
    //                     element: <MyStoreSettings />,
    //                     loader: MyStoreSettingsLoader,
    //                 },
    //                 {
    //                     path: '/my-store/menu/subscription',
    //                     element: <h6>Subscription (FREE)</h6>,
    //                 },
    //             ]
    //         },
    //     ]
    // },
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
    // {
    //     path: "/sign-out",
    //     element: <SignOut />,
    //     loader: SignOutLoader,
    // },
]);