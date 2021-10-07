import React from "react"

import FadeIn from "react-fade-in"

import { Swiper, SwiperSlide } from "swiper/react"

import SwiperCore, { Pagination, Navigation} from "swiper"

import { projectList } from "../data"

import "swiper/swiper-bundle.css"

import "./ProjectCard.css"

function ProjectCard({ item }) {
  SwiperCore.use([Pagination, Navigation])

  console.log(projectList)

  const data = projectList.filter(item => item.video)

  console.log(data === true)


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
          item.video ?
          item.video.map((item, index) => (
            <SwiperSlide key={index}>
              <video className="project__img" autoPlay loop muted defaultMuted playsinline src={item} alt={item.title} />
            </SwiperSlide>
          ))
          :
          item.img.map((item, index) => (
            <SwiperSlide key={index}>
              <img className="project__img" src={item} alt={item.title} />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="card__text__container">
        <p className="card__title">{item.title}</p>
        <p>{item.resume}</p>
        {
          item.link && <a href={item.url}>{item.link}</a>
        }
      </div>
    </FadeIn>
  )
}

export default ProjectCard
