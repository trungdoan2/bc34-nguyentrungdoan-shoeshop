import React, { Component } from 'react'
import './demo.css';
// import image_react from './react-img.png';

export default class DemoComponent extends Component {
  getTitle = (TieuDe) => {
    alert (TieuDe);
   }
   hienThiThongTin = () => {
    const title = "Hello";

    return title;
   }

  render() {

   const style = {color: 'blue', fontSize: '100px'};
   const hello = 'Hello React'
   const arrayDS = [{
    id: 1,
    hoTen: "Nguyen Van A"
   },
   {
    id: 2,
    hoTen: "Nguyen Van B"
   }
  ]
   
    return (

     <div>
  {/* <h1 id="demo" className="demo_style text-danger">Hello React</h1>
  <img src="./logo512.png" alt="" /> */}
{/* 
   <button onClick={() => this.getTitle("Hello ")}>Click</button>
  
  <input type="text"  onChange={(event) => {
    const a = event.target.value;
    const b = a + 1;
    console.log(b);
    }}/> */}

{/* {
 arrayDS.map(item => {
   const title = "Hello"
  return <h1>{`${title} ${item.hoTen}`}</h1>
 })
} */}

{/* {
  this.hienThiThongTin()
} */}



 
</div>



    )
  }
}
