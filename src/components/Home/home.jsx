import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './home.scss'
import AnimatedLetters from '../animated-letters/animated-letters'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const bounceAnimation = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(bounceAnimation)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Hi,'.split('')}
              idx={1}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"I'm Rolph".split('')}
              idx={4}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Web Developer'.split('')}
              idx={13}
            />
          </h1>
          <h2>Frontend Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/rolph-fadini/"
              >
                <FontAwesomeIcon icon={faLinkedin} color="#e5bccc" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/RolphFadini"
              >
                <FontAwesomeIcon icon={faGithub} color="#e5bccc" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Loader className="loader" type="ball-pulse" />
    </>
  )
}

export default Home
