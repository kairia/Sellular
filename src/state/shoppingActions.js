import * as actionTypes from './shoppingTypes';




export const addToCart = (itemID)=>{
    console.log('adding...');
    return{
        type:actionTypes.ADD_TO_CART,
        payload:{
            id:itemID
        },
    };
};
export const removeFromCart = (itemID)=>{
    console.log('removing...');
    return{
         type:actionTypes.REMOVE_FROM_CART,
         payload:{
            id:itemID
          },
    };
};

export const adjustQty = (itemID,value)=>{
    return{
        type:actionTypes.ADJUST_QTY,
        payload:{
            id:itemID,
            qty:value
        },
    };
};
export const loadCurrentItem = (item)=>{
    return{
        type:actionTypes.LOAD_CURRENT_ITEM,
        payload:item
    };
};