import React, { Component } from 'react'

export default class DemoState extends Component {

    state = {
        number: 1
      }
  render() {
     

    return (
     <div >
       {/* <h1> {this.state.spNumber}</h1>
       <br />
       <button onClick={() => {
          this.setState({
            spNumber:2
          })
        //   spNumber = 2;

       }}
       
       
       >Thay đổi number</button> */}

       <button onClick={() => {
        let numberNew = this.state.number;
        this.setState({
            number: numberNew - 1
        })
       }}>Giảm</button>
       <h1>{this.state.number}</h1>
       <button onClick={() => {
        let numberNew = this.state.number;
        this.setState({
            number: numberNew + 1
       })
    }}>Tăng</button>
     </div>


    )
  }
}
