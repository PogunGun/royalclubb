const initialState = {
    items:{},
    totalPrice:0,
    totalCount:0,
    currentElem:null,
};
const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};

const cart =(state=initialState,action)=>{

    if (action.type==='ADD_CART_TO_CART'){
        const currentPizzaItems = !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id].items, action.payload];

        const newItems = {
            ...state.items,
            [action.payload.id]: {
                items: currentPizzaItems,
                totalPrice: getTotalPrice(currentPizzaItems),
            },
        };

        const totalCount = getTotalSum(newItems, 'items.length');
        const totalPrice = getTotalSum(newItems, 'totalPrice');

        return {
            ...state,
            items: newItems,
            totalCount,
            totalPrice,
        };

}
    if(action.type==='CLEAR_ELEM'){
        return {
            ...state,
            items: {},
            totalPrice:0,
            totalCount:0,
        }
    }
    if (action.type==='REMOVE_CART_ITEM'){
        const newItems = {
            ...state.items,
        };
        const currentTotalPrice = newItems[action.payload].totalPrice;
        const currentTotalCount = newItems[action.payload].items.length;
        delete newItems[action.payload];
        return {
            ...state,
            items: newItems,
            totalPrice: state.totalPrice - currentTotalPrice,
            totalCount: state.totalCount - currentTotalCount,
        };
    }
    if (action.type==='PLUS_CART_ITEM'){
        const newObjItems = [
            ...state.items[action.payload].items,
            state.items[action.payload].items[0],
        ];
        const newItems = {
            ...state.items,
            [action.payload]: {
                items: newObjItems,
                totalPrice: getTotalPrice(newObjItems),
            },
        };

        const totalCount = getTotalSum(newItems, 'items.length');
        const totalPrice = getTotalSum(newItems, 'totalPrice');

        return {
            ...state,
            items: newItems,
            totalCount,
            totalPrice,
        };
    }
    if (action.type==='MINUS_CART_ITEM')  {
        const oldItems = state.items[action.payload].items;
        const newObjItems =
            oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
        const newItems = {
            ...state.items,
            [action.payload]: {
                items: newObjItems,
                totalPrice: getTotalPrice(newObjItems),
            },
        };

        const totalCount = getTotalSum(newItems, 'items.length');
        const totalPrice = getTotalSum(newItems, 'totalPrice');

        return {
            ...state,
            items: newItems,
            totalCount,
            totalPrice,
        };
    }
    if (action.type==='ADD_CARD_BLOCK'){
        const currentElemb=state.currentElem=action.payload;

        return {
            currentElemb,
        }

    }
    return state;
}




export default cart;