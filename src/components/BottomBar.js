import React from "react"
import { useDispatch } from "react-redux"
import { setVisible } from "../redux/slices/fullScreenSlice"

import "./BottomBar.css"

function BottomBar({ history }) {
  const dispatch = useDispatch()

  const handleBackNav = () => {
    history.push("/")
    dispatch(setVisible(false))
  }
  return (
    <div className="bottom__bar__container">
      <ul className="bottom__flex__wrap">
        <li onClick={handleBackNav}>Florent Texier</li>
        <li onClick={() => history.push("/contact")}>Infos / Contact</li>
      </ul>
    </div>
  )
}

export default BottomBar
