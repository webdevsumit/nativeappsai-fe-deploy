import React from 'react';
import './style.css';

function LogoOnBlue({
        bgColor = 'var(--user-primary)',
    }) {
    return (
        <div className='LogoOnBlue' style={{ backgroundColor: bgColor }}>
            <div className='LogoOnBlue-head' style={{ backgroundColor: bgColor }}>
                {/* <img className='LogoOnBlue-logo' src='/assets/svgs/logo.svg' alt='logo' /> */}
                <h1>Native Apps AI</h1>
            </div>
        </div>
    )
}

export default LogoOnBlue