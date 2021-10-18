import React from "react"
import FadeIn from "react-fade-in"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation} from "swiper"
import { useDispatch } from "react-redux";
import { setVisible, setProject } from "../redux/slices/fullScreenSlice";
import { useMediaQuery } from 'react-responsive'
// import { ImArrowRight } from "react-icons/im";
// import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';

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
                      preload="true"
                      // controls
                      muted
                      loop
                      playsInline
                      src={item}
                      alt={item.title}
                    />
                    :
                    <div>
                      {/* <LazyLoadImage className="project__img" src={item} alt={item.title} />
                      <span value={item[0]} /> */}
                      <img className="project__img" src={item} alt={item.title} />
                    </div>
                  }
                </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="card__text__container">
          <div className='title__arrow__container'>
            {/* { isDesktop && <ImArrowRight className='arrow arrow__home'/>} */}
            <p className="card__title">{item.title}</p>
          </div>
          <div>
            {item.resume.split('\n').map((str, index) => <p key={index}>{str}</p>)}
            {item.link && <a target="_blank" rel="noreferrer" href={item.url}>{item.link}</a>}
          </div>
        </div>
      </FadeIn>
  )
}

export default ProjectCard
