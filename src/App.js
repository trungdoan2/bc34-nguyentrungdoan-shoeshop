
import './App.css';
import DemoComponent from './component/demobuoimot/DemoComponent';
import BaiTapLayOut from './component/demo_layout/BaiTapLayOut';
import DemoState from './component/demoState/DemoState';
import BaiTapCar from './component/bt_car_basic/BaiTapCar';
import BaiTapMovie from './component/bt_car_basic/BaiTapMovie';
import BaiTapThucHanhLayOut from './component/BaiTapLayOutComponent/BaiTapThucHanhLayOut';
import DemoProps from './component/demo_props/DemoProps';
import TrangChuSanPham from './component/bt_phone/TrangChuSanPham';
import BaiTapGlass from './component/bt-glass/BaiTapGlass';
import ShoesStores from './component/ShoeShop/ShoesStores';

function App() {
  return (
    <div className="App">
       {/* <DemoComponent /> */}
        {/* <BaiTapLayOut /> */}
        {/* <DemoComponent /> */}
        {/* <DemoState  /> */}
        {/* <BaiTapCar /> */}
        {/* <BaiTapMovie /> */}
        {/* <BaiTapThucHanhLayOut /> */}
        {/* <DemoProps /> */}
        {/* <BaiTapGlass /> */}
        {/* <TrangChuSanPham /> */}
        <ShoesStores />
    </div>
  );
}

export default App;
