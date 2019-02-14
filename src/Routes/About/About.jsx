import React from 'react'
import './about.css'

// Components
import PhotoContainer from '../../Components/PhotoContainer/PhotoContainer.jsx'

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <PhotoContainer source="./images/me.jpeg" alt="a picture of me!" />
        <p>^ a pic of me</p>
      </div>
    )
  }
}