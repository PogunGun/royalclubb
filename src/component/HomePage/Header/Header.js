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
        axios.get(`https://pogungun.github.io/royalclubb/db.json`)
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
                                placeholder="Search..."
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
                        <span className='menu-g '>Novelty</span>
                    </NavLink>
                    <NavLink to='/shop' className='display-n'><span className='menu'>Clothing</span>
                        <NavLink to='/shop'>
                            <div className="descr">
                               <div className='name-3'>Categories</div>
                                <div className='popup'>
                                    <div>
                                            <div className='mb-2'>Blouses</div>
                                        <div className='mb-2'>Jeans</div>
                                        <div className='mb-2'>Overalls</div>
                                        <div className='mb-2'>Sets</div>
                                        <div className='mb-2'>Sweatshirts</div>
                                        <div className='mb-2'>Swimwear</div>
                                        <div className='mb-2'>Jackets and coats</div>
                                        <div className='mb-2'>Jackets and jellies</div>
                                    </div>
                                    <div>
                                        <div className="mb-2">Shirts</div>
                                        <div className="mb-2">Dresses</div>
                                        <div className="mb-2">Shorts</div>
                                        <div className="mb-2">Pants</div>
                                        <div className="mb-2">Skirts</div>
                                        <div className="mb-2">T-shirts</div>
                                        <div className='mb-2 weight'>Watch everything</div>
                                        <div className="mb-2"></div>
                                    </div>
                                </div>
                            </div></NavLink>
                    </NavLink>

                    <NavLink to='/shop' className='display-n'><span className='menu'>Footwear</span>
                        <NavLink to='/shop'>
                            <div className="descr">
                                <div className='name-3'>Categories</div>
                                <div className='popup'>
                                    <div>
                                        <div className='mb-2'>Outdoor</div>
                                        <div className='mb-2'>Ballet flats</div>
                                        <div className='mb-2'>Boots</div>
                                        <div className='mb-2'>Sneakers</div>
                                        <div className='mb-2'>Slippers</div>
                                        <div className='mb-2'>
                                            Shoes</div>
                                        <div className='mb-2'>Shoe care</div>
                                        <div className='mb-2 weight'>Watch everything</div>
                                    </div>
                                </div>
                            </div></NavLink>

                    </NavLink>
                    <NavLink to='/shop' className='display-n'><span className='menu'>Accessories</span>
                        <NavLink to='/shop'>
                            <div className="descr">
                                <div className='name-3'>Categories</div>
                                <div className='popup'>
                                    <div>
                                        <div className='mb-2'>Jewelry</div>
                                        <div className='mb-2'>Hours</div>
                                        <div className='mb-2'>Wallets</div>
                                        <div className='mb-2'>Makeup</div>
                                        <div className='mb-2'>Masks</div>
                                        <div className='mb-2'>Points</div>
                                        <div className='mb-2'>Umbrellas</div>
                                        <div className='mb-2'>Swimming accessories</div>
                                    </div>
                                    <div>
                                        <div className="mb-2">Belts</div>
                                        <div className="mb-2">
                                            Gloves</div>
                                        <div className="mb-2">Backpacks</div>
                                        <div className="mb-2">Handbags</div>
                                        <div className="mb-2">Slippers</div>
                                        <div className="mb-2">Hats and caps</div>
                                        <div className="mb-2">Scarves and shawls</div>
                                        <div className='mb-2 weight'>Watch everything</div>
                                    </div>
                                </div>
                            </div></NavLink>

                    </NavLink>
                     <NavLink to='/shop' className='display-n'><span className='menu'>Sport</span>
                         <NavLink to='/shop'>
                             <div className="descr">
                                 <div className='popup-2'>
                                     <div>
                                         <div className='name-3'>Clothes</div>
                                         <div className='mb-2'>Blouses</div>
                                         <div className='mb-2'>Jeans</div>
                                         <div className='mb-2'>Overalls</div>
                                         <div className='mb-2'>Sets</div>
                                         <div className='mb-2'>Sweatshirts</div>
                                         <div className='mb-2'>Swimwear</div>
                                         <div className='mb-2'>Jackets and coats</div>
                                         <div className='mb-2'>Jackets and jellies</div>
                                         <div className='mb-2 weight'>Watch everything</div>
                                     </div>
                                     <div>
                                         <div className='name-3'>Shoes</div>
                                         <div className='mb-2'>Outdoor</div>
                                         <div className='mb-2'>Ballet flats</div>
                                         <div className='mb-2'>Boots</div>
                                         <div className='mb-2'>Кеди</div>
                                         <div className='mb-2'>Кроссовки</div>
                                         <div className='mb-2'>Тапки</div>
                                         <div className='mb-2'>Туфли</div>
                                         <div className='mb-2'>Уход за обувью</div>
                                         <div className='mb-2 weight'>Смотреть все</div>
                                     </div>
                                     <div>
                                         <div className='mb-2'>Jewelry</div>
                                         <div className='mb-2'>Hours</div>
                                         <div className='mb-2'>Wallets</div>
                                         <div className='mb-2'>Makeup</div>
                                         <div className='mb-2'>Masks</div>
                                         <div className='mb-2'>Points</div>
                                         <div className='mb-2'>Umbrellas</div>
                                         <div className='mb-2'>Swimming accessories</div>

                                     </div>
                                     <div>
                                         <div className="mb-2">Belts</div>
                                         <div className="mb-2">
                                             Gloves</div>
                                         <div className="mb-2">Backpacks</div>
                                         <div className="mb-2">Handbags</div>
                                         <div className="mb-2">Slippers</div>
                                         <div className="mb-2">Hats and caps</div>
                                         <div className="mb-2">Scarves and shawls</div>
                                         <div className='mb-2 weight'>Watch everything</div>
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