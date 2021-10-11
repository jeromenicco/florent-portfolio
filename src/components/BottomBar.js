import React from "react"

import { useDispatch } from "react-redux"

import { setVisible } from '../redux/slices/fullScreenSlice'

import "./BottomBar.css"

function BottomBar({ history }) {
const dispatch = useDispatch()
  return (
    <div className="bottom__bar__container">
      <div className="bottom__flex__wrap">
        <p onClick={() => dispatch(setVisible(false))}>Florent Texier</p>
        <p onClick={() => history.push("/contact")}>Infos / Contact</p>
      </div>
    </div>
  )
}

export default BottomBar
