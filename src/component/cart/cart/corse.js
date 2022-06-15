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
        if(window.confirm('Вы действительно хотите очистить корзину?')){
            dispatch(ClealeELem())
        }
    }
    const onRemoveItem=(id)=>{
        if(window.confirm('Вы действительно хотите удалить товар?')){
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
                    <h1 className='brand-name'>Корзина</h1>
                    <div className='block-cart'>
                        <img src={shop} alt="" className='user'/>
                        <h className='card-name-1'>Ваша корзина - пуста</h>
                        <p className='mt-p'>Посмотрите наше актуальное предложение. Вы уж точно найдёте там что-то интересное!</p>
                        <div className='but-mar'>
                           <NavLink to='/' className='dec'> <div className='button-card'>На главную</div></NavLink>
                        </div>

                    </div>
                    <div className='grid-card-blcok'>
                        <div className='margin-auto'>
                            <div className='mt-ppp'>Где Ваши товары?</div>
                            <div className='mt-pp'>- Убедитесь, что Вы вошли в Аккаунт</div>
                            <p className='mt-pp'>Ваша корзина - синхронизируется на всех девайсах, если Вы вошли в Аккаунт. Если Вы не вошли в Аккаунт, Ваши товары будут удалены из корзины в течении 10 дней.</p>
                            <NavLink to='/register' className='regg-button'>Увійти</NavLink>
                        </div>
                        <div className='margin-auto'>
                            <div className='mt-pp'>- Вы вошли в Аккаунт и не видите товаров?</div>
                            <div className='mt-pp'>Товары, которые проданы, автоматически будут перенесены в закладку Мой выбор, где Вы сможете подписаться на уведомление о возможном поступлении данного товара опять в продажу.</div>
                            <div className='mt-pp'>Якщо жоден з вищенаведених випадків Вас не стосується, зв'яжіться з нами oshibka</div>
                        </div>
                    </div>
                </div>
                ):(
                    <div className='bg-clor'>
                        <div className='corse-grid'>
                                <div className='cart-12'>
                                    <div className='mt-mt'>
                                        <div className='display-g'>
                                            <h1 className='brand-name-3'>Корзина</h1>
                                            <div onClick={onClearCart} className='b-2'>Очистить корзну</div>
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

                                   <h1 className='brand-name-3'>Итого</h1>
                                    <div className='border-b-1'></div>
                                    <div className='grid-mini'>
                                        <div className='mb-3'>Сумма товарів:</div>
                                            <div>{totalPrice}</div>
                                        <div className='mb-3'>Доставка:</div>
                                            <div>{bb}</div>
                                        <div className='mb-3'>Всього:</div>
                                            <div>{totalPrice+bb}</div>
                                    </div>
                                    <div className='mt-1 regg-button'>Купить</div>
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


