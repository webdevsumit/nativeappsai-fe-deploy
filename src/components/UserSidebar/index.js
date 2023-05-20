import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function UserSidebar() {

	return (
		<div className='UserSidebar'>
			<NavLink to='/' className={({ isActive, isPending }) => isActive ? "UserSidebar-active": isPending ? "UserSidebar-pending" : ""}>
				<img className='UserSidebar-icon' src='/assets/icons/svgs/homeWhite2.svg' alt='home' />
					Home
				<h6 className='UserSidebar-custom-active-button'>:)</h6>
			</NavLink>
		</div>
	)
}

export default UserSidebar;