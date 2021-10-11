
import React from "react"

import { useSelector } from "react-redux";

import ProjectCard from "../components/ProjectCard"
import ProjectFull from '../components/ProjectFull'

import { projectList } from "../data"

import "./Home.css"

function Home() {
  const isVisible = useSelector(state => state.fullScreen.visible)
  const fullProject = useSelector(state => state.fullScreen.project)

  return (
    <div className={!isVisible ? "home__container" : "home__container__full"}>
      <div className="dum__space__home" />
      {
        !isVisible ?
        projectList.map((item, index) => (
          <ProjectCard
            key={index}
            item={item}
          />
        ))
        :
        <ProjectFull fullProject={fullProject} />
      }


      {
        !isVisible &&
        projectList.length %2 !== 0 && !isVisible && <div style={{ width: '48%' }} />
      }


      <div className="dum__space__home" />
    </div>
  )
}

export default Home
