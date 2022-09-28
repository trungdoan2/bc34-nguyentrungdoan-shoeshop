import React, { Component } from 'react'

export default class DanhSachSanPham extends Component {
  render() {
    let {dataPhoneProps, handleChiTiet} = this.props;
    return (
      <div>
         {dataPhoneProps.map((phone, index) => {
            return    <div className='col-12' key={index}>
            <img src= {phone.hinhAnh} alt="" className='img-fluid' style={{height: "300px"}} />
             <h3>{phone.tenSP}</h3>
             <button className='btn btn-success' onClick={() => this.props.handleChiTiet(phone)}>Xem Chi Tiết</button>
             <button className='btn btn-danger ml-2'>Thêm giỏ hàng</button>
            </div>
        })
        }
      </div>
    )
  }
}
