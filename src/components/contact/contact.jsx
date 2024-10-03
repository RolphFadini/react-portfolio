import React, { useState, useEffect, useRef } from 'react'
import AnimatedLetters from '../animated-letters/animated-letters'
import './contact.scss'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import config from '../../config/config.ts'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')

  useEffect(() => {
    const bounceAnimation = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(bounceAnimation)
  }, [])

  const sendEmail = async (e) => {
    e.preventDefault()

    const serviceId = config.emailJsServiceKey
    const templateId = config.emailJsTemplateKey
    const publicKey = config.emailJsPublicKey

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Rolph Fadini',
      from_message: message,
      from_subject: subject,
    }

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setName('')
        setEmail('')
        setMessage('')
        setSubject('')
        toast.success('Email sent successfully!', {
          position: 'top-center',
          autoClose: 2500,
        })
      })
      .catch(() => {
        toast.error('Error sending email', {
          position: 'top-center',
          autoClose: 2500,
        })
      })
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
            Looking to collaborate or just curious about my work? Send me a
            message!
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    value={name}
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </li>
                <li className="half">
                  <input
                    value={email}
                    type="text"
                    name="from_email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </li>
                <li>
                  <input
                    value={subject}
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </li>
                <li>
                  <textarea
                    value={message}
                    name="message"
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </li>
                <li>
                  <input className="flat-button" type="submit" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Loader type="ball-pulse" />
    </>
  )
}

export default Contact
