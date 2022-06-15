import React from "react";
import shopBag from "../../../../../img/Header/shop-bb.png";
import '../CardBlock.css'
import {useDispatch, useSelector} from "react-redux";
import {addElemtoCart} from "../../../../../redux/action/shopEl/cart";

const CartInfo =()=>{

    React.useEffect(()=>{
        window.scrollBy(0, -10000)
    })
    const game =useSelector(state => state.game.currentElem);
    const dispatch =useDispatch();
    const name=game.name;
    const id=game.id;
    const imageUrl=game.imageUrl;
    const price=game.price;
    const onClickAddPizza=()=>{
        const obj={
            id,
            name,
            imageUrl,
            price,

        }
        addElemCart({name,imageUrl,id ,price})
    };
    const addElemCart=(obj)=> {
        dispatch(addElemtoCart(obj))
    }
    return(
        <div className='need-grid'>
            <div className='need-grid-m'>
                <div className='none-500'>
                    <div><img src={game.imageUrl} alt="" className='need-img'/></div>
                    <img src={game.imageUrl} alt="" className='need-img'/>
                </div>
                <div className='need-margin-b'>
                    <img src={game.imageUrl} alt="" className='block-elem'/>

                </div>

            </div>
            <div className='margin-auto'>
                <div className='buy-cc'>{game.name}</div>
                <div className='buy-c'>{game.price} грн</div>
                <button className='buy-buttom'>
                    <div><img src={shopBag} alt="" className='user'/>
                    </div>
                    <button onClick={onClickAddPizza} className='b-1'>Добавить в корзину</button>
                </button>
            </div>
        </div>
    )
}

export default CartInfo;