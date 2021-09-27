import React from "react"

import "./BottomBar.css"

function BottomBar({ history }) {
  return (
    <div className="bottom__bar__container">
      <p onClick={() => history.push("/")}>Florent Texier</p>
      <p onClick={() => history.push("/contact")}>Infos / Contact</p>
    </div>
  )
}

export default BottomBar
