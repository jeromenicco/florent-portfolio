import React from "react"

import ProjectCard from "../components/ProjectCard"

import { projectList } from "../data"

// import ProjectSwiper from "../components/ProjectSwiper"

import "./Home.css"

function Home() {
  return (
    <div className="home__container">
      <div className="dum__space__home" />
      {projectList &&
        projectList.map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))}
      {/* <ProjectSwiper /> */}
      <div className="dum__space__home" />
    </div>
  )
}

export default Home
