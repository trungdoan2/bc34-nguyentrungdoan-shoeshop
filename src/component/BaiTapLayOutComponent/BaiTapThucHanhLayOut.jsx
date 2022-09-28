import React, { Component } from 'react'
import BodyComponent from './BodyComponent'
import HeaderComponent from './HeaderComponent'
import ItemComponent from './ItemComponent'

export default class BaiTapThucHanhLayOut extends Component {
  render() {
    return (
      <div className='container '>
        <HeaderComponent />
        <BodyComponent />
        <ItemComponent /> 
      </div>
    )
  }
}
