import * as actiontypes from './shoppingTypes';




export const addToCart = (itemID)=>{
    console.log('adding...');
    return{
        type:actiontypes.ADD_TO_CART,
        payload:{
            id:itemID
        },
    };
};
export const removeFromCart = (itemID)=>{
    console.log('removing...');
    return{
         type:actiontypes.REMOVE_FROM_CART,
         payload:{
            id:itemID
          },
    };
};

export const adjustQty = (itemID,value)=>{
    return{
        type:actiontypes.ADJUST_QTY,
        payload:{
            id:itemID,
            qty:value
        },
    };
};
export const loadCurrentItem = (item)=>{
    return{
        type:actiontypes.LOAD_CURRENT_ITEM,
        payload:item
    };
};