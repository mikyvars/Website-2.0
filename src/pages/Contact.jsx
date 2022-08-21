import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Navigation from '../components/Navigation'

function Contact() {
    const form = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()

        const formMessage = document.querySelector('.form-message')
        console.log(formMessage)

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY).then(
            (result) => {
                form.current.reset()
                formMessage.innerHTML = '<p class="success">E-Mail envoyé avec succès.</p>'

                setTimeout(() => {
                    formMessage.innerHTML = ''
                }, 5000)
            },
            (error) => {
                console.log(error)
                formMessage.innerHTML = '<p class="error">Une erreur est survenue.</p>'
            }
        )
    }

    return (
        <main className="main-content">
            <Navigation />
            <div className="contact-container">
                <h1>me contacter</h1>
                <form ref={form} onSubmit={handleSubmit} className="form">
                    <label htmlFor="from_name">Nom</label>
                    <input type="text" name="from_name" id="from_name" required />
                    <br />

                    <label htmlFor="from_email">Adresse e-mail</label>
                    <input type="email" name="from_email" id="from_email" required />
                    <br />

                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" required></textarea>
                    <br />

                    <input type="submit" value="Envoyer" />
                </form>
                <div className="form-message"></div>
            </div>
        </main>
    )
}

export default Contact
