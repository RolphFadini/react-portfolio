import { useState, useEffect } from 'react'
import AnimatedLetters from '../animated-letters/animated-letters'
import Loader from 'react-loaders'
import './about.scss'
import cssLogo from '../../assets/images/css.svg'
import htmlLogo from '../../assets/images/html.svg'
import jsLogo from '../../assets/images/javascript.svg'
import pythonLogo from '../../assets/images/python.svg'
import reactLogo from '../../assets/images/react.svg'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const bounceAnimation = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(bounceAnimation)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            I am a passionate software developer currently in my final semester
            of an Associate's Degree in Systems Development. Over the past few
            years, I have gained valuable experience working as a freelance
            developer, focusing on delivering high-quality web applications. My
            expertise spans across several technologies, including{' '}
            <span className="technologies">
              HTML, CSS, SQL, JavaScript, React, and Python.
            </span>{' '}
            I enjoy building responsive, user-centric applications and
            continuously strive to improve my coding skills through hands-on
            projects and learning the latest trends in web development.
          </p>
          <p>
            Through my studies and freelance work, I have developed a strong
            foundation in both front-end and back-end technologies. My current
            projects emphasize working with modern JavaScript frameworks like{' '}
            <span className="technologies">React.</span> I thrive in
            environments where I can collaborate with others, solve complex
            problems, and bring ideas to life through innovative solutions.
          </p>
          <p>
            As someone who is always eager to learn, I am excited to explore new
            technologies and frameworks. I believe that staying curious and
            adaptable is key in the tech industry, and I am looking forward to
            using my skills to contribute to exciting projects that make a real
            impact.
          </p>
        </div>
        {/* <div className="skills-container">
          <img src={cssLogo} alt="css logo" className="skills-logo" />
          <img src={htmlLogo} alt="html logo" className="skills-logo" />
          <img src={jsLogo} alt="javascript logo" className="skills-logo" />
          <img src={pythonLogo} alt="python logo" className="skills-logo" />
          <img src={reactLogo} alt="react logo" className="skills-logo" />
        </div> */}
      </div>

      <Loader type="ball-pulse" />
    </>
  )
}

export default About
