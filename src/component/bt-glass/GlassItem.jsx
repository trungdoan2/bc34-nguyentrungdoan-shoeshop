import React, { Component } from 'react'

export default class GlassItem extends Component {
  render() {
    let {img, name, price} = this.props;
    console.log(this.props);
    return (
      <div className='col-4'onClick={() => {
        this.props.pickGlass(img, name, price);
      }}>
        <div className='card p-3 glass-item-card'>
            <img src={img} alt={name} className='card-img-top'/>
            <div className='card-body'>
                <h4 className='card-title'>{name}</h4>
                <p className='card-text'>{price}</p>
            </div>
        </div>
      </div>
    )
  }
}
