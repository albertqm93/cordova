import React from 'react';

import { useSelector } from 'react-redux';


import {
    Link
  } from "react-router-dom";

import './footer.scss';
import Facebook from '../images/facebook.png';
import Whatsapp from '../images/whatsapp.png';
import Instagram from '../images/instagram.jpeg';
import Twitter from '../images/twitter.jpg';

const Footer = () => {

    const isLogged = useSelector(state => state.user ? state.user.logged : false);

    return(
        <div>
            <div className="footer">
                <div className="socialMedia">
                    <ul className="disp">
                        <li className="list">
                            <a className="facebook" href="https://www.facebook.com/albert.quesada.7">
                                <button className="facebookIcon">
                                    <div className="facebookDiv">
                                        <span className="facebookSpan">
                                            <img className="iconsFace" src={Facebook} alt="facebook icon" />
                                        </span>
                                    </div>
                                </button>
                            </a>
                        </li>
                        <li className="list">
                            <a className="twitter" href="https://twitter.com/@AlbertQuesadaMe">
                                <button className="twitterIcon">
                                    <div className="twitterDiv" >
                                        <span className="twitterSpan">
                                            <img className="icons" src={Twitter} alt="twitter icon" />
                                        </span>
                                    </div>
                                </button>
                            </a>
                        </li>
                        <li className="list">
                            <a className="instagram" href="https://www.instagram.com/albertsler93/">
                                <button className="instagramIcon">
                                    <div className="instagramDiv">
                                        <span className="instagramSpan">
                                            <img className="icons" src={Instagram} alt="instagram icon" />
                                        </span>
                                    </div>
                                </button>
                            </a>
                        </li>
                        <li className="list">
                            <a className="whatsapp" href="https://wa.me/686218944">
                                <button className="whatsappIcon">
                                    <div className="whatsappDiv">
                                        <span className="whatsappSpan">
                                            <img className="icons" src={Whatsapp} alt="whatsapp icon" />
                                        </span>
                                    </div>
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footerPages">
                    <ul className="footerUl">
                        {isLogged && (<li className="footerLi">
                            <Link to="/" className="title">Home</Link>
                        </li>)}
                        {isLogged && (<li className="footerLi">
                            <Link to="/profile" className="title">Profile</Link>
                        </li>)}
                        {isLogged && (<li className="footerLi">
                            <Link to="/contact" className="title">Contact</Link>
                        </li>)}
                        {isLogged && (<li className="footerLi">
                            <Link to="/about" className="title">About</Link>
                        </li>)}
                        <li className="headerLi">
                        <Link to="/cheesecake" className="title">Tarta de Queso</Link>
                        </li>
                        {isLogged && (<li className="footerLi">
                            <Link to="/cocktail" className="title">Cocktail</Link>
                        </li>)}
                    </ul>
                </div>
                <div className="footerCopyright">
                    <span>© Copyright Albert</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;