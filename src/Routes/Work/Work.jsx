import React from 'react'
import './work.css'

// Components
import PhotoContainer from '../../Components/PhotoContainer/PhotoContainer.jsx'

export default class Work extends React.Component {
  render() {
    return (
      <div>
        <div className="img">
          <p>
            <PhotoContainer source="./images/projects.png" alt="my projects" />
          </p>
        </div>
      </div>
    )
  }
}