import React from "react";
import './Footer.css'
import nova from '../../../img/Footer/foter-1.svg'
import visa from '../../../img/Footer/visa.svg'
import master from '../../../img/Footer/master.svg'
import payU from '../../../img/Footer/payU.svg'
import google from '../../../img/Footer/google-play.png'
import apple from '../../../img/Footer/png-transparent-app-store-google-play-iphone-electronics-text-logo-thumbnail.png'
import hua from '../../../img/Footer/huawei-appgalley-marzo-00.jpg'
import youtube from '../../../img/Footer/download.png'
import insta from '../../../img/Footer/instagram_black_logo_icon_147122.png'
import facebook from '../../../img/Footer/1024px-Facebook_icon_(black).svg.png'
import logo from '../../../img/Footer/2341.png'
import {NavLink} from "react-router-dom";
const Footer = () =>{
    return(
        <div className='footer'>
            <div>
                <div className='black-line'>
                <img src={logo} alt="" className='logo'/>
                 <span className='color-2 line-name'>Royal Club</span>
                </div>
            </div>
            <div className="container-footer">
                <div className='footer-block'>
                    <div className='footer-block-margin'>
                        <div className='footer-block-grid'>
                            <div className="footer-block-grid-card">
                                <div className='footer-name'>ДОПОМОГА ТА ІНФОРМАЦІЯ</div>
                                <div className='footer-element'>Про RoyalClub.ua</div>
                                <div className='footer-element'>Правила магазину RoyalClub.ua</div>
                                <div className='footer-element'>Правила ANSWEARClub</div>
                                <div className='footer-element' >Що потрібно знати, купуючи товар дорожче 100 євро?</div>
                                <div className='footer-element'>Повернення і рекламація</div>
                                <div className='footer-element'>Поширені запитання</div>
                                <div className='footer-element'>Контакт</div>
                                <div className='footer-element'>Корпоративна соціальна відповідальність</div>
                                <div className='footer-element' >Блог RoyalClub</div>
                                <div className='footer-element'>Політика конфіденційності</div>
                            </div>
                            <div className="footer-block-grid-card border-line">
                                <div className='footer-name'>ДОСТАВКА</div>
                                <div className='footer-element'>У відділення Нова Пошта</div>
                                <div className='footer-element'>
                                    <NavLink to='/royalclubb'>  <img src={nova} alt=""/></NavLink>
                                </div>
                            </div>
                            <div className="footer-block-grid-card border-line">
                                <div className='footer-name'>ОПЛАТА</div>
                                <div className='footer-element'>Банківською карткою</div>
                                <NavLink to='/royalclubb'>  <div className='footer-element'>
                                    <img src={visa} alt="" className='mini-margin'/>
                                    <img src={master} alt="" className='mini-margin'/>
                                    <img src={payU} alt="" className='mini-margin'/>
                                </div>  </NavLink>
                            </div>
                            <div className="footer-block-grid-card border-line">
                                <div className='footer-name'>МОБІЛЬНИЙ ДОДАТОК</div>
                                <NavLink to='/royalclubb'> <div className='footer-element '>
                                    <img src={google} alt="" className='mini'/>
                                </div>
                                <div className='footer-element '>
                                    <img src={apple} alt="" className='mini'/>
                                </div>
                                <div className='footer-element '>
                                    <img src={hua} alt=""className='mini'/>
                                </div>
                                </NavLink>
                                <div>
                                    <div>СТЕЖТЕ ЗА НАМИ:</div>
                                    <div className='footer-element'>
                                        <NavLink to='/royalclubb'>
                                        <img src={facebook} alt="" className='min-element'/>
                                        <img src={insta} alt="" className='min-element'/>
                                        <img src={youtube} alt="" className='min-element'/>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-block-after'>
                    <div className="footer-block-after-left">
                        <span>Політика Конфіденційності</span>
                        <span>Правила</span>
                        <span>Дані Компанії</span>
                        <span>Усі Cookies</span>
                    </div>
                    <div className="footer-block-after-right">
                        <span>WEARETHEANSWEAR IN::</span>
                        <span>BG</span>
                        <span>CY</span>
                        <span>CZ</span>
                        <span>GR</span>
                        <span>HR</span>
                        <span>HU</span>
                        <span>PL</span>
                        <span>RO</span>
                        <span>SK</span>
                        <span>UA</span>

                    </div>
                    <div className='copyRight'>Copyright 2010-2022 Answear.com S.A.</div>
                </div>
            </div>
        </div>
    )
}
export default Footer;