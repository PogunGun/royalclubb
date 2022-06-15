
export const    addElemtoCart=(elemObj)=>({
    type:'ADD_CART_TO_CART',
    payload:elemObj,
})
export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
});
export const plusCartItem = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload: id,
});

export const minusCartItem = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id,
});
export const setCurrentCart = (elemObj)=>({
    type:'ADD_CARD_BLOCK',
    payload:elemObj,
})