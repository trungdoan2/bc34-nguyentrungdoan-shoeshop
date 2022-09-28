import React, { Component } from 'react'
import dataGlass from './dataGlasses.json'
import ListGlasses from './ListGlass';
// import ListGlasses from './listGlass';
import Model from './Model';
// import './../bt-glass/css/demo.css'

export default class BaiTapGlass extends Component {

state = {
        
        url: "./glassesImage/v1.png",
        name: "GUCCI G8850U",
        price: 30,
}

pickGlass = (img, name, price) => {
this.setState({
  url: img,
        price: price,
        name: name,
})
}



  listGlass = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  ]



  render() {
   let{url, name, price} = this.state;
    return (
      <div className='wrapper' style={{backgroundImage: 'url(./glassesImage/background.jpg)'}}>
      <h1  className='pt-4 title'>Try Glass App Online</h1>
      <div className='container-fluid'>
        <div className='row pt-4'>
            <div className='col-4'>
           <Model img={url} name={name} price={price}/>
            </div>
            <div className='col-8'>
           <ListGlasses pickGlass={this.pickGlass} listGlass={this.listGlass}/>
            </div>
        </div>

      </div>
       


      </div>
    )
  }
}
