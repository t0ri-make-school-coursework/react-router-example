import React from 'react'
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Routes/Home/Home.jsx'
import About from './Routes/About/About.jsx'
import Work from './Routes/Work/Work.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" component={Navbar} />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
