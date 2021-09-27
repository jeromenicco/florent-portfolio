import React from "react"

import { useSpring, animated } from "react-spring"

import TickerText from "./TickerText"

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
      delay: 10000,
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
    },
  })

  const emojiSpring3 = useSpring({
    loop: true,
    from: {
      transform: `translate(-${screenWidth * 1.8}px)`,
    },
    to: {
      transform: `translate(${screenWidth}px)`,
    },
    config: {
      duration: screenWidth * 5.3,
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
        <span className="emoji__rotate">🦄</span>
      </animated.div>

      <animated.div
        style={{
          ...emojiSpring2,
        }}
        className="emoji__rail"
      >
        <span className="emoji__rotate">🖤</span>
      </animated.div>

      <animated.div
        style={{
          ...emojiSpring3,
        }}
        className="emoji__rail"
      >
        <span className="emoji__rotate">🥴</span>
      </animated.div>

      <animated.div
        style={{
          ...emojiSpring4,
        }}
        className="emoji__rail"
      >
        <span className="emoji__rotate">🧸</span>
      </animated.div>
      <TickerText />
    </div>
  )
}

export default TopBar
