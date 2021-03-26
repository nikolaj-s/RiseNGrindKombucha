import React from 'react'

import "./Contact.css"

export const Contact = () => {

    const [email, setEmail] = React.useState("")
    const [name, setName] = React.useState("")
    const [message, setMessage] = React.useState("")
    const [sent, toggleSent] = React.useState(false)

    const send = (e) => {
        e.preventDefault()
        setEmail("")
        setName("")
        setMessage("")
        toggleSent(true)
        setTimeout(() => {
            document.getElementsByClassName('sent-container')[0].style.opacity = '1'
            setTimeout(() => {
                document.getElementsByClassName('sent-container')[0].style.opacity = '0'
                setTimeout(() => {
                    toggleSent(false)
                }, 400)
            }, 400)
        }, 50)
    }

    return (
        <>
        
        <div className="what-is-container tap-banner">
            <div className="inner-tap-banner">
                <h2>Get In Touch</h2>
            </div>
        </div>
        <div className="what-is-container contact-container">
            <div className="contact-wrapper">
                <div className="contact-info-container">
                    <div className="contact-info-image-container" >
                        <img src="https://res.cloudinary.com/drlkgoter/image/upload/v1616084560/Nor.%20X%20west/f662e327d39755a254a98114136fc99b_txlevr.jpg" alt="back-splash" />
                    </div>
                    <div className="contact-info-inner-container" >
                        <p>
                            Thank you, for your interest!
                            <br /><br />
                            We will try to reply to your inquiry 
                            within 3 business days, Thank You!
                            <br /><br />
                            phone #: 1 604 325 3464
                            <br /><br />
                            Location: Salt Spring Island Bc 
                            Canada
                            <br /><br />
                            Bringing you local buch, in a 
                            green way.
                        </p>
                    </div>
                </div>
                <form>
                    <input value={email} onChange={e => setEmail(e.value)} type="text" placeholder="E Mail" />
                    <input value={name} onChange={e => setName(e.value)} type="text" placeholder="Name" />
                    <textarea value={message} onChange={e => setMessage(e.value)} id="message" placeholder="Message"></textarea>
                    <button onClick={send} >Send</button>
                    {sent ? 
                    <div className="sent-container">
                        <h3>Sent</h3>
                    </div> : null}
                </form>
            </div>
        </div>
        </>
    )
}
