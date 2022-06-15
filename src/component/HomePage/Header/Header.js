import React, {useState} from "react";
import './Header.css'
import user from '../../../img/Header/user (3).png'
import shop from '../../../img/Header/shopping-bag.png'
import logo from '../../../img/Header/logo.png'
import ukrain from '../../../img/Header/ukraine (2).png'
import heart from '../../../img/Header/heart.png'
import {NavLink,Link} from "react-router-dom";
import {useAuth} from "../../login/hook/hook";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {addElement} from "../../../redux/action/shopEl/shopEl";
import Elemento from "./Elemento/Elemento";
import {useNavigate} from "react-router";
const Header =()=>{
    const navigate = useNavigate();

    const {isAuth,email}= useAuth();
    const itemRef=React.useRef()
    const {totalPrice,totalCount}=useSelector(({cart})=>({
        totalCount:cart.totalCount,
    }))
    const [item,setItem]=useState([])
    const [bob,setBob]=useState(true)
    const [value,setValue]=useState('')
    const dispatch=useDispatch()
    const handleOutside=(e)=>{
       if (!e.path.includes(itemRef.current)){
          setBob(false)
       }else if(e.path.includes(itemRef.current)){
           setBob(true)
       }
    }
    React.useEffect(()=>{
        axios.get(`/db.json`)
            .then(({data})=>{
                dispatch(addElement(data.pizzas));

                setItem(data.pizzas);
            });
        document.body.addEventListener('click',handleOutside)
    },[])
    const filterItem =item.filter(items=>{
        return items.name.toLowerCase().includes(value.toLowerCase())
    })

    async function onKeyDown(e){
      const key=e.keyCode || e.which;
        if (key===13){

            if (window.location.composedPath!=='/shop'){
                await navigate('/shop?')
            }
            await axios.get(`https://62a5ce9a430ba53411ccdc39.mockapi.io/pizzas?search=${value}`)
                .then(({data})=>{

                    dispatch(addElement(data));
                },);
      }
    }

    return (
        <div className='font-late'>
            <div className='header-position'>
            <div className='header'>
                <div className='header-logo'>
                 <NavLink to='/royalclubb'><img src={logo} alt=""/>
                 </NavLink>
                    <NavLink to='/royalclubb'><span>Royal Club</span>
                    </NavLink>
                </div>
                <div>
                <div className='d1-margin'>
                    <div ref={itemRef} className="d1">
                        <form>
                            <input
                                type="text"
                                placeholder="Пошук..."
                                onChange={(event)=>setValue(event.target.value)}
                                onKeyPress={onKeyDown}
                            />
                        </form>
                        <div className='poisk'>
                        {
                            bob && value!==''?( filterItem.map(item=><Elemento {...item} key={item.id} />)):('')
                        }
                        </div>
                    </div>
            </div>
                </div>
                <div className='header-right'>
                    <img src={ukrain} alt="" className='user block-user'/>
                    {isAuth? (<Link to='/account'><img src={user} alt="" className='user'/></Link>
                     ):(
                        <Link to='/register'>
                            <img src={user} alt="" className='user'/>
                        </Link>
                    )
                    }
                    <NavLink to='/my-vib'><img src={heart} alt="" className='user'/></NavLink>
                    <NavLink to='/cart'><img src={shop} alt="" className='user'/>{totalCount>0?(<div className='i'>{totalCount}</div>):(null)}</NavLink>

                </div>
            </div>
            <div className='before-header-bg'>

                <div className='before-header'>
                    <NavLink to='/shop' className='display-n none'>
                        <span className='menu-g '>Новинки</span>
                    </NavLink>
                    <NavLink to='/shop' className='display-n'><span className='menu'>Одяг</span>
                        <NavLink to='/shop'>
                            <div className="descr">
                               <div className='name-3'>Категорії</div>
                                <div className='popup'>
                                    <div>
                                        <div className='mb-2'>Блузки</div>
                                        <div className='mb-2'>Джинси</div>
                                        <div className='mb-2'>Комбинезони</div>
                                        <div className='mb-2'>Комплекти</div>
                                        <div className='mb-2'>Кофти</div>
                                        <div className='mb-2'>Купальники</div>
                                        <div className='mb-2'>Куртки і пальто</div>
                                        <div className='mb-2'>Пиджаки та желети</div>
                                    </div>
                                    <div>
                                        <div className="mb-2">Рубашки</div>
                                        <div className="mb-2">Платья</div>
                                        <div className="mb-2">Шорти</div>
                                        <div className="mb-2">Брюки </div>
                                        <div className="mb-2">Спідниці</div>
                                        <div className="mb-2">Футболки та майки</div>
                                        <div className='mb-2 weight'>Смотреть все</div>
                                        <div className="mb-2"></div>
                                    </div>
                                </div>
                            </div></NavLink>
                    </NavLink>

                    <NavLink to='/shop' className='display-n'><span className='menu'>Взуття</span>
                        <NavLink to='/shop'>
                            <div className="descr">
                                <div className='name-3'>Категорії</div>
                                <div className='popup'>
                                    <div>
                                        <div className='mb-2'>Outdoor</div>
                                        <div className='mb-2'>Балетки</div>
                                        <div className='mb-2'>Сапоги</div>
                                        <div className='mb-2'>Кеди</div>
                                        <div className='mb-2'>Кроссовки</div>
                                        <div className='mb-2'>Тапки</div>
                                        <div className='mb-2'>Туфли</div>
                                        <div className='mb-2'>Уход за обувью</div>
                                        <div className='mb-2 weight'>Смотреть все</div>
                                    </div>
                                </div>
                            </div></NavLink>

                    </NavLink>
                    <NavLink to='/shop' className='display-n'><span className='menu'>Аксесуари</span>
                        <NavLink to='/shop'>
                            <div className="descr">
                                <div className='name-3'>Категории</div>
                                <div className='popup'>
                                    <div>
                                        <div className='mb-2'>Бижутерия</div>
                                        <div className='mb-2'>Часи</div>
                                        <div className='mb-2'>Кошельки</div>
                                        <div className='mb-2'>Косметика</div>
                                        <div className='mb-2'>Маски</div>
                                        <div className='mb-2'>Очки</div>
                                        <div className='mb-2'>Парасолі</div>
                                        <div className='mb-2'>Плавальні аксесуари</div>
                                    </div>
                                    <div>
                                        <div className="mb-2">Ремни</div>
                                        <div className="mb-2">Перчатки</div>
                                        <div className="mb-2">Рюказаки</div>
                                        <div className="mb-2">Сумочки</div>
                                        <div className="mb-2">Чехли</div>
                                        <div className="mb-2">Шляпи та шапки</div>
                                        <div className="mb-2">Шарфи та платки</div>
                                        <div className='mb-2 weight'>Смотреть все</div>
                                    </div>
                                </div>
                            </div></NavLink>

                    </NavLink>
                     <NavLink to='/shop' className='display-n'><span className='menu'>Спорт</span>
                         <NavLink to='/shop'>
                             <div className="descr">
                                 <div className='popup-2'>
                                     <div>
                                         <div className='name-3'>Одежда</div>
                                         <div className='mb-2'>Блузки</div>
                                         <div className='mb-2'>Джинси</div>
                                         <div className='mb-2'>Комбинезони</div>
                                         <div className='mb-2'>Комплекти</div>
                                         <div className='mb-2'>Кофти</div>
                                         <div className='mb-2'>Купальники</div>
                                         <div className='mb-2'>Куртки і пальто</div>
                                         <div className='mb-2'>Пиджаки та желети</div>
                                         <div className='mb-2 weight'>Смотреть все</div>
                                     </div>
                                     <div>
                                         <div className='name-3'>Обувь</div>
                                         <div className='mb-2'>Outdoor</div>
                                         <div className='mb-2'>Балетки</div>
                                         <div className='mb-2'>Сапоги</div>
                                         <div className='mb-2'>Кеди</div>
                                         <div className='mb-2'>Кроссовки</div>
                                         <div className='mb-2'>Тапки</div>
                                         <div className='mb-2'>Туфли</div>
                                         <div className='mb-2'>Уход за обувью</div>
                                         <div className='mb-2 weight'>Смотреть все</div>
                                     </div>
                                     <div>
                                         <div className='name-3'>Аксесуари</div>
                                         <div className='mb-2'>Бижутерия</div>
                                         <div className='mb-2'>Часи</div>
                                         <div className='mb-2'>Кошельки</div>
                                         <div className='mb-2'>Косметика</div>
                                         <div className='mb-2'>Маски</div>
                                         <div className='mb-2'>Очки</div>
                                         <div className='mb-2'>Парасолі</div>
                                         <div className='mb-2'>Плавальні аксесуари</div>

                                     </div>
                                     <div>
                                         <div className="mb-2">Ремни</div>
                                         <div className="mb-2">Перчатки</div>
                                         <div className="mb-2">Рюказаки</div>
                                         <div className="mb-2">Сумочки</div>
                                         <div className="mb-2">Чехли</div>
                                         <div className="mb-2">Шляпи та шапки</div>
                                         <div className="mb-2">Шарфи та платки</div>
                                         <div className='mb-2 weight'>Смотреть все</div>
                                     </div>
                                 </div>
                         </div></NavLink>
                     </NavLink>
                </div>
            </div>
            </div>


        </div>
    )
}
export default Header;