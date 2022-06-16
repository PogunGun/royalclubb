import React from "react";
import './cart.css'
import AfterHead from "../../HomePage/Header/AfterHead";
import Header from "../../HomePage/Header/Header";
import Footer from "../../HomePage/Footer/Footer";
import shop from "../../../img/Header/shopping-bag.png";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import CartItem from "./CartItem/CartItem";
import {ClealeELem} from "../../../redux/action/shopEl/ClealeELem";
import {removeCartItem,plusCartItem,minusCartItem} from "../../../redux/action/shopEl/cart";

const Corse =()=>{
    React.useEffect(()=>{
        window.scrollBy(0, -10000)
    })
    const dispatch=useDispatch();
    const {items,totalPrice,totalCount}=useSelector(({cart})=>cart)

    const addedPizzas = Object.keys(items).map((key) => {
        return items[key].items[0];
    });
    const onClearCart=()=>{
        if(window.confirm('Do you really want to clear the cart?')){
            dispatch(ClealeELem())
        }
    }
    const onRemoveItem=(id)=>{
        if(window.confirm('Are you sure you want to delete the item?')){
            dispatch(removeCartItem(id))
        }
    }
    const onPlusItem = (id) => {
        dispatch(plusCartItem(id));
    };

    const onMinusItem = (id) => {
        dispatch(minusCartItem(id));
    };
    const bb=50;
    return(
        <div>
            <div>
                <AfterHead/>
                <Header/>
                {totalCount===0?(
                <div className='cart'>
                    <h1 className='brand-name'>Basket</h1>
                    <div className='block-cart'>
                        <img src={shop} alt="" className='user'/>
                        <h className='card-name-1'>Your cart is empty</h>
                        <p className='mt-p'>
                            See our current offer. You will definitely find something interesting there!</p>
                        <div className='but-mar'>
                           <NavLink to='/royalclubb' className='dec'> <div className='button-card'>Home</div></NavLink>
                        </div>

                    </div>
                    <div className='grid-card-blcok'>
                        <div className='margin-auto'>
                            <div className='mt-ppp'>Where are your products?</div>
                            <div className='mt-pp'>- Make sure you are logged in to your Account</div>
                            <p className='mt-pp'>
                                Your cart is synchronized on all devices if you are logged in to your account. If you do not log in to your Account, your items will be removed from the cart within 10 days.</p>
                            <NavLink to='/register' className='regg-button'>
                                Log in</NavLink>
                        </div>
                        <div className='margin-auto'>
                            <div className='mt-pp'>- Are you logged in and do not see the goods?</div>
                            <div className='mt-pp'>The goods that are sold will be automatically transferred to the My Choice tab, where you can subscribe to a notification about the possible entry of this product back on sale.</div>
                            <div className='mt-pp'>If none of the above apply to you, please contact us oshibka</div>
                        </div>
                    </div>
                </div>
                ):(
                    <div className='bg-clor'>
                        <div className='corse-grid'>
                                <div className='cart-12'>
                                    <div className='mt-mt'>
                                        <div className='display-g'>
                                            <h1 className='brand-name-3'>Basket</h1>
                                            <div onClick={onClearCart} className='b-2'>Clean the basket</div>
                                        </div>

                                        <div className='border-b-1'></div>
                                        <div>
                                                {
                                                    addedPizzas.map(obj=><CartItem
                                                        id={obj.id}
                                                        obj={obj}
                                                        totalPrice={items[obj.id].totalPrice}
                                                        totalCount={items[obj.id].items.length}
                                                        onRemoveItem={onRemoveItem}
                                                        onPlusItem={onPlusItem}
                                                        onMinusItem={onMinusItem}
                                                    />)

                                                }
                                        </div>
                                    </div>
                                </div>
                            <div className='max-w'>
                                <div className='cart-12'>

                                   <h1 className='brand-name-3'>Total</h1>
                                    <div className='border-b-1'></div>
                                    <div className='grid-mini'>
                                        <div className='mb-3'>Amount of goods:</div>
                                            <div>{totalPrice}</div>
                                        <div className='mb-3'>Delivery:</div>
                                            <div>{bb}</div>
                                        <div className='mb-3'>Total:</div>
                                            <div>{totalPrice+bb}</div>
                                    </div>
                                    <div className='mt-1 regg-button'>Buy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }
                <Footer/>
            </div>
        </div>
    )
}
export default Corse


