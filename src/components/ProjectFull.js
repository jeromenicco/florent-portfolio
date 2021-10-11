import React from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation} from "swiper"

import FadeIn from "react-fade-in"

import "./ProjectFull.css"

function ProjectFull({ fullProject }) {
  SwiperCore.use([Pagination, Navigation])
  return (
    <FadeIn className="card__container">
      <Swiper
        className="swiper__container"
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination
        navigation={true}
      >
        {
          fullProject.img.map((item, index) => (
            <SwiperSlide key={index}>
              {
                item.includes('.mp4')
                ?
                <video
                  className="project__img"
                  autoPlay
                  muted
                  loop
                  preload="auto"
                  playsInline
                  src={item}
                  alt={item.title}
                />
                :
                <img className="project__img" src={item} alt={item.title} />
              }
            </SwiperSlide>
          ))
        }
      </Swiper>

      <div className="card__text__container">
        {/* <p className="card__title" onClick={() => console.log(item)}>{item.title}</p> */}
        <p className="card__title">{fullProject.title}</p>
        <p>{fullProject.resume}{fullProject.link && <a target="_blank" rel="noreferrer" href={fullProject.url}>{fullProject.link}</a>}</p>
        {/* {item.link && <a href={item.url}>{item.link}</a>} */}
      </div>
    </FadeIn>
  )
}

export default ProjectFull
