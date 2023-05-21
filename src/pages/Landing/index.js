import React, { } from 'react'
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
                    <a href='#landing-pricing' className=''>
                        <p className='Landing-navLink'>Pricing</p>
                    </a>
                    <a href='#landing-contacts' className=''>
                        <p className='Landing-navLink'>Contacts</p>
                    </a>
                </div>
            </nav>
            <main>
                <section id='landing-hero'>
                    <div className='Landing-firstDiv'>
                        <img className='Landing-hero-image' src='/assets/pngs/shoponlive-hero.png' alt='hero' />
                        <div className='Landing-hero-div'>
                            <h1>Everything Everywhere All at Once</h1>
                            <h3>Your Shop on Video Call Shopping App.</h3>
                            <h3>Your products on ShopOnLive eccomerce. (coming soon)</h3>
                            <h3>You own Shopping Mobile App. (coming soon)</h3>
                            <h3>Integration amongst them.</h3>
                        </div>
                    </div>
                </section>
                <section id='landing-services'>
                    <div className='Landing-services'>
                        <h1>Services</h1>
                        <div className='Landing-services-div'>
                            <div className='Landing-services-div-card'>
                                <h3>Video Call Shopping</h3>
                                <p>People can Schedule Google Meet and do video call to you through our app "ShopOnLive" and can buy products on video call directly from their home. You just need to deliver the products. (Soon we will also do that for you.)</p>
                            </div>
                            <div className='Landing-services-div-card'>
                                <h3>Products On Eccomerce</h3>
                                <p>We have lots of clients and they search a lot about products on our ShopOnLive Eccomerce platform. We will list your product over there so people can also contact you through our app. It is basically a single platform with All the Shops and Stores.</p>
                            </div>
                            <div className='Landing-services-div-card'>
                                <h3>Your Own Moble App</h3>
                                <p>We will build Mobile App for your shop that can be downloaded by anyone and can buy items with that app. This will help you to increase your regular clients and your direct sales.</p>
                            </div>
                        </div>
                        <p>Everything will be integrated to each other that mean people can also schedule meeting with you through you own app or through the eccomerce platform.</p>
                    </div>
                </section>
                <section id='landing-pricing'>
                    <div className='Landing-services'>
                        <h1>Pricing</h1>
                        <div className='Landing-services-div'>
                            <div className='Landing-services-div-card Landing-pricing-div-card' style={{backgroundColor: '#27D6F5', border: 'none'}}>
                                <h3>Basic</h3>
                                <div className='Landing-services-div-card-inner'>
                                    <h5>Video Calling App.</h5>
                                    <h5>No - Product on Eccomerce.</h5>
                                    <h5>No - Your own mobile app.</h5>
                                </div>
                                <h4>Rs. 199</h4>
                                <p className='user-submit-button1-light'>Start Free Trial</p>
                            </div>
                            <div className='Landing-services-div-card Landing-pricing-div-card-center Landing-pricing-div-card' style={{border: 'none'}}>
                                <h3>Essential</h3>
                                <div className='Landing-services-div-card-inner'>
                                    <h5>Video Calling App.</h5>
                                    <h5>Products on Eccomerce.</h5>
                                    <h5>No - Your own mobile app.</h5>
                                </div>
                                <h4>Rs. 499</h4>
                                <p className='user-submit-button1-light'>Coming Soon</p>
                            </div>
                            <div className='Landing-services-div-card Landing-pricing-div-card' style={{backgroundColor: '#5533FF', border: 'none'}}>
                                <h3>Premium</h3>
                                <div className='Landing-services-div-card-inner'>
                                    <h5>Video Calling App.</h5>
                                    <h5>Products on Eccomerce.</h5>
                                    <h5>Your own mobile app.</h5>
                                </div>
                                <h4>Rs. 999</h4>
                                <p className='user-submit-button1-light'>Coming Soon</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='landing-contacts'>
                    <div className='Landing-services landing-contacts'>
                        <h1>Contacts & Info</h1>
                        <div className='Landing-services-div Landing-contacts-div'>
                            <a target='blank' href='mailto:sumit@shoponlive.in'>sumit@shoponlive.in</a>
                            <a target='blank' href='tel:917999004229'>+91 7999004229</a>
                            <a target='blank' href='https://wa.me/917999004229'>Chat on Whatsapp</a>
                            <Link to="/">Privacy Policy</Link>
                            <Link to="/">Terms & Conditions</Link>
                        </div>
                    </div>
                </section>
                <footer >
                    <a className='whatsapp-quick-contact' target='blank' href='https://wa.me/917999004229' title='Contact us on whatsapp.'>
                        <img src='/assets/pngs/whatsapp.png' />
                    </a>
                </footer>
            </main>
        </div>
    )
}

export default Landing;