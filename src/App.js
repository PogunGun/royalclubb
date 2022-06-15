import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./component/HomePage/HomePage";
import LoginPage from "./component/login/LoginPage/loginPage";
import RegisterPage from "./component/login/RegisterPage/RegisterPage";
import Profile from "./component/login/Profile/Profile";
import MyVibir from "./component/cart/my-vibir/my-vibir";
import Corse from "./component/cart/cart/corse";
import Shop from "./component/shop/Shop";
import CardBlock from "./component/cart/cart/CartBlock/CardBlock";

function App() {

  return (

    <Routes>
        <Route path='/royalclubb' element={<HomePage/>} />
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/account' element={<Profile/>}/>
        <Route path='/my-vib' element={<MyVibir/>}/>
        <Route path='/cart' element={<Corse/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop/card'element={<CardBlock/>}/>
    </Routes>
  );
}

export default App;
