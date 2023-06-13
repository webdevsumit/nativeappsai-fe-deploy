import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function UserSidebar() {

	return (
		<div className='UserSidebar'>
			<NavLink to='/products' className={({ isActive, isPending }) => isActive ? "UserSidebar-active": isPending ? "UserSidebar-pending" : ""}>
				<img className='UserSidebar-icon' src='/assets/icons/svgs/homeWhite2.svg' alt='home' />
					My Products
				<h6 className='UserSidebar-custom-active-button'>:)</h6>
			</NavLink>
			<NavLink to='/account' className={({ isActive, isPending }) => isActive ? "UserSidebar-active": isPending ? "UserSidebar-pending" : ""}>
				<img className='UserSidebar-icon' src='/assets/icons/svgs/accounts.svg' alt='account-settings' />
					Account
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