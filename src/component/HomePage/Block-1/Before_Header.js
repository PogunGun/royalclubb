import React from "react";
import banner from '../../../img/Before_Header/banner_wide_image_with_description-6254206923a9e9.png'
import './Before_Header.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {addElement2} from "../../../redux/action/shopEl/shopEl";
import {addElemtoCart} from "../../../redux/action/shopEl/cart";
import Cart from "../../shop/cart/Cart";

const Before_Header =()=>{
    const dispatch =useDispatch();
    const state=useSelector((state)=> {
        return {
            items:state.element.items2,

        }

    });
    React.useEffect(()=>{
        axios.get(`/block-1.json`)
            .then(({data})=>{
                dispatch(addElement2(data.pizzas));


            });

    },[])
    const addElemCart=(obj)=>{
        dispatch(addElemtoCart(obj))
    }

    return(

        <div className='font-late'>

            <div className="container">
            <div className='box'>
                <div className='box-left'>
                    <div className='brand-name'>Superdry</div>
                    <div>новий бренд на RoyalClub.ua</div>
                    <NavLink to='/shop'><div  className='button-1'>Подивитися</div></NavLink>
                </div>
                <div>
                    <img src={banner} alt="" className='banner'/>
                </div>
            </div>
            </div>
            <div className='box2'>
                <div className='boxx'>
                   <div className='box-background'>
                       <div className='container'>
                       <div className='container-block'>
                           <div className='brand-name-2'>Active Store</div>
                           <div className='color-2'>Одяг для твого комфорту</div>
                           <NavLink to='/shop'><div className='button-2'>Подивитися</div></NavLink>
                       </div>
                       </div>
                   </div>
                </div>
            </div>
            <div className='for-background'>
                <div className='fon_background_after'>

                </div>
            </div>
            <div className='card-block-margin'>
                <div className="container">
                <div className='card-block'>
                    {
                        state.items.map(obj=><Cart onAddPizza={addElemCart} key={obj.id} {...obj}/>)


                    }
                </div>
                </div>
            </div>

        </div>
    )

}
export default Before_Header;