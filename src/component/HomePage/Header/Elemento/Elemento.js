import React from "react";
import './Elemento.css'
import {setCurrentElem} from "../../../../redux/slice/CurrentElem";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";



const Elemento=({id,name,imageUrl,price,onAddPizza})=>{
    const navigate = useNavigate();
    const dispatch= useDispatch();
    const handleClick = () => {
        dispatch(setCurrentElem({name,imageUrl,id ,price}));
        navigate(`/shop/card`)
    }
    return(
        <div className='elemento' onClick={handleClick}>
            <div>
                <img src={imageUrl} alt=""className='elemento-img'/>
            </div>
            <div className='mr-l-3'>
                <h5>{name}</h5>
            </div>
        </div>
    )
}
export default Elemento;