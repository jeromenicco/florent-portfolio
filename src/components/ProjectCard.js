import React from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
// import "swiper/css"
// import "swiper/css/pagination"
// import "swiper/css/navigation"
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper"

import "./ProjectCard.css"

function ProjectCard() {
  // install Swiper modules
  SwiperCore.use([Pagination, Navigation])
  return (
    // <div className="card__container">
    //   <div className="fake__img" />
    //   <div className="card__text__container">
    //     <p>Usbek & Rica magazine</p>
    //     <p>--Direction artistique</p>
    //   </div>
    // </div>
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  )
}

export default ProjectCard
