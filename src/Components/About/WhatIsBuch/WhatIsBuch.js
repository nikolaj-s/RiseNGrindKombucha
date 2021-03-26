import React from 'react'

import "./WhatIsBuch.css"

export const WhatIsBuch = () => {



    return (
        <div className="what-is-container">
                <div className="buch-image-container">
                    <img src="https://res.cloudinary.com/drlkgoter/image/upload/v1616084587/Nor.%20X%20west/CHAI-SPICE-kombucha-5-735x1121_ts5eep.webp" alt="buch-jar" />
                </div>
                <div className="buch-info-container">
                    <h2>What Is Kombucha?</h2>
                    <p>
                    Kombucha is a sparkling beverage made by fermenting tea and sugar with a symbiotic culture of bacteria and yeast (SCOBY). 
                    <br />
                    <br />
                    Kombucha contains living cultures, organic acids and antioxidants that help with digestion and support the immune system.
                    <br />
                    <br />
                    Real kombucha is raw, unpasteurized and filled with good bacteria and yeast that have many health benefits.
                    </p>
                </div>
            </div>        
    )
}
