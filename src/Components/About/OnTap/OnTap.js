import React from 'react'
import { FadeInWrapper } from '../FadeInWrapper/FadeInWrapper'

import "./OnTap.css"

export const OnTap = () => {

    const onTap = [{
        image: "https://res.cloudinary.com/drlkgoter/image/upload/v1616084549/Nor.%20X%20west/KombuchaJar1Gal_large_lmehfw.webp",
        name: "Maple Brew",
        info: "Our maple syrup buch brew is something entirely different, and is a must try.  Brewed from true canadian organic maple syrup."
    },
    {
        image: "https://res.cloudinary.com/drlkgoter/image/upload/v1616084522/Nor.%20X%20west/Blackberry-Kombucha-1_jr3vju.jpg",
        name: "Blackberry Kick",
        info: "Now this is our energy brew, we can only estimate this drink containing about as much kick as a triple shot expresso! \n Brewed from locally grown blackberries during the summer season."
    },
    {
        image: "https://res.cloudinary.com/drlkgoter/image/upload/v1616084553/Nor.%20X%20west/mocktail-recipes-kiwi-1024x683_qkrtrg.jpg",
        name: "The Kiwi",
        info: "The Kiwi is our most recent creation, try it at your own discretion you may become addicted. \n Brewed from organic kiwi’s with a hint of lemon."
    }
    
]

    return (
        <>
            <div className="what-is-container tap-banner">
                <div className="inner-tap-banner">
                    <h2>On Tap</h2>
                </div>
            </div>
            <div className="what-is-container on-tap-menu">
                {onTap.map(menuItem => {
                    return (
                    <FadeInWrapper>
                        <div className="menu-item-container">
                            <div className="menu-image-container">
                                <img src={menuItem.image} alt="menu-item" />
                            </div>
                            <div className="menu-info-container">
                                <h2>{menuItem.name}</h2>
                                <p>{menuItem.info}</p>
                            </div>
                        </div>
                    </FadeInWrapper>
                    )
                })}
            </div>
        </>
    )
}
