import React from "react"

import ProjectCard from "../components/ProjectCard"

import "./Home.css"

function Home() {
  return (
    <div className="home__container">
      <div className="dum__space__home" />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <div className="dum__space__home" />
    </div>
  )
}

export default Home
