import React from "react"

import ProjectCard from "../components/ProjectCard"

import { projectList } from "../data"

import "./Home.css"

function Home() {
  return (
    <div className="home__container">
      <div className="dum__space__home" />
      {
        projectList.map((item, index) => (
          <ProjectCard
            key={index}
            item={item}
          />
        ))}
      <div className="dum__space__home" />
    </div>
  )
}

export default Home
