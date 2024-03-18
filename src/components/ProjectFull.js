import React, { useCallback, useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import SwiperCore, { Pagination, Navigation } from "swiper"
import FadeIn from "react-fade-in"
import { setVisible } from "../redux/slices/fullScreenSlice"
import HorizontalScroll from "react-scroll-horizontal"
import EMOJI_FLECHE from "../assets/gifs/EMOJI_FLECHE.gif"
import MediaRender from "./MediaRender"


function ProjectFull({ fullProject }) {
  SwiperCore.use([Pagination, Navigation])
  const dispatch = useDispatch()

  const [media, setMedia] = useState([])

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      dispatch(setVisible(false))
    }
  }, [dispatch])

  useEffect(() => {
    document.addEventListener("keydown", escFunction)

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction])


  useEffect(() => {
    const pushMedia = () => {
      setMedia(fullProject.img)
    }
    pushMedia()
  },)

  return (
    <div className="full__wrapper">
      <HorizontalScroll reverseScroll={true} className="full__container">
        <MediaRender media={media} />
      </HorizontalScroll>
      <FadeIn delay={500}>
        <div className="back__arrow__container" onClick={() => dispatch(setVisible(false))}>
          <img src={EMOJI_FLECHE} alt="back" className="arrow" />
        </div>
      </FadeIn>
    </div>
  )
}

export default ProjectFull
