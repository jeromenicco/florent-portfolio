import React from "react"
import FadeIn from "react-fade-in"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { EffectFade, Pagination, Navigation } from "swiper"
import { useDispatch } from "react-redux"
import { setVisible, setProject } from "../redux/slices/fullScreenSlice"
import { useMediaQuery } from "react-responsive"

// import ReactPlayer from 'react-player'


import "swiper/swiper-bundle.css"
import "./ProjectCard.css"

function ProjectCard({ item }) {
  SwiperCore.use([EffectFade, Pagination, Navigation])
  const dispatch = useDispatch()

  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" })


  const handleFullScreen = () => {
    dispatch(setProject(item))
    dispatch(setVisible(true))
  }

  
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      width: '100%',
      videoId: item.img,
      playerVars: { 'autoplay': 1, 'playsinline': 1 },
      events: {
        'onReady': onPlayerReady
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
     event.target.mute();
    event.target.playVideo();
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
        navigation={item.img.length > 1 && isDesktop ? true : false}
        allowTouchMove={isDesktop ? false : true}
      >
        {
          item.img.map((item, index) => (
            !item.includes(".jpg")
              ?
              <div
                className='iframe__wrapper'
                style={{
                  position: "relative",
                  paddingBottom: "56.25%" /* 16:9 */,
                  paddingTop: 25,
                  marginBottom: isDesktop && '5%',
                  height: 0
                }}
              >
                <iframe
                  id='i_frame'
                  key={index}
                  className="iframe"
                  title={item}
                  src={`http://www.youtube.com/embed/${item}?playsinline=1&autoplay=1&mute=1&loop=1&playlist=${item}`}
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  width={'100%'}
                  // height={isDesktop ? 500 : 250}
                  controls
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              :
              <SwiperSlide key={index} onClick={isDesktop ? handleFullScreen : null}>
                {
                  <img className="project__img" src={item} alt={item.title} />
                }
              </SwiperSlide>
          ))
        }
      </Swiper>
      <div
        className="card__text__container"
      >
        <div className="title__arrow__container">
          <p className="card__title" onClick={isDesktop ? handleFullScreen : null}>{item.title}</p>
        </div>
        <div>
          <p><span style={{ fontStyle: "italic" }}>{item.resumeItalic && item.resumeItalic}</span> {item.resume && item.resume}</p>
          {item.link && <a target="_blank" rel="noreferrer" href={item.url}>{item.link}</a>}
        </div>
      </div>
    </FadeIn>
  )
}

export default ProjectCard
