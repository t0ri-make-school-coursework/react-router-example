import React from 'react'

export default class PhotoContainer extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.source} alt={this.props.alt} />
      </div>
    )
  }
}

