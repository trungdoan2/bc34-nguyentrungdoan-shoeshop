import React, { Component } from 'react'

export default class Model extends Component {
  render() {
    let{img, name, price} = this.props;
    return (
        <div className='model'>
         <div className='card text-white bg-dark'>
            <img className='model-img' src="./glassesImage/model.jpg" alt=""  />
            <img className='glass-img' src={img} alt={name} />
            <div className='card-body'>
                <h4 className='card-title'>{name}</h4>
                <p className='card-text'>{price}</p>
            </div>
         </div>
      </div>
    )
  }
}
