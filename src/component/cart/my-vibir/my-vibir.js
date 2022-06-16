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
                            <div className='block-name-b'>My choice</div>
                            <div className='mt-ppgg'>What is the My Choice tab?</div>
                            <div className='mt-ppg'>-Adding a product to the "My Choice" tab does not mean it
                                reservation.
                            </div>
                            <div className='mt-ppg'>-The capacity of the "My Choice" tab is saved automatically.
                            </div>
                            <div className='mt-ppg'>-Goods that are sold are marked "Product not available". </div>
                            <div className = 'mt-ppg'> - For Clients without an Account, the capacity of the "My Choice" tab
                                persists for a month.
                            </div>
                            <div className='mt-ppg'>-For Customers with an Account, the capacity of the "My Choice" tab
                                persists until the Customer removes the goods themselves or they will
                                sold.
                            </div>

                        </div>
                        <div className='grey-block'>
                            <div className='mt-ppgg'>You have no items in the "My Choice" tab</div>
                            <div className='mt-ppg'>You can add the product to the "My choice" tab with the help</div>
                            <img src={heart} alt="" className='user'/>
                            <div className='mt-ppgg'>Did you create an Account?</div>
                            <div className='mt-ppgf'>
                                Log in to your Account to sync capacity
                                "My choice" bookmarks on different devices
                            </div>
                            <NavLink to='/register' className='regg-button2'>
                                Log in
                            </NavLink>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}
export default MyVibir