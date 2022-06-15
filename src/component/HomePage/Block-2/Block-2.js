import React from "react";
import './Block-2.css'
import blok2_banner from '../../../img/Block-2/media_with_description-624eb964b36a08.png'
import card1 from '../../../img/Block-2/Card2/165908770-630x630.jpg'
import card2 from '../../../img/Block-2/Card2/puma_4063697905511_images_21860507613-630x630.jpg'
import card3 from '../../../img/Block-2/Card2/167497694-630x630.jpg'
import card4 from '../../../img/Block-2/Card2/fila_4670036481225_images_22066939888-630x630.jpg'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {addElement, addElement3} from "../../../redux/action/shopEl/shopEl";
import {useDispatch, useSelector} from "react-redux";
import {addElemtoCart} from "../../../redux/action/shopEl/cart";
import Cart from "../../shop/cart/Cart";

const Block2 = ()=>{
    const dispatch =useDispatch();
    const state=useSelector((state)=> {
        return {
            items:state.element.items3,

        }

    });
    React.useEffect(()=>{
        axios.get(`https://pogungun.github.io/royalclubb/bd.json`)
            .then(({data})=>{
                dispatch(addElement3(data.pizzas));


            });

    },[])
    const addElemCart=(obj)=>{
        dispatch(addElemtoCart(obj))
    }
    return(
        <div>
            <div className='container'>
            <div className='box'>
                <div className='box-left'>
                    <div className='brand-name'>Ray-Ban</div>
                    <div>культовий захист від сонця</div>
                    <div className='button-1'>Подивитися</div>
                </div>
                <div>
                    <img src={blok2_banner} alt="" className='banner'/>
                </div>
            </div>
            </div>
            <div className='box-2'>
                <div className='box-margin'>
                    <div className='box-top'>
                        <div className='container'>
                                <div className='container-block'>
                                <div className='brand-name-2'>Кросівки</div>
                                <div className='color-2'>Та спортивне взуття</div>
                                    <NavLink to='/shop'><div className='button-2'>Подивитися</div></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='for-background'>
                        <div className='fon_background_after back-2'>

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

            </div>
        </div>
    )
}
export default Block2;