import React, { useState, useEffect } from 'react'
import './projects.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../animated-letters/animated-letters'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const bounceAnimation = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(bounceAnimation)
  }, [])

  return (
    <>
      <div className="container projects-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Projects'.split('')}
            idx={15}
          />
        </h1>
      </div>
      <Loader type="ball-pulse" />
    </>
  )
}

export default Projects
