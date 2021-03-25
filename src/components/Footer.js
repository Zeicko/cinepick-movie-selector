import React from "react";
import "./Footer.css";
import logoW from "../pages/img/logo-white.png";
import logoF from "../pages/img/logoFacebook.png";
import logoI from "../pages/img/logoInstagram.png";
import logoL from "../pages/img/logoLinkedin.png";
import line from "../pages/img/line.png";

function Footer() {
return (
    <div className="container3">
        <svg className ="redWave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#BF223B" fill-opacity="1" d="M0,224L80,208C160,192,320,160,480,154.7C640,149,800,171,960,181.3C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <div className="footerLinks">
            <img src={logoW} className="logoW" alt="logo cinepick white"/>
            <ul>
                <li><p className="contact">Contact</p></li>
                <li><p className="number">01 02 03 04 05</p></li>
                <li><p className="number">Cinepick@gmail.com</p></li>
            </ul>
            <div className="footerLogo">
                <p className="social">Nos réseaux</p>
                <div className="logoSocial">
                    <a href="https://www.facebook.com/">
                        <img src={logoF} className="logoF" alt="logo Facebook"/>
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src={logoI} className="logoI" alt="logo Instagram"/>
                    </a>
                    <a href="https://www.linkedin.com/">
                        <img src={logoL} className="logoL" alt="logo linkedin"/>
                    </a>
                </div>
            </div>
        </div>
        <img src={line} className="footerLine" alt="white line copyright"/>
        <p className="footerText"> 
            Cinepick © 2021 - Tous droits réservés®
        </p>
    </div>
  );
}

export default Footer;