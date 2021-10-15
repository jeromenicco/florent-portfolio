import React from "react"
import { useDispatch } from "react-redux"
import SwiperCore, { Pagination, Navigation} from "swiper"
import { ImArrowLeft } from "react-icons/im";
import FadeIn from "react-fade-in"
import { setVisible } from "../redux/slices/fullScreenSlice"

function ProjectFull({ fullProject }) {
  SwiperCore.use([Pagination, Navigation])
  const dispatch = useDispatch()

  return (
    <>
      <FadeIn className='full__container'>
          {
            fullProject.img.map((item, index) => (
              <div className='horizontal__container' id="MAIN" key={index}>
                {
                  item.includes('.mp4')
                  ?
                  <video
                    className="full__project__img"
                    autoPlay
                    muted
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
      </FadeIn>
      <div className='back__arrow__container' onClick={() => dispatch(setVisible(false))}>
        <ImArrowLeft className='arrow'/>
        <p className='back__home'>Back to home</p>
      </div>
    </>
  )
}

export default ProjectFull
