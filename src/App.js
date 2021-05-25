import React from 'react'
import './styles/_app.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Welcome from './routes/Welcome'
import Feelings from './routes/Feelings'
import Details from './routes/Details'
import Overview from './routes/Overview'
import SingleView from './routes/SingleView'

function App() {
  return (
    <div id="All">
      <Router>
        <Header />
        <Switch>
          <Route path="/singleview" component={SingleView} />
          <Route path="/overview" component={Overview} />
          <Route path="/details/:emotion" component={Details} />
          <Route path="/feelings" component={Feelings} />
          <Route path="/" component={Welcome} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
