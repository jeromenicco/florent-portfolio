import React from "react"

import { useSpring, animated } from "react-spring"

import TickerText from "./TickerText"

import heartEMOJI from "../assets/gifs/EMOJI_COEUR.gif"
import faceEMOJI from "../assets/gifs/EMOJI_FACE.gif"
import unicornEMOJI from "../assets/gifs/EMOJI_LICORNE.gif"
import bearEMOJI from "../assets/gifs/EMOJI_OURS.gif"

import "./TopBar.css"

function TopBar() {
  const screenWidth = window.innerWidth

  const emojiSpring = useSpring({
    loop: true,
    from: {
      transform: `translate(-${screenWidth * 2}px)`,
    },
    to: {
      transform: `translate(${screenWidth}px)`,
    },
    config: {
      duration: screenWidth * 5.5,

      delay: 500,
    },
  })

  const emojiSpring2 = useSpring({
    loop: true,
    from: {
      transform: `translate(-${screenWidth}px)`,
    },
    to: {
      transform: `translate(${screenWidth}px)`,
    },
    config: {
      duration: screenWidth * 6,
      // duration: 8000,
      delay: 5000,
    },
  })

  const emojiSpring3 = useSpring({
    loop: true,
    from: {
      transform: `translate(-${screenWidth + screenWidth}px)`,
    },
    to: {
      transform: `translate(${screenWidth}px)`,
    },
    config: {
      duration: screenWidth * 9.3,
      delay: 2000,
    },
  })

  const emojiSpring4 = useSpring({
    loop: true,
    from: {
      transform: `translate(-${screenWidth * 1.5}px)`,
    },
    to: {
      transform: `translate(${screenWidth}px)`,
    },
    config: {
      duration: screenWidth * 5.2,
    },
  })

  return (
    <div className="top__bar__container">
      <animated.div
        style={{
          ...emojiSpring,
        }}
        className="emoji__rail"
      >
        <img src={unicornEMOJI} alt="unicorn-emoji" />
      </animated.div>

      <animated.div
        style={{
          ...emojiSpring2,
        }}
        className="emoji__rail"
      >
        <img src={heartEMOJI} alt="heart-emoji" />
      </animated.div>

      <animated.div
        style={{
          ...emojiSpring3,
        }}
        className="emoji__rail"
      >
        <img src={faceEMOJI} alt="face-emoji" />
      </animated.div>

      <animated.div
        style={{
          ...emojiSpring4,
        }}
        className="emoji__rail"
      >
        <img src={bearEMOJI} alt="bear-emoji" />
      </animated.div>

      <TickerText screenWidth={screenWidth} />
    </div>
  )
}

export default TopBar
