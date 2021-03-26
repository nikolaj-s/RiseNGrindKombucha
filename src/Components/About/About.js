import React from 'react'

import "./About.css"
import { Contact } from './Contact/Contact'
import { FadeInWrapper } from './FadeInWrapper/FadeInWrapper'
import { Focus } from './Focus/Focus'
import { OnlineShop } from './OnlineShop/OnlineShop'

import { OnTap } from './OnTap/OnTap'
import { WhatIsBuch } from './WhatIsBuch/WhatIsBuch'

export const About = () => {



    return (
        <div className="about-container">
            <div style={{width: "100%", flexShrink: 0, height: "10px"}} id="about-us" />
            <FadeInWrapper>
                <WhatIsBuch fadeIn="fade-in-section" />
            </FadeInWrapper>
            <FadeInWrapper>
                <Focus fadeIn="fade-in-section" />
            </FadeInWrapper>
            <div style={{width: "100%", flexShrink: 0, height: "10px"}} id="on-tap" />
            <FadeInWrapper>
                <OnTap fadeIn="fade-in-section" />
            </FadeInWrapper>
            <FadeInWrapper>
                <OnlineShop fadeIn="fade-in-section" />
            </FadeInWrapper>
            <div style={{width: "100%", flexShrink: 0, height: "10px"}} id="get-in-touch" />
            <FadeInWrapper>
                <Contact fadeIn="fade-in-section" />
            </FadeInWrapper>
        </div>
    )
}
