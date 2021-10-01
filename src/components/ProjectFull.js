import React, { useState } from "react"

import FadeIn from "react-fade-in"

import ProjectSwiper from "./ProjectSwiper"

import "./ProjectFull.css"

function ProjectFull({ item, fullDisplay, setFullDisplay }) {
  return (
    <FadeIn className="full__container">
      <ProjectSwiper item={item} />
      <div className="full__text__container">
        <p className="full__title" onClick={() => setFullDisplay(!fullDisplay)}>
          {item.title}
        </p>
        <p>{item.resume}</p>
      </div>
    </FadeIn>
  )
}

export default ProjectFull
