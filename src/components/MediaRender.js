import React from "react"
import FadeIn from "react-fade-in"

const MediaRender = ({ media }) => {
    return(
        <FadeIn className="full__container">
          {
            media.map((item, index) => (
              <div className="horizontal__container" key={index}>
                {
                  item.includes(".jpg")
                  ?
                  <img className="full__project__img" src={item} alt={item.title} />
                  :
                  <iframe
                    title={item}
                    src={`http://www.youtube.com/embed/${item}?mute=1&autoplay=1&loop=1&playlist=${item}`}
                    frameBorder='0'
                    allowFullScreen
                    controls
                    style={{
                      width: '100vw',
                      height: '100vh'
                    }}
                  />
                }
              </div>
            ))
          }
      </FadeIn>
    )
}

export default MediaRender