import { Switch, Route } from "react-router-dom"
import { useHistory } from "react-router-dom"

import Home from "./pages/Home"
import Contact from "./pages/Contact"

import BottomBar from "./components/BottomBar"
import TopBar from "./components/TopBar"

import ScrollToTop from "./effects/ScrollToTop"

import "./App.css"
import "./responsive.css"

function App() {
  const history = useHistory()
  return (
    <div className="app">
      <TopBar history={history} />
      <BottomBar history={history} />
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </ScrollToTop>
    </div>
  )
}

export default App
