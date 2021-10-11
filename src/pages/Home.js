
import React, {useState} from "react"

import ProjectCard from "../components/ProjectCard"

import { projectList } from "../data"

import "./Home.css"

function Home() {
  const [full, setFull] = useState(false)
  return (
    <div className="home__container">
      <div className="dum__space__home" />
      {
        projectList.map((item, index) => (
          <ProjectCard
            key={index}
            item={item}
            full={full}
            setFull={setFull}
          />
        ))
        }
        {
          projectList.length %2 !== 0 && <div style={{ width: '48%' }} />
        }
      <div className="dum__space__home" />
    </div>
  )
}

export default Home
