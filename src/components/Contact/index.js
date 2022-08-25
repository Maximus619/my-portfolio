import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef;
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return () => {
            setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 3000);
        }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_3xnpgvj', 'anant', e.target, 'z_iW-fNysS9S9Pz0T')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - espacially ambitious or large projects. However, if you have either request or question, don't hesitate to contact me using below form.
                    </p>
                    <div className="contact-form">
                        <form onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>

                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact