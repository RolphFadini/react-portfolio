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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            facilisis facilisis libero et tristique. Phasellus maximus ultrices
            est, quis rutrum nisi rutrum consectetur. Proin bibendum rhoncus
            neque, eget dictum purus fermentum et.
          </p>
          <p>
            Suspendisse potenti. Nam vitae odio eget nibh imperdiet ultrices.
            Praesent mattis lacinia pulvinar. Duis iaculis ipsum diam, ut auctor
            turpis aliquet sit amet.
          </p>
          <p>
            Proin hendrerit elit mauris, id semper urna ullamcorper in. Mauris
            faucibus molestie erat eu pulvinar. Ut ac orci accumsan, dignissim
            velit malesuada, rhoncus nisi. Cras in nibh varius, rhoncus lectus
            ac, placerat neque.
          </p>
        </div>
        <div className="skills-container">
          <img src={cssLogo} alt="css logo" className="skills-logo" />
          <img src={htmlLogo} alt="html logo" className="skills-logo" />
          <img src={jsLogo} alt="javascript logo" className="skills-logo" />
          <img src={pythonLogo} alt="python logo" className="skills-logo" />
          <img src={reactLogo} alt="react logo" className="skills-logo" />
        </div>
      </div>

      <Loader type="ball-pulse" />
    </>
  )
}

export default About
