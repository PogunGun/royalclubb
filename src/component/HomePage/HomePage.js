import logo from '../../logo.svg';
import React from "react";
import {NavLink} from "react-router-dom";
import Header from "./Header/Header";
import Before_Header from "./Block-1/Before_Header";
import AfterHead from "./Header/AfterHead";
import Lenta from "./Header/Lenta/Lenta";
import Block2 from "./Block-2/Block-2";
import Block3 from "./Block-3/Block-3";
import Block4 from "./Block-4/Block-4";
import Block5 from "./Block-5/Block-5";
import Footer from "./Footer/Footer";
import './HomePage.css'
function HomePage() {

    React.useEffect(()=>{
        window.scrollBy(0, -10000)
    })
    return (

        <div>
            <div className='none-head'><AfterHead/></div>
            <div className='sticky'><Header/></div>
            <Lenta/>
            <Before_Header/>
            <Block2/>
            <Block3/>
            <Block4/>
            <Block5/>
            <Footer/>
        </div>
    );
}

export default HomePage;
