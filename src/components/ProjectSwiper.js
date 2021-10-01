import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
// import "swiper/swiper.min.css"
import "swiper/swiper-bundle.css"
// import "swiper/css/pagination"
// import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper"

import "./ProjectSwiper.css"

function ProjectSwiper({ item }) {
  // install Swiper modules
  SwiperCore.use([Pagination, Navigation])

  return (
    <Swiper
      className="swiper__container"
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      pagination
      navigation={true}
    >
      {item.img.map((image, index) => (
        <SwiperSlide key={index}>
          <img className="project__img" src={image} alt={item.title} />
        </SwiperSlide>
      ))}
      <div className="card__text__container">
        <p className="card__title">{item.title}</p>
        <p>{item.resume}</p>
      </div>
    </Swiper>
  )
}

export default ProjectSwiper
