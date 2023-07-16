import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function UserNavbar({
	bgColor = 'var(--user-primary)'
}) {
	return (
		<div className='UserNavbar' style={{ backgroundColor: bgColor }}>
			<NavLink to='/products' className={({ isActive, isPending }) => isActive ? "UserNavbar-active": isPending ? "UserNavbar-pending" : ""}>
				<img className='UserNavbar-icon' src='/assets/icons/pngs/holding-box.png' alt='Products' />
			</NavLink>
			<NavLink to='/orders' className={({ isActive, isPending }) => isActive ? "UserNavbar-active": isPending ? "UserNavbar-pending" : ""}>
				<img className='UserNavbar-icon' src='/assets/icons/svgs/orders.svg' alt='orders' />
			</NavLink>
			<NavLink to='/account' className={({ isActive, isPending }) => isActive ? "UserNavbar-active": isPending ? "UserNavbar-pending" : ""}>
				<img className='UserNavbar-icon' src='/assets/icons/svgs/accounts.svg' alt='accounts' />
			</NavLink>
			<NavLink to='/customer-service' className={({ isActive, isPending }) => isActive ? "UserNavbar-active": isPending ? "UserNavbar-pending" : ""}>
				<img className='UserNavbar-icon' src='/assets/icons/svgs/customerCare.svg' alt='customerCare' />
			</NavLink>
			<NavLink to='/menu' className={({ isActive, isPending }) => isActive ? "UserNavbar-active": isPending ? "UserNavbar-pending" : ""}>
				<img className='UserNavbar-icon' src='/assets/icons/svgs/menuWhite.svg' alt='menu' />
			</NavLink>
		</div>
	)
}

export default UserNavbar