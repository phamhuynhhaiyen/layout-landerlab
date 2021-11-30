import React, { useEffect, useRef } from 'react'

import logo from '../assets/images/img_logo.svg'

const Header = () => {
    const headerRef = useRef(null)
    const menuRef = useRef(null)
    const backdropRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('active')
            }
            else {
                headerRef.current.classList?.remove('active')
            }
        })
        // return () => {
        //     window.removeEventListener("scroll")
        // }
    }, [])

    const menuClick = () =>{
        menuRef.current.classList.toggle("active")
        backdropRef.current.classList.toggle("active")
    }

    return (
        <>
        <div className="mobile-backdrop" ref={backdropRef}></div>
        <div className="header" ref={headerRef}>
            <div className="header__bar" onClick={menuClick}>
                <i className="fas fa-bars"></i>
            </div>
            <div className="header__logo">
                <img src={logo} alt="" />
            </div>
            <div className="header__menu" ref={menuRef}>
                <i className="fas fa-times" onClick={menuClick}></i>
                <a className="header__menu__item" href="#">Features</a>
                <a className="header__menu__item" href="#">Templates</a>
                <a className="header__menu__item" href="#">Pricing</a>
                <div className="header__menu__button">
                    <button className="header__menu__button__login">Login</button>
                    <button className="header__menu__button__signup">Sign Up</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header
