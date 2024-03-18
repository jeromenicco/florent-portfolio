import React from 'react'
import FadeIn from 'react-fade-in'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade, Pagination, Navigation } from 'swiper'
import { useDispatch } from 'react-redux'
import { setVisible, setProject } from '../redux/slices/fullScreenSlice'
import { useMediaQuery } from 'react-responsive'

import 'swiper/swiper-bundle.css'
import './ProjectCard.css'

function ProjectCard({ item }) {
  SwiperCore.use([EffectFade, Pagination, Navigation])
  const dispatch = useDispatch()

  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })

  const handleFullScreen = () => {
    dispatch(setProject(item))
    dispatch(setVisible(true))
  }

  return (
    <FadeIn className='card__container'>
      <Swiper
        className='swiper__container'
        slidesPerView={1}
        effect={'fade'}
        spaceBetween={10}
        loop={true}
        pagination
        navigation={item.img.length > 1 && isDesktop ? true : {
          prevEl: '.left__nav',
          nextEl: '.right__nav',
        }}
        allowTouchMove={isDesktop ? false : true}
      >
        {
          item.img.map((item, index) => (
            !item.includes('.jpg')
              ?
              <div
                className='iframe__wrapper'
                key={index}
                style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  paddingTop: '6.5%',
                  marginBottom: isDesktop && '10px',
                  height: 0
                }}
              >
                <iframe
                  className='iframe'
                  title={item}
                  src={`http://www.youtube.com/embed/${item}?mute=1&autoplay=1&loop=1&playlist=${item}`}
                  frameBorder='0'
                  allowFullScreen
                  controls
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
              :
              <SwiperSlide key={index} onClick={isDesktop ? handleFullScreen : null}>
                {
                  !isDesktop
                    ?
                    <div className='slide__navigation__wrapper'>
                      <div className='left__nav'></div>
                      <div className='right__nav'></div>
                      <img className='project__img' src={item} alt={item.title} />
                    </div>
                    :
                    <img className='project__img' src={item} alt={item.title} />
                }
              </SwiperSlide>
          ))
        }
      </Swiper>

      <div className="card__info__container">
        <div className="card__title__container">
          {
            item.link
              ?
              <a target="_blank" rel="noreferrer" href={item.link}>
                <h2 className="card__title" onClick={isDesktop ? handleFullScreen : null}>{item.title}</h2>
              </a>
              :
              <h2 className="card__title" onClick={isDesktop ? handleFullScreen : null}>{item.title}</h2>
          }
          <p>{item.resume && item.resume}</p>
        </div>
        <div className='card__pagination__container'>
        </div>
      </div>
    </FadeIn>
  )
}


export default ProjectCard
