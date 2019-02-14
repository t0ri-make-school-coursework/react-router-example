import React from 'react'
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './navbar.css'

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Tori's Site</Link></li>
          <li><Link to="/about">Who Is She</Link></li>
          <li><Link to="/work">View Her Work</Link></li>
        </ul>
      </div>
    )
  }
}