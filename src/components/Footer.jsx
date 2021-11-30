import React from 'react'
import logo from '../assets/images/img_logo02.svg'

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer__logo">
                <img src={logo} alt=""/>
            </div>
            <div className="footer__link">
                <a href="#">About</a>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Refund Policy</a>
                <a href="#">Templates</a>
                <a href="#">Prices</a>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom__left">
                ©  {new Date().getFullYear()} LanderLab. All Rights Reserved
                </div>
                <div className="footer__bottom__right">
                    <span>Follow us on:</span>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </section>
    )
}

export default Footer
