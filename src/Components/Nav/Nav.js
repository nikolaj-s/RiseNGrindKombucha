import React from 'react'

import "./Nav.css"

export const Nav = (props) => {

    const [mobileNav, toggleMobileNav] = React.useState(false)

    const toggleMenu = () => {
        if (mobileNav) {
            toggleMobileNav(false)
        } else {
            toggleMobileNav(true)
        }
    }
    return (
        <>
        <nav className={props.top ? "user-at-top" : null}>
            <div className="nav-title">
                {props.top ? <h1>Rise N' Grind Kombucha</h1> : null}
            </div>
            <div className="button-container">
                <h3><a style={{color: 'white', textDecoration: 'none'}} href="#about-us">About Us</a></h3>
                <h3><a style={{color: 'white', textDecoration: 'none'}} href="#on-tap">On Tap</a></h3>
                <h3><a style={{color: 'white', textDecoration: 'none'}} href="#get-in-touch">Get In Touch</a></h3>
            </div>
            <div onClick={toggleMenu} className="mobile-nav-button">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.375 11.25H50.625V15H9.375V11.25Z" fill="black"/>
                <path d="M9.375 28.125H50.625V31.875H9.375V28.125Z" fill="black"/>
                <path d="M9.375 45H50.625V48.75H9.375V45Z" fill="black"/>
            </svg>
            </div>
            
        </nav>
        {mobileNav ? 
            <div onClick={toggleMenu} className="mobile-nav-container">
                <svg className="close-mobile-menu" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.11598 5.99998L0.557983 10.558L1.44198 11.442L5.99998 6.88398L10.558 11.442L11.442 10.558L6.88398 5.99998L11.442 1.44198L10.558 0.557983L5.99998 5.11598L1.44198 0.557983L0.557983 1.44198L5.11598 5.99998Z" fill="black"/>
                </svg>

                <h3><a style={{color: 'white', textDecoration: 'none'}} href="#about-us">About Us</a></h3>
                <h3><a style={{color: 'white', textDecoration: 'none'}} href="#on-tap">On Tap</a></h3>
                <h3><a style={{color: 'white', textDecoration: 'none'}} href="#get-in-touch">Get In Touch</a></h3>
            </div>
            :
            null}
        </>
    )
}
