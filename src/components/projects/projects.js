import React, { useState, useEffect } from 'react'
import './projects.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../animated-letters/animated-letters'
import projectsData from '../../data/projects.json'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const bounceAnimation = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(bounceAnimation)
  }, [])

  const renderProjects = (projects) => {
    return (
      <div className="images-container">
        {projects.map((project, i) => {
          return (
            <div className="image-box" key={i}>
              <img
                className="project-image"
                src={project.cover}
                alt="project"
              />
              <div className="content">
                <h2 className="title">{project.title}</h2>
                <h4 className="description">{project.description}</h4>
                <button
                  className="btn"
                  onClick={() => window.open(project.url)}
                >
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

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
        <div>{renderProjects(projectsData.projects)}</div>
      </div>
      <Loader type="ball-pulse" />
    </>
  )
}

export default Projects
