import React from "react"

import FadeIn from "react-fade-in"

import "./ContactInfos.css"

function ContactInfos() {
  return (
    <FadeIn className="infos__container">
      <p className="infos__content1">
        Depuis 2013, je suis directeur artistique, designer graphique et motion
        designer pour des acteurs institutionnels, culturels, des médias et des
        marques.
      </p>
      <p className="infos__content2">
        Contactez-moi à l'adresse <a className='infos__mail__link' href='mailto:florent.texier@protonmail.com'>florent.texier@protonmail</a> !
      </p>
      <p className="infos__content3">
        Références :<br />
        xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx
        xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx
        xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx
      </p>
    </FadeIn>
  )
}

export default ContactInfos
