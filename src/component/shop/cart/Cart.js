import React from "react";

import './Cart.css'
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentCart} from "../../../redux/action/shopEl/cart";
import {useNavigate} from "react-router";
import {setCurrentElem} from "../../../redux/slice/CurrentElem";


const Cart=({id,name,imageUrl,price,onAddPizza})=>{
    React.useEffect(()=>{
        window.scrollBy(0, -10000)
    })
    const navigate = useNavigate();
    const dispatch= useDispatch();

    const onClickAddPizza=()=>{
        const obj={
            id,
            name,
            imageUrl,
            price,

        }
        onAddPizza({name,imageUrl,id ,price})
        console.log({name,imageUrl,id ,price})
    };
    const handleClick = () => {
      dispatch(setCurrentElem({name,imageUrl,id ,price}));
        navigate(`/shop/card`)

    }


    return(
<div>

        <div className="product-item-1" onClick={handleClick}>
           <img src={imageUrl}/>
                <div className="product-list-1">
                    <h3>{name}</h3>
                   <span className="price-1">₴ {price}</span>

                </div>
        </div>
</div>
    )
}
export default Cart;