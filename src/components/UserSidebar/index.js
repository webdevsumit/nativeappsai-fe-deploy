import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function UserSidebar() {

	return (
		<div className='UserSidebar'>
			<NavLink to='/dashboard' className={({ isActive, isPending }) => isActive ? "UserSidebar-active": isPending ? "UserSidebar-pending" : ""}>
				<img className='UserSidebar-icon' src='/assets/icons/svgs/homeWhite2.svg' alt='home' />	
					Dashboard
				<h6 className='UserSidebar-custom-active-button'>:)</h6>
			</NavLink>
			<NavLink to='/products' className={({ isActive, isPending }) => isActive ? "UserSidebar-active": isPending ? "UserSidebar-pending" : ""}>
				<img className='UserSidebar-icon' src='/assets/icons/pngs/holding-box.png' alt='products' />
					My Products
				<h6 className='UserSidebar-custom-active-button'>:)</h6>
			</NavLink>
			<NavLink to='/orders' className={({ isActive, isPending }) => isActive ? "UserSidebar-active": isPending ? "UserSidebar-pending" : ""}>
				<img className='UserSidebar-icon' src='/assets/icons/svgs/orders.svg' alt='orders' />
					Orders
				<h6 className='UserSidebar-custom-active-button'>:)</h6>
			</NavLink>
			<NavLink to='/account' className={({ isActive, isPending }) => isActive ? "UserSidebar-active": isPending ? "UserSidebar-pending" : ""}>
				<img className='UserSidebar-icon' src='/assets/icons/svgs/accounts.svg' alt='account-settings' />
					Account
				<h6 className='UserSidebar-custom-active-button'>:)</h6>
			</NavLink>
			<NavLink to='/app-settings' className={({ isActive, isPending }) => isActive ? "UserSidebar-active": isPending ? "UserSidebar-pending" : ""}>
				<img className='UserSidebar-icon' src='/assets/icons/svgs/settings.svg' alt='customerCare' />
					App Settings
				<h6 className='UserSidebar-custom-active-button'>:)</h6>
			</NavLink>
			<NavLink to='/app-generator' className={({ isActive, isPending }) => isActive ? "UserSidebar-active": isPending ? "UserSidebar-pending" : ""}>
				<img className='UserSidebar-icon' src='/assets/icons/svgs/exploreWhite.svg' alt='customerCare' />
					AI App Generator
				<h6 className='UserSidebar-custom-active-button'>:)</h6>
			</NavLink>
			<NavLink to='/customer-service' className={({ isActive, isPending }) => isActive ? "UserSidebar-active": isPending ? "UserSidebar-pending" : ""}>
				<img className='UserSidebar-icon' src='/assets/icons/svgs/customerCare.svg' alt='customerCare' />
					Customer Care
				<h6 className='UserSidebar-custom-active-button'>:)</h6>
			</NavLink>
			<NavLink to='/sign-out' className={({ isActive, isPending }) => isActive ? "UserSidebar-active": isPending ? "UserSidebar-pending" : ""}>
				<img className='UserSidebar-icon' src='/assets/icons/svgs/signout.svg' alt='signout' />
					Logout
				<h6 className='UserSidebar-custom-active-button'>:)</h6>
			</NavLink>
		</div>
	)
}

export default UserSidebar;