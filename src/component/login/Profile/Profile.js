import React from "react";
import Header from "../../HomePage/Header/Header";
import Footer from "../../HomePage/Footer/Footer";
import './Profile.css'
import chat from '../../../img/Login/Profile/3193015.png'
import like from '../../../img/Login/Profile/like.png'
import  user from '../../../img/Login/Profile/user (4).png'
import list from '../../../img/Login/Profile/to-do-list.png'
import logoP from '../../../img/Login/Profile/dry-cleaning-with-perchlorenthylene.png'
import purse from '../../../img/Login/Profile/purse.png'
import logout from '../../../img/Login/Profile/logout.png'
import AfterHead from "../../HomePage/Header/AfterHead";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeUser} from "../../../redux/slice/UserSlice"
import {useNavigate} from "react-router";
const Profile=()=>{
    const dispatch =useDispatch();

    const navigate = useNavigate();

    const  exitUser=()=>{
      dispatch(removeUser());
        navigate('/royalclubb')
    }

    return(
        <div>
            <AfterHead/>
            <Header/>

            <div className='account'>
                <div className='border-a'>
                <div className='account-block'>
                    <div className='border-bb'>
                    <NavLink to='/account' className='account-block-el-os'>
                        <img src={user} alt="" className='account-img'/>
                        <div className='mar-b'>
                            {localStorage.getItem("name")}
                            <div className='border-b'>{localStorage.getItem("email")}</div>
                        </div>
                    </NavLink>
                    </div>

                    <NavLink to='/my-vib' className='account-block-el mar-t'>
                        <img src={like} alt="" className='account-img'/>
                        <div>Мої замовлення</div>
                    </NavLink>
                    <NavLink to='/cart' activeClassName='account-block-el-active'className='account-block-el'>
                        <img src={list} alt="" className='account-img'/>
                        <div>Список бажань</div>
                    </NavLink>
                    <NavLink to=''activeClassName='account-block-el-active' className='account-block-el'>
                        <img src={purse} alt="" className='account-img'/>
                       <div> Мій гаманець</div>
                    </NavLink>
                    <NavLink to='' activeClassName='account-block-el-active'className='account-block-el'>
                        <img src={logoP} alt=""className='account-img'/>
                       <div>Підписка Premium</div>
                    </NavLink>
                    <div className='border-bb'>
                    <NavLink to=''activeClassName='account-block-el-active' className='account-block-el'>
                        <img src={chat} alt=""className='account-img'/>
                      <div> Мої відгуки</div>
                    </NavLink>

                    </div>
                    <div className='account-block-el' onClick={exitUser}>
                        <img src={logout} alt=""className='account-img'/>
                        <div>Вийти</div>
                    </div>


                </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Profile