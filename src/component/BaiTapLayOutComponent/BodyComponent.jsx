import React, { Component } from 'react'
import BannerComponent from './BannerComponent'

export default class BodyComponent extends Component {
  render() {
    return (
     <div className='col-12'>
        <BannerComponent />
     </div>
    )
  }
}
