import React from "react";
import './CartItem.css'
import Ddelete from '../../../../img/cartItem/x-mark.png'
import plus from '../../../../img/plus/add.png'
import minus from '../../../../img/plus/minus.png'
const CartItem=({obj,totalPrice,totalCount,onRemoveItem,id,onMinusItem,onPlusItem})=>{

    return(

        <div>
           <div className='grid-card-block-1'>
                <div>
                  <img src={obj.imageUrl} alt="" className='image'/>
                </div>
                <div className='triple-line'>
                    <div className='bot-b'>
                        <div className='name-5'>{obj.name}</div>
                            <div onClick={()=>onRemoveItem(id)}><img src={Ddelete} alt="" className='user' /></div>
                    </div>

                    <div className='double-grid'>

                            <div className='count'>
                                <div className='b-grid-b'>
                                    <div onClick={()=>onMinusItem(id)} >
                                            <img src={minus} alt=""className='regullar'/>
                                    </div>
                                    <div className='irreg'>Кол-во</div>
                                    <div onClick={()=>onPlusItem(id)} >
                                        <img src={plus} alt="" className='regullar'/>
                                    </div>
                                </div>
                            </div>


                        <div className='count'>Цена:</div>
                        <div className='count'>Всього</div>
                        <div className='count'>{totalCount}</div>
                        <div className='count'>{obj.price}</div>
                        <div className='count'>{totalPrice}</div>
                    </div>
                    <div></div>
                </div>


            </div>

        </div>

    )
}
export default CartItem;