import React from "react"
import FadeIn from "react-fade-in"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { EffectFade, Pagination, Navigation} from "swiper"
import { useDispatch } from "react-redux";
import { setVisible, setProject } from "../redux/slices/fullScreenSlice"
import { useMediaQuery } from 'react-responsive'
// import { LazyLoadImage } from 'react-lazy-load-image-component'
// import 'react-lazy-load-image-component/src/effects/blur.css'

import "swiper/swiper-bundle.css"
import "./ProjectCard.css"

function ProjectCard({ item }) {
  SwiperCore.use([EffectFade, Pagination, Navigation])
  const dispatch = useDispatch()

  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })

  const handleFullScreen = () => {
    dispatch(setProject(item))
    dispatch(setVisible(true))
  }

  return (
    <FadeIn className="card__container">
        <Swiper
          className="swiper__container"
          slidesPerView={1}
          effect={'fade'}
          spaceBetween={10}
          loop={true}
          pagination
          navigation={isDesktop ? true : false}
          allowTouchMove={isDesktop ? false : true}
        >
          {
            item.img.map((item, index) => (
              <SwiperSlide key={index} onClick={isDesktop ? handleFullScreen : null}>
                  {
                    item.includes('.mp4')
                    ?
                    <video
                      className="project__img"
                      autoPlay
                      // controls
                      muted
                      loop
                      playsInline
                      src={item}
                      alt={item.title}
                    />
                    :
                    <div>
                      <img className="project__img" src={item} alt={item.title} />
                    </div>
                  }
                </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="card__text__container">
          <div className='title__arrow__container'>
            <p className="card__title" onClick={isDesktop ? handleFullScreen : null}>{item.title}</p>
          </div>
          <div>
            <p>{ item.resume && item.resume} <span style={{ fontStyle: "italic"}}>{item.resumeItalic && item.resumeItalic}</span></p>
            {
              item.link && 
              <a target="_blank" rel="noreferrer" href={item.url}>{item.link}</a>
            }
          </div>
        </div>
      </FadeIn>
  )
}

export default ProjectCard
