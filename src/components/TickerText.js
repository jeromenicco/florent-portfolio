import React, { useState } from "react"

import PageVisibility from 'react-page-visibility'

import Ticker from "react-ticker"

import "./TickerText.css"


function TickerText() {
  const WebFont = require('webfontloader')
  const [pageIsVisible, setPageIsVisible] = useState(true)
 
  WebFont.load({
    google: {
      families: ["Righteous"]
    }
  })

  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible)
  }

  console.log('WEB FONT', WebFont)

  return (
    <PageVisibility onChange={handleVisibilityChange}>
      <div className="ticker__container">
      {pageIsVisible && (
        <Ticker>
          {({index}) => (
            //({}) => ... to pass props
              <>
              <p className='ticker__text'>
              Hi! I am Florent, art director, motion designer and visual artist. Salut! Je suis Florent, directeur artistique, motion designer et artiste visuel.
            </p>
            </>
          )}
        </Ticker>
        )}
      </div>
    </PageVisibility>
  )
}

export default TickerText
