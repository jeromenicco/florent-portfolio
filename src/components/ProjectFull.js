import React from "react"

import FadeIn from "react-fade-in"

import "./ProjectFull.css"

function ProjectFull({ item, full, setFull }) {
  return (
    <FadeIn className="full__container">
      <h1 onClick={() => setFull(false)}>EXIT</h1>
    </FadeIn>
  )
}

export default ProjectFull
