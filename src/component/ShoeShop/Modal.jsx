import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    let {content} = this.props;
    return (
      <div className='col-12 row pt-4'>
      <div className='col-5'>
        <h2>{content.name}</h2>

        <img className='img-fluid' style={{ height: "400px" }} src={content.image} />
      </div>
      <div className='col-7'>
        <h2>Chi Tiết Sản Phẩm</h2>
        <table className='table text-left'>
          <tbody>
            <tr>
              <td>Tên</td>
              <td>{content.name}</td>
            </tr>
            <tr>
              <td>Giá</td>
              <td>{content.price}</td>
            </tr>
            <tr>
              <td>Mô tả</td>
              <td>{content.description}</td>
            </tr>
            <tr>
              <td>Mô tả ngắn</td>
              <td>{content.shortDescription}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  
    )
  }
}
