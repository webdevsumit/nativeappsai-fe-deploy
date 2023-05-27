import React, { useEffect, useState } from 'react'
import { 
    redirect, 
    // useLoaderData, 
    // useNavigate, 
    Outlet 
} from 'react-router-dom';
import { checkStoreOwnerAuthAPI } from '../../apis/common';
// import FallingStarts from '../FallingStars';
import LogoOnBlue from './../LogoOnBlue';
import UserNavbar from '../UserNavbar';
import './style.css';
import ShopOnLiveTopBar from '../ShopOnLiveTopBar';
import UserSidebar from '../UserSidebar';
import { toast } from 'react-hot-toast';

export async function loader() {
    let isAuthenticated = false;
    
    await checkStoreOwnerAuthAPI().then((res) => {
        if(res.data.status === 'success'){
            isAuthenticated = true;
        }else toast.error(res.data.message);
    }).catch(err => toast.error(err.message));
    
    if(!isAuthenticated){
        localStorage.setItem("redirectLink", window.location.pathname);
        return redirect('/landing');
    }
    return {};
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
                <ShopOnLiveTopBar />
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