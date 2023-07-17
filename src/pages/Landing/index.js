import React, { } from 'react'
// import { Link } from 'react-router-dom';
import './style.css';
import { 
    Link, 
    // useNavigate 
} from 'react-router-dom';

function Landing() {

    // const navigate = useNavigate();

    return (
        <div className='Landing'>
            <nav className='Landing-nav'>
                <Link to='/landing' className=''>
                    <h1 className='Landing-navHead'>Native Apps AI</h1>
                </Link>
                <div className='Landing-navlinks'>
                    <a href='#landing-pricing' className='Landing-navlinks-to-hide'>
                        <p className='Landing-navLink'>Services</p>
                    </a>
                    <a href='#landing-pricing' className='Landing-navlinks-to-hide'>
                        <p className='Landing-navLink'>Pricing</p>
                    </a>
                    <a href='#landing-contacts' className='Landing-navlinks-to-hide'>
                        <p className='Landing-navLink'>Contacts</p>
                    </a>
                    <Link to='/login' className=''>
                        <p className='Landing-navLink'>Login</p>
                    </Link>
                    <a href='#landing-pricing' className=''>
                        <p className='Landing-navLink'>Signup</p>
                    </a>
                </div>
            </nav>
            <main>
                <section id='landing-hero'>
                    <div className='Landing-firstDiv'>
                        <img className='Landing-hero-image' src='/assets/pngs/shoponlive-hero.png' alt='hero' />
                        <div className='Landing-hero-div'>
                            <h1>An AI Tool To Generate Native Apps.</h1>
                            <h3>Get the app in just just 30 minutes.</h3>
                            <h3>All kind of customizations are available.</h3>
                            <h3>Payment Integrations are available.</h3>
                        </div>
                    </div>
                </section>
                {/* <section id='landing-services'>
                    <div className='Landing-services'>
                        <h1>Services and Pricing</h1>
                        <div className='Landing-services-div'>
                            <div className='Landing-services-div-card'>
                                <h3>E-commerce</h3>
                                <p>If you are just starting your business then it is for you.</p>
                                <p>Simple .</p>
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
                        <p className='Landing-services-div-card-note'>Everything will be integrated to each other that mean people can also schedule meeting with you through you own app or through the eccomerce platform.</p>
                    </div>
                </section> */}
                <section id='landing-pricing'>
                    <div className='Landing-services'>
                        <h1>Services & Pricing</h1>
                        <div className='Landing-services-div'>
                            <div className='Landing-services-div-card Landing-pricing-div-card' style={{backgroundColor: '#27d6f579', border: 'none'}}>
                                <h3>Starter</h3>
                                <ul className='Landing-services-div-card-inner'>
                                    <li> Best for initial stage businesses.</li>
                                    <li> Get your own Mobile App in less price than your jeans.</li>
                                    <li> Manage your customers with our beautiful Dashboard.</li>
                                    <li> Start with us without losing your previous customer data.</li>
                                    <li> Replace your existing app with new one.</li>
                                    <li> Your customer will have this app as an update.</li>
                                    <li> Payment Integration will already be there.</li>
                                    <li> Don't worry we are always there to listen you. Just contact customer care.</li>
                                    <li> Export all the data whenever you want.</li>
                                    <li> Cancel the plan anytime without losing the data.</li>
                                    <li> If you just want to sell something, then this plan is best for you to have your own E-Commerce Mobile app.</li>
                                </ul>
                                <p onClick={()=>window.location.href="https://wa.me/917999004229"} className='user-submit-button1-light'>Say Hi! To Get A Demo</p>                            </div>
                            <div className='Landing-services-div-card Landing-pricing-div-card-center Landing-pricing-div-card' style={{border: 'none'}}>
                                <h3>Essential</h3>
                                <ul className='Landing-services-div-card-inner'>
                                    <li> Generate a real native mobile app.</li>
                                    <li> Just tell which kind of app you want.</li>
                                    <li> Choose from examples or create one your own design.</li>
                                    <li> Just tell in the chat and get the app in just in 30 minutes.</li>
                                    <li> You can download .app, .aab, etc files.</li>
                                    <li> Download React Native Project to customize manually.</li>
                                    <li> Payment Integration and much more.</li>
                                    <li> We are always there to listen you. Just contact us.</li>
                                    <li> Build your own Backend or use ours.</li>
                                    <li> Cancel the plan anytime without losing the data.</li>
                                    <li> If you don't like other's disign and want to make one your own then you can do that here.</li>
                                </ul>
                                <p onClick={()=>window.location.href="https://wa.me/917999004229"} className='user-submit-button1-light'>Say Hi! To Get A Demo</p>
                            </div>
                            <div className='Landing-services-div-card Landing-pricing-div-card' style={{backgroundColor: '#411bfb8e', border: 'none'}}>
                                <h3>Premium</h3>
                                <ul className='Landing-services-div-card-inner'>
                                    <li> We are planing to provide 3D apps.</li>
                                    <li> Contact us to know more.</li>
                                    <li> You can give us suggestions or tell your demand for that.</li>
                                </ul>
                                <p onClick={()=>window.location.href="https://wa.me/917999004229"} className='user-submit-button1-light'>Say Hi! To Get A Demo</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='landing-contacts'>
                    <div className='Landing-services landing-contacts'>
                        <h1>Contacts & Info</h1>
                        <div className='Landing-services-div Landing-contacts-div'>
                            <a target='blank' href='mailto:sumit@shoponlive.in'>sumit@nativeappsai.com</a>
                            <a target='blank' href='tel:917999004229'>+91 7999004229</a>
                            <a target='blank' href='https://wa.me/917999004229'>Chat on Whatsapp</a>
                            <Link to="/privacyPolicy">Privacy Policy</Link>
                            <Link to="/termsAndConditions">Terms & Conditions</Link>
                        </div>
                    </div>
                </section>
                <footer >
                    <a className='whatsapp-quick-contact' target='blank' href='https://wa.me/917999004229' title='Contact us on whatsapp.'>
                        <img src='/assets/pngs/whatsapp.png' alt='Whatsapp-button' />
                    </a>
                </footer>
            </main>
        </div>
    )
}

export default Landing;