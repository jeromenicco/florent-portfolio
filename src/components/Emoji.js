import React, { useState } from "react"
import { useSpring, animated } from "react-spring"

const Emoji = ({src}) => {
    const [random, setRandom] = useState(Number)
    const screenWidth = window.innerWidth

    const shuffle = () => {
        const number = Math.random() * (3000 - 10000) + 10000
        setRandom(number)
    } 

    const emojiSpring = useSpring({
        loop: () => {
            shuffle()
            return true
        },
        from: {
            transform: `translate(-100%)`,
        },
        to: {
            transform: `translate(${screenWidth}px)`,
        },
        config: {
            duration: random,
        },
    })

    return (
        <animated.div
            style={{
              ...emojiSpring,
            }}
            className="emoji__rail"
        >
            <img src={src} alt="emoji-animation" />
      </animated.div>
    )
}

export default Emoji