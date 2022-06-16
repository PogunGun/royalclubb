import React from "react";
import './Block-4.css'
import card1 from '../../../img/Block-4/Card/44461260299-630x630.jpg'
import card2 from '../../../img/Block-4/Card/123.jpg'
import card3 from '../../../img/Block-4/Card/22.jpg'
import card4 from '../../../img/Block-4/Card/33.jpg'
import {NavLink} from "react-router-dom";
import Cart from "../../shop/cart/Cart";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {addElement} from "../../../redux/action/shopEl/shopEl";
import {addElemtoCart} from "../../../redux/action/shopEl/cart";


const Block4 = ()=>{

    const dispatch =useDispatch();
    const state=useSelector((state)=> {
        return {
            items:state.element.items,

        }

    });
    React.useEffect(()=>{
        axios.get(`https://pogungun.github.io/royalclubb/block-4.json`)
            .then(({data})=>{
                dispatch(addElement(data.nike));


            });

    },[])
    const addElemCart=(obj)=>{
        dispatch(addElemtoCart(obj))
    }
 return (
     <div>
         <div className='box4'>
             <div className='box4-background'>
                 <div className="container">
                     <div className='container-block'>
                         <div className='brand-name-2'>OUTDOOR store</div>
                         <NavLink to='/shop'><div className='button-2'>Look</div></NavLink>
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
         <div className="container">


             <div className="block-4-2">
                    <div className='box4-background-2'>
                        <div className='container-block4'>
                             <div className='color-2'>Everything will be fine!</div>
                            <NavLink to='/shop'><div className='button-2'>Look</div></NavLink>
                         </div>
                     </div>
             </div>
         </div>
     </div>
 )
}
export default Block4;