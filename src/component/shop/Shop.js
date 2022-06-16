import React, {useState} from "react";
import './Shop.css'
import AfterHead from "../HomePage/Header/AfterHead";
import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/Footer/Footer";
import {Link} from "react-router-dom";
import Cart from "./cart/Cart";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {addElement} from '../../redux/action/shopEl/shopEl'
import {addElemtoCart} from "../../redux/action/shopEl/cart";
import CartInfo from "../cart/cart/CartBlock/CartInfo/CartInfo";

const Shop=()=>{

    const list = [
        {name:'From cheap to expensive',sort:'price'},
        {name:'From expensive to cheap',sort:'price&order=desc'},
        {name:'From the popular',sort:'rating'},
        {name:'Alphabetically (AZ)',sort:'name'},
    ];
    const list2 = [
        {name:'ALL',sort:''},
        {name:'ADIDAS',sort:'ADIDAS'},
        {name:'NIKE',sort:'NIKE'},
        {name:'PUMA',sort:'PUMA'},
        {name:'Converse',sort:'Converse'},
    ];
    const list3 = [
        {name:'38'},
        {name:'39'},
        {name:'40'},
        {name:'41'},
        {name:'42'},
        {name:'43'},
    ];

    const itemRef=React.useRef();
    const itemRef1=React.useRef();
    const itemRef2=React.useRef();
    const itemRef3=React.useRef();
    const [selected,setSelected]=useState(list[1])
    const [selected2,setSelected2]=useState(0);
    const [selected3,setSelected3]=useState(0);
    const [selected4,setSelected4]=useState(0);
    const [pop,setPop]=useState(false);
    const [raz,setRaz]=useState(false);
    const [brand,setBrand]=useState(false);
    const [cost,SetCost]=useState(false);




    const handleOutside=(e)=>{
        if (!e.path.includes(itemRef.current)){
            setPop(false)
        }else if(e.path.includes(itemRef.current)){
            setPop(true)
        }
        if (!e.path.includes(itemRef1.current)){

            setRaz(false)
        }else if(e.path.includes(itemRef1.current)){
            setRaz(true)
        }
        if (!e.path.includes(itemRef2.current)){

            setBrand(false)
        }else if(e.path.includes(itemRef2.current)){
            setBrand(true)
        }
        if (!e.path.includes(itemRef3.current)){

            SetCost(false)
        }else if(e.path.includes(itemRef3.current)){
            SetCost(true)
        }
    }
    const dispatch=useDispatch();
    const state=useSelector((state)=> {
        return {
            items:state.element.items,

        }

    });
    const addElemCart=(obj)=>{
        dispatch(addElemtoCart(obj))
    }
    const onClickItem =(i)=>{
        setSelected(i)
    }
    const onClickItem2 =(i)=>{
        setSelected2(i)
    }
    const onClickItem3 = (i) => {
        setSelected3(i)
    }
    const onClickItem4 = (i) => {
        setSelected4(i)
    }
      //  ?&sortBy=${selected.sort}
    React.useEffect(()=>{
        axios.get(`https://62a5ce9a430ba53411ccdc39.mockapi.io/pizzas?search=${selected2.sort==undefined?(''):(selected2.sort)}?&sortBy=${selected.sort}`)
            .then(({data})=>{
                dispatch(addElement(data));
            },);
        window.scrollBy(0, -10000)
        document.body.addEventListener('click',handleOutside)
    },[selected,selected2])

    return(
        <div>
            <AfterHead/>
            <div className='sticky'><Header/>

            <div >
                <div className='block-change'>
                    <div className='max-mar'>
                        <div className='grid-change'>
                            <div className='border-bottom'>
                                <div className='block-grid-chang' ref={itemRef}>
                                    <div className='change-text'>Sort by: <span className='bold-b jojo'>{selected.name}</span>

                                    </div>
                                    <div className="triangle-down"></div>
                                </div>
                                {pop? (<div className='popup-3'>
                                    {
                                        list.map((obj,i)=>(
                                            <div className='popup-3-b'
                                                 key={i}
                                                 onClick={()=>onClickItem(obj)}
                                            >{obj.name}</div>
                                        ))
                                    }
                                </div>):(null)}

                            </div>
                            <div>
                                <div className='block-grid-chang'ref={itemRef1}>
                                    <div className='change-text'>Size:  <span className='bold-b'>{selected3.name}</span>
                                        <div  className='visibilite'>1</div></div>

                                    <div className="triangle-down"></div>
                                </div>
                                {raz? (<div className='popup-3'>
                                    {
                                        list3.map((obj,i)=>(
                                            <div className='popup-3-b'
                                                 key={i}
                                                 onClick={()=>onClickItem3(obj)}
                                            >{obj.name}</div>
                                        ))
                                    }
                                </div>):(null)}
                            </div>
                            <div>
                                <div className='block-grid-chang'ref={itemRef2}>
                                    <div className='change-text'>Brand:  <span className='bold-b'>{selected2.name}</span>
                                        <div className='visibilite'>1</div></div>
                                    <div className="triangle-down"></div>

                                </div>
                                {brand? (<div className='popup-3'>
                                    {
                                        list2.map((obj,i)=>(
                                            <div className='popup-3-b'
                                                 key={i}
                                                 onClick={()=>onClickItem2(obj)}
                                            >{obj.name}</div>
                                        ))
                                    }
                                </div>):(null)}
                            </div>

                        </div>
                        </div>
                        <div className='pd'></div>
                    </div>
                </div>
            </div>
                <div className='block-cart-1'>
                    {
                        state.items.map(obj=><Cart onAddPizza={addElemCart} key={obj.id} {...obj}/>)


                    }
                </div>



           <Footer/>
        </div>
    )

}

export default Shop