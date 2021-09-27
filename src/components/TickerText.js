import React from "react"

import Ticker from "react-ticker"

import "./TickerText.css"

function TickerText() {
  return (
    <div className="ticker__container">
      <Ticker>
        {({ index }) => (
          <p className="ticker__text">
            Hi! I am Florent, art director, motion designer and visual artist.
            Salut! Je suis Florent, directeur artistique, motion designer et
            artiste visuel.
          </p>
        )}
      </Ticker>
    </div>
  )
}

export default TickerText
