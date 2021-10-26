import React from "react"
import FadeIn from "react-fade-in"

const MediaRender = ({media}) => {
    return(
        <FadeIn className='full__container'>
          {
            media.map((item, index) => (
              <div className='horizontal__container' key={index}>
                {
                  item.includes('.mp4')
                  ?
                  <video
                    className="full__project__img"
                    autoPlay
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
    )
}

export default MediaRender