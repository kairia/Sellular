import React from "react";
import { Platform, Text, Image, StyleSheet,View,TouchableOpacity } from "react-native";
import { Box,useColorMode } from "native-base";
import { Svg, Path } from "react-native-svg";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useFonts } from 'expo-font';
import { removeFromCart } from "../state/shoppingActions";

import { connect } from "react-redux";

var ad=[
  require('../images/BluePhone.jpg'),
  require('../images/Pentax.jpg'),
  require('../images/Tesla.jpg'),
  require('../images/img_book_ysl.png'),
  require('../images/img_book_tbos.png'),
  require('../images/img_book_stitchedup.png'),
];

const CartItem =({itemData}) =>{
  const { colorMode } = useColorMode();
  return(
    <View style={{position:'relative',width:'90%',height:'20%',borderColor:'#646464',borderWidth:3,borderRadius:28,margin:10,backgroundColor:colorMode == "light" ?'rgba(255,255,255,0.8)':'rgba(255,255,255,0.3)',alignItems:'center',justifyContent:'space-between',padding:15,flexDirection:'row'}} >
            
            <View style={{flexDirection:'row'}}><Image style={{height:50,width:50,borderRadius:10}} source={ad[itemData.image]}></Image>
            <View style={{marginLeft:10}}>
              <Text style={{fontSize:16, fontWeight:'700',color:colorMode == "light" ? '#000' : '#fff'}}>{itemData.title}</Text>
              <Text style={{fontSize:16,color:colorMode == "light" ? '#000' : '#fff'}}>{itemData.artist}</Text>
              
            
            </View></View>
            <Text style={{fontSize:16, fontWeight:'700',color:colorMode == "light" ? '#000' : '#fff'}}>{itemData.qty}</Text>
            <TouchableOpacity 
            onPress={()=>removeFromCart(itemData.id)} 
            style={{justifyContent:'center',alignItems:'center',height:50,width:50,borderRadius:10,backgroundColor:"#ff4255"}}>
              <MaterialCommunityIcons name={'trash-can-outline'}
              size={24}color={'#fff'}/>
              </TouchableOpacity>
          </View>

  )



}

const mapDispatchToProps = (dispatch) => {
  return{
    removeFromCart:(id)=> dispatch(removeFromCart(id)),
  }
}

export default connect(null,mapDispatchToProps)(CartItem);