import React from "react";
import './Block-5.css'
import block5 from '../../../img/Block-5/1.png'
import  grid1 from '../../../img/Block-5/2-1 (1).svg'
import  grid2 from '../../../img/Block-5/2-1 (2).svg'
import  grid3 from '../../../img/Block-5/2-1 (3).svg'
import {NavLink} from "react-router-dom";
const Block5 = ()=>{
    return(
        <div>
            <div className="block5">
                <div className='container'>
                    <div className='block5-panel'>
                          <div className="block-5-left">
                              <div className='container-block'>
                                  <div className='brand-name'>SPORT</div>
                                  <div>Harden your spirit</div>
                                  <NavLink to='/shop'><div className='button-1'>Look</div></NavLink>
                              </div>
                          </div>
                        <div className="block-5-right">
                            <img src={block5} alt="" className='banner'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block5">
                <div className="container">
                    <div className="block5-grid">
                        <div className='block5-grid-card'>
                            <img src={grid1} alt=""/>
                            <div className='card-name'>Free shipping</div>
                            <div>From UAH 1,300. Delivery from Poland.</div>
                        </div>
                        <div className='block5-grid-card'>
                            <img src={grid2} alt=""/>
                            <div className='card-name'>Dispatch within 24 hours</div>
                            <div>Only original goods.</div>
                        </div>
                        <div className='block5-grid-card'>
                            <img src={grid3} alt=""/>
                            <div className='card-name'>Save with Royal Club</div>
                            <div>Sometimes even -50%.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Block5;