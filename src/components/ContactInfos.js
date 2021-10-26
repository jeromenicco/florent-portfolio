import React from "react"
import FadeIn from "react-fade-in"

import "./ContactInfos.css"

function ContactInfos() {
  return (
    <FadeIn className="infos__container">
      <p className="infos__content1">
      Depuis 2013, je travaille pour des médias, des acteurs culturels, des maisons d’édition et des marques. J’expérimente aussi dans les champs de l’animation 2D et 3D, la réalisation, l’illustration et les objets imprimés. <br></br>
        Contactez-moi à l'adresse <a className='infos__mail__link' href='mailto:florent.texier@protonmail.com'> florent.texier@protonmail.com</a> !
      </p>
      <div className='dum__space__contact' />
      <p className="infos__content1">
      Since 2013, I work for medias, publishing houses, institutions and brands. My experimentations focus on 2D and 3D animation, film direction, illustration and printed objects.<br></br>
      Contact me at <a className='infos__mail__link' href='mailto:florent.texier@protonmail.com'> florent.texier@protonmail.com</a> !
      </p>
    </FadeIn>
  )
}

export default ContactInfos
