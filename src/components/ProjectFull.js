import React, {useState, useEffect} from "react"
import { useDispatch } from "react-redux"
import SwiperCore, { Pagination, Navigation} from "swiper"
import FadeIn from "react-fade-in"
import { setVisible } from "../redux/slices/fullScreenSlice"
// import HorizontalScroll from "react-scroll-horizontal";
import EMOJI_FLECHE from '../assets/gifs/EMOJI_FLECHE.gif'

function ProjectFull({ fullProject }) {
  SwiperCore.use([Pagination, Navigation])
  const dispatch = useDispatch()

  const [media, setMedia] = useState([])

  const pushMedia = () => {
    setMedia(fullProject.img)
  }

  useEffect(() => {
    pushMedia()
  },)

  return (
    <>
      <FadeIn className='full__container'>
        {/* <HorizontalScroll> */}
          {
            media.map((item, index) => (
              <div className='horizontal__container' key={index}>
                {
                  item.includes('.mp4')
                  ?
                  <video
                    className="full__project__img"
                    autoPlay
                    loop
                    preload="auto"
                    playsInline
                    src={item}
                    alt={item.title}
                  />
                  :
                  <img className="full__project__img" src={item} alt={item.title} />
                }
              </div>
            ))
          }
        {/* </HorizontalScroll> */}
      </FadeIn>
      <FadeIn delay={500}>
        <div className='back__arrow__container' onClick={() => dispatch(setVisible(false))}>
          <img src={EMOJI_FLECHE} alt='back' className='arrow' />
        </div>
      </FadeIn>
    </>
  )
}

export default ProjectFull
