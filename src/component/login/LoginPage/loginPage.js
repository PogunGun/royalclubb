import React from "react";
import {Login} from "../log/login";
import Header from "../../HomePage/Header/Header";
import Footer from "../../HomePage/Footer/Footer";
import './LoginPage.css'

const LoginPage = ()=>{

    return(
        <div>
            <Header/>
            <div className='login-page'>
                <Login/>
            </div>
            <Footer/>
        </div>

    )
}


export default LoginPage;