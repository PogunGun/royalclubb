import React from "react";
import './Lenta.css'
import {NavLink} from "react-router-dom";

const Lenta = ()=>{
    return(
        <div className='bg-clor-b'>
                <div className='fiol-block'>
                    <div className='fiol-block-in'>
                       <div> МАЙ СКИДОК ДО -60%</div>
                       <NavLink to='shop'><button className='fiol-button'>Перевірити</button></NavLink>
                    </div>

                </div>
            </div>
    )
}
export default Lenta;