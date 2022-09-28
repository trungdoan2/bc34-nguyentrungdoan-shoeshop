import React, { Component } from 'react'

export default class BannerComponent extends Component {
  render() {
    return (
      <div className='col-12 bg-secondary container mt-5 p-5'>
        <h1> A Warm Welcomce!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, quo!</p>
        <button className='btn btn-success'>Call to acction</button>
      </div>
    )
  }
}
