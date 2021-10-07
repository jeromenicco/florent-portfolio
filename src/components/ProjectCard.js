import React from "react"

import FadeIn from "react-fade-in"


import { Swiper, SwiperSlide } from "swiper/react"

import SwiperCore, { Pagination, Navigation} from "swiper"

import "swiper/swiper-bundle.css"

import "./ProjectCard.css"

function ProjectCard({ item }) {
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
        item.img.map((item, index) => (
          <SwiperSlide key={index}>
            <img className="project__img" src={item} alt={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="card__text__container">
        <p className="card__title">{item.title}</p>
        <p>{item.resume}</p>
      </div>
    </FadeIn>
  )
}

export default ProjectCard
