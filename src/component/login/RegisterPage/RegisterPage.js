import React from "react";
import {Login} from "../log/login";
import {SignUp} from "../log/signUp";
import AfterHead from "../../HomePage/Header/AfterHead";
import Header from "../../HomePage/Header/Header";
import Footer from "../../HomePage/Footer/Footer";

const LoginPage = ()=>{
    React.useEffect(()=>{
        window.scrollBy(0, -10000)
    })
    return(
        <div>
            <div className='none-head'><AfterHead/></div>
            <div className='sticky'><Header/></div>
            <SignUp/>
            <Footer/>
        </div>

    )
}


export default LoginPage;