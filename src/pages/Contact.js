import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import ContactInfos from "../components/ContactInfos"
import { setVisible } from "../redux/slices/fullScreenSlice"

import "./Contact.css"

function Contact() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setVisible(false))
  })
  
  return (
    <div className="contact__container">
      <ContactInfos />
    </div>
  )
}

export default Contact
