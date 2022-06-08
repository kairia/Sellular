import React,{useEffect,useState} from "react";
import { Platform, Text, Image, StyleSheet,View,TouchableOpacity } from "react-native";
import { Box,Button,useColorMode } from "native-base";
import { Svg, Path } from "react-native-svg";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import animatedMessages from './AnimatedMessages.js';
import CartItems from "../components/CartList";



import { useFonts } from 'expo-font';
import { connect } from 'react-redux';
import { addToCart } from '../state/shoppingActions';
import { removeFromCart } from "../state/shoppingActions.js";

var fontsLoaded = true;
var headerBgColor =["#fff","#000" ];
var headerTitleColor=["#121212",'#8281D7'];

var ad=[
  require('../images/BluePhone.jpg'),
  require('../images/Pentax.jpg'),
  require('../images/Tesla.jpg'),
  require('../images/img_book_ysl.png'),
  require('../images/img_book_tbos.png'),
  require('../images/img_book_stitchedup.png'),
];


const Cart = ({ navigation,cart }) => {
  const { colorMode } = useColorMode();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
    
    useEffect (()=>{
       let items =0;
      let price =0;
      cart.forEach(item => {
        items += item.qty;
        price += item.qty*item.price;
      });
      setTotalItems(items)
      setTotalPrice(price)
    },[cart,totalPrice,totalItems,setTotalItems,setTotalPrice])
     


    



    state = {
        fontsLoaded: false,
      };
      
    
      let [fontsLoaded] = useFonts({
        'Contrail One': require('../../assets/fonts/ContrailOne-Regular.ttf'),
        'Alegreya Sans SC': require('../../assets/fonts/AlegreyaSansSC-Regular.ttf')
      })
    
      if(!fontsLoaded) {
        return null;
      }
    
    console.log(cart)


return( 
   
  <><View bg={colorMode == "light" ? headerBgColor[0] : headerBgColor[1]} width="100%" height="13%" style={{backgroundColor: colorMode == "light" ? headerBgColor[0] : headerBgColor[1], flex: 1,justifyContent:'space-between',flexDirection:'row'}}>
  <Text
     style={{
       color: colorMode == "light" ? headerTitleColor[0] : headerTitleColor[1],
       fontFamily: fontsLoaded ? 'Contrail One' : 'Roboto',
       fontSize: 48,
       alignSelf:'center',
       marginLeft:'5%',
       marginTop:'6%'
     }}>Cart</Text>
   <MaterialCommunityIcons
     color={colorMode == "light" ? '#000' : '#fff'}
     name={'menu'}
     size={24}
     onPress={() => navigation.openDrawer()}
     style={{ alignSelf:'center',marginRight:'8%' }} />
 </View>
    <View style={{ width:'100%',height:'100%',backgroundColor: colorMode == "light" ? "#EEF7FF" : "#050B21", flex: 6, justifyContent: 'center', paddingTop: '30%',alignItems:'center' }}>
       <View style={{ backgroundColor: 'transparent',borderWidth:3,borderRadius:28, width:'95%',height:'100%',marginTop:'-45%',paddingBottom:20,paddingLeft:20,borderColor:colorMode == "light" ? '#000' : 'rgba(255,255,255,0.5)', justifyContent: 'center',alignItems:'center' }}>
        <View style={{flex:1,width:'100%',height:'100%',alignItems:'flex-start',justifyContent:'space-around',padding:20}}>  
         <Text style={{fontSize:28,fontWeight:'700',color:colorMode == "light" ? '#000' : '#fff'}}>Checkout</Text>
         <Text style={{fontSize:18,fontWeight:'800',color:colorMode == "light" ? '#000' : '#fff'}}> TOTAL:({totalItems} items) {totalPrice}$</Text>
        </View>
        <View style={{flex:5,width:'100%',marginBottom:'-40%'}}>
          {cart.map((item)=>(
            <CartItems key={item.id} itemData={item}></CartItems>
        ))}
        </View>
        



       </View>
        
        





      </View>
      
      
      </>
);
}

const mapStateToProps = (state) => {
  return{
    cart:state.shop.cart,
   
  };}

 

  

export default connect(mapStateToProps)(Cart);