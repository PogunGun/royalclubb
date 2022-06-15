import React from "react";
import './myvib.css'
import AfterHead from "../../HomePage/Header/AfterHead";
import Header from "../../HomePage/Header/Header";
import Footer from "../../HomePage/Footer/Footer";
import heart from "../../../img/Header/heart.png";
import {NavLink} from "react-router-dom";


const MyVibir =()=>{
    React.useEffect(()=>{
        window.scrollBy(0, -10000)
    })

    return(
        <div>
            <AfterHead/>
            <Header/>

                <div>
                    <div className='grid-block-myvib'>
                        <div className='margin-auto'>
                            <div className='block-name-b'>Мій Вибір</div>
                            <div className='mt-ppgg'>Что такое закладка «Мой выбор»?</div>
                            <div className='mt-ppg'>-Добавление товара в закладку «Мой выбор» не означает его
                                резервацию.
                            </div>
                            <div className='mt-ppg'>-Вместительность закладки «Мой выбор» сохраняется автоматически.
                            </div>
                            <div className='mt-ppg'>-Товары, которые проданы, обозначены "Товар недоступен".</div>
                            <div className='mt-ppg'>-Для Клиентов без Аккаунта, вместительность закладки «Мой выбор»
                                сохраняется в течении месяца.
                            </div>
                            <div className='mt-ppg'>-Для Клиентов c Аккаунтом, вместительность закладки «Мой выбор»
                                сохраняется до тех пор, пока Клиент не удалит товары самостоятельно либо они будут
                                проданы.
                            </div>

                        </div>
                        <div className='grey-block'>
                            <div className='mt-ppgg'>У Вас нет товаров в закладке «Мой выбор»</div>
                            <div className='mt-ppg'>Добавить товар в закладку «Мой выбор» можно с помощью</div>
                            <img src={heart} alt="" className='user'/>
                            <div className='mt-ppgg'>Вы создали Аккаунт?</div>
                            <div className='mt-ppgf'>Войдите в свой Аккаунт, чтобы синхронизировать вместительность
                                закладки «Мой выбор» на разных девайсах
                            </div>
                            <NavLink to='/register' className='regg-button2'>
                                Увійти
                            </NavLink>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}
export default MyVibir