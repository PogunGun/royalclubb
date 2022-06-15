import React from "react";
import './CardBlock.css'
import AfterHead from "../../../HomePage/Header/AfterHead";
import Header from "../../../HomePage/Header/Header";
import Footer from "../../../HomePage/Footer/Footer";
import shopBag from '../../../../img/Header/shop-bb.png'
import {useDispatch, useSelector} from "react-redux";
import CartItem from "../CartItem/CartItem";
import {addElemtoCart} from "../../../../redux/action/shopEl/cart";
import CartInfo from "./CartInfo/CartInfo";
import Cart from "../../../shop/cart/Cart";

const CardBlock=()=>{

        return(
            <div>
                <AfterHead/>
                <Header/>
                <div className='need-margin'>
                        <CartInfo/>
                </div>
                <Footer/>
            </div>
        )
}

export default CardBlock;