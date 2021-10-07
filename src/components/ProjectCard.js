import React from "react"

import FadeIn from "react-fade-in"

import { Swiper, SwiperSlide } from "swiper/react"

import SwiperCore, { Pagination, Navigation} from "swiper"

import "swiper/swiper-bundle.css"

import "./ProjectCard.css"

function ProjectCard({ item }) {
  SwiperCore.use([Pagination, Navigation])

  // const videos = item.img.filter(item => item.includes(".mp4"))

  // console.log(videos.length)

  // videos.map(item => console.log(item))


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
          
          item.img.map((item, index) => (
            <SwiperSlide key={index}>
              {
                item.includes('.mp4')
                ?
                <video className="project__img" autoPlay muted loop preload="auto" playsInline src={item} alt={item.title} />
                :
                <img className="project__img" src={item} alt={item.title} />
              }
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="card__text__container">
        <p className="card__title">{item.title}</p>
        <p>{item.resume}{item.link && <a href={item.url}>{item.link}</a>}</p>
        {/* {item.link && <a href={item.url}>{item.link}</a>} */}
      </div>
    </FadeIn>
  )
}

export default ProjectCard
