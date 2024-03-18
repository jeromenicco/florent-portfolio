import React, { useEffect, useState } from "react"
import PageVisibility from "react-page-visibility"
import Ticker from "react-ticker"
import { Spring, animated } from "react-spring"

import "./TickerText.css"

function TickerText() {
  const [pageIsVisible, setPageIsVisible] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 1000)
  },)

  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible)
  }

  return (
    <PageVisibility onChange={handleVisibilityChange}>
      {
        isVisible &&
        <div className="ticker__container">
          {pageIsVisible && (
            <Ticker>
              {({ index }) => (
                <>
                  <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    config={{ duration: 500 }}
                  >
                    {styles => (
                      <animated.div style={styles}>
                        <h4 className="ticker__text">
                          &nbsp;Hi! I am Florent, art director, motion designer and visual artist. Salut ! Je suis Florent, directeur artistique, motion designer et artiste visuel.
                        </h4>
                      </animated.div>
                    )}
                  </Spring>
                </>
              )}
            </Ticker>
          )}
        </div>
      }
    </PageVisibility>
  )
}

export default TickerText
