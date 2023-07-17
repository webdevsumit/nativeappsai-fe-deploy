import React from 'react';
// import { NavLink } from 'react-router-dom';
import './style.css';

function ShopOnLiveTopBar({
	bgColor = 'var(--user-primary)',
	showStoreMenu=false
}) {
	return (
		<div className='ShopOnLiveTopBar' style={{ backgroundColor: bgColor }}>
			{/* <img className='ShopOnLiveTopBar-logo' src='/assets/svgs/logo.svg' alt='logo' /> */}
			<h1 className='ShopOnLiveTopBar-logo'>Native Apps AI</h1>
		</div>
	)
}

export default ShopOnLiveTopBar