import React from "react"

import SwiperCore, { Pagination, Navigation} from "swiper"

import FadeIn from "react-fade-in"

import "./ProjectFull.css"

function ProjectFull({ fullProject }) {
  SwiperCore.use([Pagination, Navigation])
  return (
    <>
    <FadeIn className='full__container'>
        {
          fullProject.img.map((item, index) => (
            <div className='horizontal__container' key={index}>
              {
                item.includes('.mp4')
                ?
                <video
                  className="full__project__img"
                  autoPlay
                  muted
                  loop
                  preload="auto"
                  playsInline
                  src={item}
                  alt={item.title}
                />
                :
                <img className="full__project__img" src={item} alt={item.title} />
              }
            </div>
          ))
        }

    </FadeIn>
      <div className='text__container__full'>
        {/* <p className="card__title" onClick={() => console.log(item)}>{item.title}</p> */}
        <p className='title__full'>{fullProject.title}</p>
        <p>{fullProject.resume}{fullProject.link && <a target="_blank" rel="noreferrer" href={fullProject.url}>{fullProject.link}</a>}</p>
        {/* {item.link && <a href={item.url}>{item.link}</a>} */}
      </div>
      </>
  )
}

export default ProjectFull
