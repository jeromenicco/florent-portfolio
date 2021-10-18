import React, { useEffect, useState } from 'react'
import { Switch, Route } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux";

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import BottomBar from "./components/BottomBar"
import TopBar from "./components/TopBar"
import Loader from './components/Loader';

import ScrollToTop from "./effects/ScrollToTop"

import "./App.css"
import "./responsive.css"

function App() {
  const isVisible = useSelector(state => state.fullScreen.visible)
  const [loader, setLoader] = useState(true)
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 5000);
  }, [])

  
  return (
    <>
    {
      loader ?
      <Loader />
        :
      <div className="app">
        { !isVisible && <TopBar history={history} /> }
        { !isVisible && <BottomBar history={history} /> }
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </ScrollToTop>
      </div>

    }
  </>
  )
}

export default App
