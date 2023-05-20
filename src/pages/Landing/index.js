import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
import './style.css';
import { Link } from 'react-router-dom';

function Landing() {

    return (
        <div className='Landing'>
            <nav className='Landing-nav'>
                <Link to='/landing' className=''>
                    <h1 className='Landing-navHead'>ShopOnLive</h1>
                </Link>
                <div className='Landing-navlinks'>
                    <a href='#landing-services' className=''>
                        <p className='Landing-navLink'>Services</p>
                    </a>
                    <a href='/landing' className=''>
                        <p className='Landing-navLink'>Pricing</p>
                    </a>
                    <a href='/landing' className=''>
                        <p className='Landing-navLink'>Contacts</p>
                    </a>
                </div>
            </nav>
            <man>
                <section id='landing-hero'>
                    <div className='Landing-firstDiv'>
                        <img className='Landing-hero-image' src='/assets/pngs/shoponlive-hero.png' alt='hero' />
                        <div className='Landing-hero-div'>
                            <h1>Everything Everywhere All at Once</h1>
                            <h3>Your Shop on Video Call Shopping App.</h3>
                            <h3>You own Shopping Mobile App. (coming soon)</h3>
                            <h3>Your products on ShopOnLive eccomerce. (coming soon)</h3>
                            <h3>Integrated connection between them.</h3>
                        </div>
                    </div>
                </section>
                <section id='landing-services'>
                    <div className='Landing-services'>
                        <h1>Services</h1>
                        <div className='Landing-services-div'>
                            <div className='Landing-services-div-card'>
                                <h3>Video Call Shopping</h3>
                                <p>People can Schedule Google meet and do video call to you through our app ShopOnLive and can buy products on video call directly from there home. You just need to deliver the products. (Soon we will also do that for you.)</p>
                            </div>
                            <div className='Landing-services-div-card'>
                                <h3>Video Call Shopping</h3>
                                <p>People Schedule Google meeting to you with our app and can purchase product on video call.</p>
                            </div>
                            <div className='Landing-services-div-card'>
                                <h3>Video Call Shopping</h3>
                                <p>People Schedule Google meeting to you with our app and can purchase product on video call.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </man>
        </div>
    )
}

export default Landing;