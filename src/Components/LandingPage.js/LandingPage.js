import React from 'react'

import "./LandingPage.css"

export const LandingPage = (props) => {

    return (
        <div className="landing-page-outer-container">
            <div className="landing-page-image-container">
                <img alt="landing-page-splash-screen" src="https://res.cloudinary.com/drlkgoter/image/upload/v1616084565/Nor.%20X%20west/intro-1579122865_dldoqa.jpg" />
            </div>
            <div className="center-splash-container">
                <div className="jar-image-container">
                    <img src="https://res.cloudinary.com/drlkgoter/image/upload/v1616085260/Nor.%20X%20west/masonjar_lmwwkc.jpg" alt="jar-icon" />
                </div>
                <div className="text-splash-container">
                    <h1>Rise N' Grind</h1>
                    <h2>Kombucha</h2>
                    <h4>Organic Brews To Feed The Soul</h4>
                </div>
            </div>
        </div>
    )
}
