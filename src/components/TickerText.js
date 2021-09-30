import React from "react"

import Ticker from "react-ticker"

import "./TickerText.css"

function TickerText() {
  // const [viewWidth, setViewWidth] = useState(Number)
  // console.log("outside useEffect", viewWidth)

  // useEffect(() => {
  //   const handleResize = () => {
  //     setViewWidth(window.innerWidth)
  //   }
  //   window.addEventListener("resize", handleResize)
  //   return () => {
  //     setViewWidth(window.innerWidth)
  //   }
  // }, [viewWidth])

  return (
    <div className="ticker__container">
      <Ticker>
        {() => (
          //({}) => ... to pass props
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
