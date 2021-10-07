import React, { useRef, useEffect} from "react"

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

  const tickerRef = useRef(null)
  useEffect(() => {
    console.log("width", tickerRef.current.offsetWidth);
  }, []);



  return (
    <div ref={tickerRef} className="ticker__container">
      <Ticker>
        {() => (
          //({}) => ... to pass props
          <div>
          <p className="ticker__text">
            Hi! I am Florent, art director, motion designer and visual artist.
            Salut! Je suis Florent, directeur artistique, motion designer et
            artiste visuel.
          </p>
          </div>
        )}
      </Ticker>
    </div>
  )
}

export default TickerText
