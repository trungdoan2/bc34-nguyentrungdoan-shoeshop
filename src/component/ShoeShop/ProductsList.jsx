import React, { Component } from 'react'

export default class  extends Component {
  render() {
    let {productsData,setStateModal} = this.props;
    return (
      <div className='row'>
        {productsData.map((shoe, index) => {
            return  <div className='col-4' key={index}>
            <img src= {shoe.image} alt="" className='img-fluid' style={{height: "300px"}} />
             <h3>{shoe.name}</h3>
             <p>{shoe.price}</p>
             <button className='btn btn-success' onClick={() => setStateModal(shoe)}>Xem chi tiết</button>
             <button className='btn btn-danger ml-2'>add to Cart</button>
            </div>
        })}
      </div>
    )
  }
}
