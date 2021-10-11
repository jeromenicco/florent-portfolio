import React from "react"

import FadeIn from "react-fade-in"

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation} from "swiper"

import { useDispatch } from "react-redux";
import { setVisible, setProject } from "../redux/slices/fullScreenSlice";

import { useMediaQuery } from 'react-responsive'

import "swiper/swiper-bundle.css"

import "./ProjectCard.css"

function ProjectCard({ item }) {
  SwiperCore.use([Pagination, Navigation])
  const dispatch = useDispatch()

  const isDesktop = useMediaQuery({ query: '(min-width: 800px)' })

  const handleFullScreen = () => {
    dispatch(setProject(item))
    dispatch(setVisible(true))
  }

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
        <p className="card__title" onClick={isDesktop && handleFullScreen}>{item.title}</p>
        <p>{item.resume}{item.link && <a target="_blank" rel="noreferrer" href={item.url}>{item.link}</a>}</p>
      </div>
    </FadeIn>
  )
}

export default ProjectCard
