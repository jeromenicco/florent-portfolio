import React from "react"
import TickerText from "./TickerText"
import Emoji from "./Emoji"
import heartEMOJI from "../assets/gifs/EMOJI_COEUR.gif"
import faceEMOJI from "../assets/gifs/EMOJI_FACE.gif"
import unicornEMOJI from "../assets/gifs/EMOJI_LICORNE.gif"
import bearEMOJI from "../assets/gifs/EMOJI_OURS.gif"

import "./TopBar.css"

function TopBar() {

  return (
    <div className="top__bar__container">
      <Emoji src={unicornEMOJI} />
      <Emoji src={faceEMOJI} />
      <Emoji src={heartEMOJI} />
      <Emoji src={bearEMOJI} />
      <TickerText />
    </div>
  )
}

export default TopBar
