import React, { useEffect, useState } from 'react'
import { 
    redirect, 
    // useLoaderData, 
    // useNavigate, 
    Outlet 
} from 'react-router-dom';
// import { checkAndSetUserAPI } from '../../apis/common';
// import FallingStarts from '../FallingStars';
import LogoOnBlue from './../LogoOnBlue';
import UserNavbar from '../UserNavbar';
import './style.css';
import GoliveTopBar from '../GoliveTopBar';
import UserSidebar from '../UserSidebar';
// import { toast } from 'react-hot-toast';

export async function loader() {
    let token = localStorage.getItem('token');
    let isAuthenticated = false;
    // let open_store_on_start = false;
    // let storeId = null;
    // await checkAndSetUserAPI().then((res) => {
    //     if(res.data.status === 'success'){
    //         localStorage.setItem("fullname", res.data.fullname);
    //         localStorage.setItem("notifications_count", res.data.notifications_count);
    //         localStorage.setItem("products_in_bag_count", res.data.products_in_bag_count);
    //         localStorage.setItem("is_store_owner", res.data.isStore_owner);
    //         localStorage.setItem("store_id", res.data.store_id);
    //         localStorage.setItem("store_logo", res.data.store_logo);
    //         localStorage.setItem("user_theme_color", res.data.user_theme_color);
    //         localStorage.setItem("store_theme_color", res.data.store_theme_color);
    //         localStorage.setItem("lng", res.data.language);
    //         localStorage.setItem('currentStoreCurrency', res.data.currency);
    //         localStorage.setItem('currentStoreDateFormat', res.data.dateFormat);
    //         // storeId = res.data.store_id
    //         // open_store_on_start = res.data.open_store_on_start;
    //         isAuthenticated = true;
    //     }
    // }).catch(err => toast.error(err.message));
    
    // // ******************* This feature will not work for now *******************
    // // if (open_store_on_start && !!storeId) return redirect(`/my-store/dashboard`);
    // if (!!token && isAuthenticated) return { redirectTo: '/' };
    // localStorage.clear();
    // if(!isAuthenticated){
    //     localStorage.setItem('afterAuthRedirectUrl', window.location.pathname);
    // }
    return redirect('/landing');
}

function Auth() {

    // const { redirectTo } = useLoaderData();
    // const history = useNavigate();
    // history(redirectTo);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // document.title = 'Landing';
        let userThemeColor = localStorage.getItem('user_theme_color');
        let storeThemeColor = localStorage.getItem('store_theme_color');
        var r = document.querySelector(':root');
        if(!!userThemeColor && userThemeColor!=='null' && userThemeColor!=='undefined') {
		    r.style.setProperty('--user-primary', userThemeColor);
        }
        if(!!storeThemeColor && storeThemeColor!=='null' && storeThemeColor!=='undefined') {
		    r.style.setProperty('--store-primary', storeThemeColor);
        }
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        // eslint-disable-next-line
    }, [])

    if (isLoading) return (<LogoOnBlue bgColor="var(--user-primary)" />)

    else return (
        <div>
            <header className='Auth-extra-space-for-top-bar'>
                <GoliveTopBar />
            </header>
            <main className='Auth-main-content'>
                <div className='Auth-main-content-left-container'>
                    <UserSidebar />
                </div>
                <div className='Auth-main-content-main-container'>
                    <Outlet />
                </div>
                <div className='Auth-main-content-right-container'>

                </div>
            </main>
            <nav className='Auth-extra-space-for-navigation-bar'>
                <UserNavbar />
            </nav>
        </div>
    );
}

export default Auth;