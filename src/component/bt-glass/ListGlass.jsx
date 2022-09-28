import React, { Component } from 'react'
import GlassItem from './GlassItem'

export default class ListGlasses extends Component {
  renderClasses = (listGlass) => {
 return listGlass.map((glass, index) => {
  return <GlassItem  pickGlass={this.props.pickGlass} key = {index} img={glass.url} name={glass.name} price={glass.price}/>
 })
  }
  render() {
    let {listGlass} = this.props
    return (
      <div classname="list-glass">
      <div className='row'>
    {this.renderClasses(listGlass)}
      </div>
   </div>


     
    )
  }
}
