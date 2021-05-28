import React, { createContext, useState } from 'react'
import firebase from 'firebase'
import firebaseConfig from './config'
import './styles/_app.scss'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './routes/Login'
import Signup from './routes/Signup'
import Welcome from './routes/Welcome'
import Feelings from './routes/Feelings'
import Details from './routes/Details'
import Overview from './routes/Overview'
import SingleView from './routes/SingleView'

firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebase.auth()

export const UserContext = createContext(null)

function App() {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)
  return (
   <UserContext.Provider value={{ user, setUser,firebaseAuth }}>
      <div id="All">
        <Router>
          <Header />
          <Switch>
            <Route path="/singleview" component={SingleView} />
            <Route path="/overview" component={Overview} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/details/:emotion" component={Details} />
            <Route path="/feelings" component={Feelings} />
            <Route path="/" component={Welcome} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </UserContext.Provider>
  )
}

export default App
