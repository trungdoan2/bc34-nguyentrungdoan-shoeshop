import React, { Component } from 'react'
import dataPhone from './data.json'
import DanhSachSanPham from './DanhSachSanPham'
import SanPham from './SanPham'


export default class 
 extends Component {

   state = {
    statePhone:   {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: "AMOLED, 6.2, Full HD+",
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
    giaBan: 5700000,
        hinhAnh: "./imagePhone/vsphone.jpg"
    },
    gioHang: [{
    maSanPham: "1",
    hinhAnh: "./imagePhone/vsphone.jpg",
    tenSanPham: "VinSmart Live",
    soLuong: "1",
    donGia: "5700000",
    }]
   }
   
  

   handleChiTiet = (phone) => {
    this.setState({
        statePhone: phone
    })
   }

   



  render() {
    let { statePhone } = this.state;
    return (
      <div className='container'>
        
          
         <h3 className='text-danger p-5' data-toggle = "modal"  data-target = "#exampleModal" style={{cursor: "pointer"}}>Giỏ hàng (0 - 0Đ)</h3>
          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">giỏ hàng</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className='table'>
                    <thead>
                       <tr>
                       <th>Mã Sản Phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng đặt</th>
                        <th> Đơn giá</th>
                        <th>Thành Tiền</th>
                        <th></th>
                       </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td>1</td>
                        <td>Hình ảnh</td>
                        <td> Iphone 14</td>
                        <td>100</td>
                        <td>1 VND</td>
                        <td>100 VND</td>
                        <td>
                            <button className='btn btn-danger'>Xóa</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                </div>
              </div>
            </div>
          </div>
        

       <DanhSachSanPham  dataPhoneProps={dataPhone} handleChiTiet={this.handleChiTiet} />

      {/* <SanPham  statePhone = {statePhone}/> */}

      </div>
    )
  }
}
