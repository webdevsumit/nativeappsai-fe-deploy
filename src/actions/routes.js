import {
    createBrowserRouter, Outlet,
} from "react-router-dom";

// loaders
import { loader as authLoader } from "../components/Auth";
// import { loader as AllExploredStoresLoader } from "../components/AllExploredStores";
// import { loader as StoreAuthLoader } from "../components/StoreAuth";
// import { loader as CreateStoreLoader } from "../components/CreateStore";
// import { loader as SignOutLoader } from "../components/SignOut";
// import { loader as StoreSettingsLoader } from "../components/StoreSettings";
// import { loader as ImportProductsLoader } from "../components/Import/ImportProducts";
// import { loader as ManageProductsLoader } from "../components/ManageProducts";
// import { loader as MyStoreEditProductLoader } from "../components/MyStoreEditProduct";
// import { loader as StoreViewForUserLoader } from "../components/StoreViewForUser";
// import { loader as StoreViewForUserGridProductLoader } from "../components/StoreViewForUserGridProduct";
// import { loader as UserBagLoader } from "../components/UserBag";
// import { loader as SetAddressAndPayLoader } from "../components/SetAddressAndPay";
// import { loader as UserAccountLoader } from "../components/UserAccount";
// import { loader as GlobalSettingsLoader } from "../components/GlobalSettings";
// import { loader as MyStoreSettingsLoader } from "../components/MyStoreSettings";
// import { loader as OrderDetailsLoader } from "../components/OrderDetails";
// import { loader as StoreDashboardLoader } from "../components/StoreDashboard";
// import { loader as AddNewProductLoader } from "../components/AddNewProduct";

// import GlobalLoader from './../components/commons/GlobalLoader'
import Landing from "./../pages/Landing"
import TermsAndConditions from "./../pages/TermsAndConditions"
// import Signup from './../pages/Signup';
import Error404Page from './../components/Error404Page'
// import Login from './../pages/Login';
// import ForgotPassword from './../pages/ForgotPassword';
import Auth from "../components/Auth";
import PricacyPolicy from "../pages/PricacyPolicy";
// import AllExploredStores from "../components/AllExploredStores";
// import StoreAuth from "../components/StoreAuth";
// import Explore from "../components/Explore";
// import ExploreStores from "../components/ExploreStores";
// import UserMenu from "../components/UserMenu";
// import CreateStore from "../components/CreateStore";
// import SignOut from "../components/SignOut";
// import StoreMenu from "../components/StoreMenu";
// import StoreSettings from "../components/StoreSettings";
// import ImportProducts from "../components/Import/ImportProducts";
// import ImportProductsMenu from "../components/Import/ImportProductsMenu";
// import ImportProductsViaCsvFile from "../components/Import/ImportProductsViaCsvFile";
// import ManageProducts from "../components/ManageProducts";
// import MyStoreEditProduct from "../components/MyStoreEditProduct";
// import MyStoreSettings from "../components/MyStoreSettings";
// import StoreViewForUser from "../components/StoreViewForUser";
// import StoreViewForUserGrid from "../components/StoreViewForUserGrid";
// import StoreViewForUserGridProduct from "../components/StoreViewForUserGridProduct";
// import UserNotifications from "../components/UserNotifications";
// import UserBag from "../components/UserBag";
// import SetAddressAndPay from "../components/SetAddressAndPay";
// import BrazilPayment from "../components/paymentPages/BrazilPayment";
// import IndiaPayment from "../components/paymentPages/IndiaPayment";
// import USPayment from "../components/paymentPages/USPayment";
// import TictagIntegration from "../components/Import/TictagIntegration";
// import UserAccount from "../components/UserAccount";
// import GlobalSettings from "../components/GlobalSettings";
// import PreviousOrders from "../components/PreviousOrders";
// import OrderDetails from "../components/OrderDetails";
// import StorePreviousOrders from "../components/StorePreviousOrders";
// import StoreDashboard from "../components/StoreDashboard";
// import TicTagStoreManagementMessage from "../pages/TicTagStoreManagementMessage";
// import AddNewProduct from "../components/AddNewProduct";

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
    // {
    //     path: "/signup",
    //     element: <Signup />,
    // },
    // {
    //     path: "/login",
    //     element: <Login />,
    // },
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