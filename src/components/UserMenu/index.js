import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function UserMenu() {

    return (
        <div className='UserMenu'>
            {/* <Link to={`/menu/account-settings`} >{t("links.account")}</Link> */}
            {/* <Link to={`/menu/general-settings`} >{t("links.settings")}</Link> */}
            {/* <Link to={`/menu/previous-orders`} >{t("links.previous-orders")}</Link> */}
            {/* <Link to={`/menucustomer-service`} >{t("links.cs")}</Link> */}
            <Link to={`/sign-out`} >Sign Out</Link>
        </div>
    )
}

export default UserMenu