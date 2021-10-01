import React from "react"

import FadeIn from "react-fade-in"

import ProjectSwiper from "./ProjectSwiper"

import "./ProjectCard.css"

function ProjectCard({ item, fullDisplay, setFullDisplay }) {
  return (
    <FadeIn className="card__container">
      <ProjectSwiper item={item} />
      <div className="card__text__container">
        <p className="card__title" onClick={() => setFullDisplay(!fullDisplay)}>
          {item.title}
        </p>
        <p>{item.resume}</p>
      </div>
    </FadeIn>
  )
}

export default ProjectCard
