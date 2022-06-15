

//export const fetchElement=()=>(dispatch)=>{

 //   axios.get('http://localhost:3000/db.json')
    //    .then(({data})=>{
    //        dispatch(addElement(data.pizzas));

//
       // }) ;
//};

export const addElement=(items)=>({
    type:'ADD_ELEMENT',
    payload:items,
});
export const addElement2=(items)=>({
    type:'ADD_ELEMENT_2',
    payload:items,
});
export const addElement3=(items)=>({
    type:'ADD_ELEMENT_3',
    payload:items,
});
export const addElement4=(items)=>({
    type:'ADD_ELEMENT_4',
    payload:items,
});