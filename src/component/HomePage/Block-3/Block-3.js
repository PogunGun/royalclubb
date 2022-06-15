import React from "react";
import './Block-3.css'
import left from '../../../img/Block-4/two_image_row-620e607f910e45.png'
import right from '../../../img/Block-4/two_image_row-620e6081142bd8.webp'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {addElement4} from "../../../redux/action/shopEl/shopEl";
import {addElemtoCart} from "../../../redux/action/shopEl/cart";

import Cart from "../../shop/cart/Cart";



const  Block3 =()=>{
    const dispatch =useDispatch();
    const state=useSelector((state)=> {
        return {
            items:state.element.items4,

        }


    });
    React.useEffect(()=>{
        axios.get(`https://pogungun.github.io/royalclubb/block-3.json`)
            .then(({data})=>{
                dispatch(addElement4(data.pizzas));


            });

    },[])
    const addElemCart=(obj)=>{
        dispatch(addElemtoCart(obj))
    }

return(
    <div className="block3">
        <div className="container">
            <div className='box3-background'>
                <div className='container-block3'>
                    <div className='brand-name-2'>НОВИЙ</div>
                    <div className='brand-name-2'>БРЕНД</div>
                    <div className='color-2'>на ROYAL.ua</div>
                    <NavLink to='/shop'><div className='button-2'>Подивитися</div></NavLink>
                </div>
            </div>
            <div>
                <div className='text-block3'>No shame. No fear. Answear.LAB x Sasha Sidorenko</div>

                    <div className="container">
                        <div className='card-block'>
                            {
                                state.items.map(obj=><Cart onAddPizza={addElemCart} key={obj.id} {...obj}/>)


                            }
                        </div>
                    </div>
                    <div className="container">
                        <div className='grid-block3'>
                            <div className="grid-block3-left">
                                <img src={left} alt="" className='grid-block3-left-img'/>
                                <div className='block-name'>Кофти, худі, світшоти</div>
                                <div>Оверсайз, фасону fit - обирай те, що Тобі до душі</div>
                                <NavLink to='/shop'><div className='button-1'>Подивитися</div></NavLink>
                            </div>
                            <div className="grid-block3-right">
                                <img src={right} alt="" className='grid-block3-left-img'/>
                                <div className='block-name'>Кросівки</div>
                                <div>You, Your friends, Your sneakers</div>
                                <NavLink to='/shop'><div className='button-1'>Подивитися</div></NavLink>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
)
}


export default Block3;