import { UPDATE_USERNAME } from '../actions/user';
import { combineReducers } from "redux";
import* as actionTypes from "./shoppingTypes";

const user  = (user = { username: ''}, action) => {
    switch (action.type) {
        case UPDATE_USERNAME:
            return { username: action.username }
        default:
            return user;
    }
}
const INITIAL_STATE = {
    products:[
        {   
            id:1,
            owner:"Kevin Baker",
            ownerID:"Kevin0941",
            title: "iPhone13Pro",
            artist: "Used",
            url: "https://www.figma.com/file/p3pwNKq797lg9fBUOy4W2H/app-course---book-app-(android)?node-id=0%3A1",
            image: "0",
            star:"null",
            price: 399,
            descriptions: "A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.",
            },
        {
                id:2,
               owner:"Ethan Stratos",
               ownerID:"Est666",
               title: "Pentax MX",
               artist: "Used",
               url: "https://www.figma.com/file/p3pwNKq797lg9fBUOy4W2H/app-course---book-app-(android)?node-id=0%3A1",
               image: "1",
               star:"null",
               price: 3499,
               descriptions: "A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.",
            },
         {  id:3,
               owner:"Elon Musket",
               ownerID:"RealElon",
               title: "Tesla Roadster",
               artist: "New",
               url: "https://www.figma.com/file/p3pwNKq797lg9fBUOy4W2H/app-course---book-app-(android)?node-id=0%3A1",
               image: "2",
               star:"null",
               price: 120000,
               descriptions: "A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.",
            } ,
    ], 
    cart : [],
    currentItem : null,
}



const shop = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:

            const item = state.products.find((prod)=> prod.id === action.payload.id);
            const inCart = state.cart.find((item) =>
             item.id === action.payload.id? true : false ) ;  
            console.log('added');
            return {
            ...state,
            cart:inCart ? state.cart.map((item)=>item.id === action.payload.id? {...item, qty : item.qty + 1}: item)
            :[...state.cart,{ ...item,qty:1}],
            };
            
        case actionTypes.REMOVE_FROM_CART:

            console.log('removed');
            return{
                ...state,
                cart:state.cart.filter((item) => item.id !== action.payload.id)           };

        case actionTypes.ADJUST_QTY:

            return{
                ...state,
                cart:state.cart.map((item)=>item.id===action.payload.id?{...item,qty:action.payload.qty}: item)

            };

        case actionTypes.LOAD_CURRENT_ITEM:

            return{
                ...state,
                currentItem:action.payload
            };
            
        default:
            return state;
    }


}

export default combineReducers({ user,shop  });