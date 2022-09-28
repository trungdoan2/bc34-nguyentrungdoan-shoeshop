import React, { Component } from 'react'
import ProductsList from './ProductsList'
import dataShoe from './data.json'
import Modal from './Modal'

export default class ShoesStores extends Component {
    state = {
        stateShoe:  {
            id: 1,
            name: "Adidas Prophere",
            alias: "adidas-prophere",
            price: 350,
            description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 995,
            image: "http://svcy3.myclass.vn/images/adidas-prophere.png"
          }
    }

    
   handleChiTiet = (shoe) => {
    this.setState({
        stateShoe: shoe
    })
   }

  render() {
    return (
      <div className='container'>
        <h3>Shoe Shops</h3>
        <ProductsList productsData = {dataShoe} setStateModal={this.handleChiTiet}/>

         <Modal content={this.state.stateShoe}/>
      </div>
    )
  }
}
