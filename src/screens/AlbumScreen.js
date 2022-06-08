import React, { useEffect, useState } from 'react';
import { Box,Progress,useColorMode } from "native-base";
import { ImageBackground,Text,Platform,View,Image,Animated,StyleSheet,Dimensions } from "react-native";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get("screen");

var headerBgColor =["#fff","#000" ];
var headerTitleColor=["#121212",'#8281D7'];

var fontsLoaded = true;

var lg=[
  require("../images/Linear_Gradient_White.png"),
  require("../images/Linear_Gradient_DB.png"),

]




const AlbumScreen = ({ navigation }) => {

  const { colorMode } = useColorMode();
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


  return (
    <>
    <Box bg={colorMode == "light"?headerBgColor[0]:headerBgColor[1]} width="100%" height="12%" style={{shadowColor: '#171717',shadowOffset:{width: -2, height: 4},shadowOpacity: 0.2,shadowRadius: 3,justifyContent:'center',flexDirection:'column'}}>
      <Text
        style={{
          fontFamily: fontsLoaded ? 'Contrail One' : 'Roboto',
          fontSize: 48,
          top: "28%",
          left: "7%",
          color:colorMode == "light"?headerTitleColor[0]:headerTitleColor[1],
        }}>Home</Text>
      <MaterialCommunityIcons
        name={'menu'}
        size={24}
        onPress={() => navigation.openDrawer()}
        style={{ marginLeft: "86%",bottom:'35%' }}
        color={colorMode == "light"?'#121212':'#fff'} />
    </Box>
    <View backgroundColor={"#F3FAFF"} >
        <AlbumList
          style={{ width: "100%" }}
          list={albumData.albumList}
          navigation={navigation} />

      </View>
     

      </>

  );
};


const styles = StyleSheet.create({
    
  square:{
    position:'absolute',
    alignSelf:'center',
    bottom:height*0.5-100,
    width:width*0.2,
    height:height*0.2,
    backgroundColor:'#3E5EB0',

  }








})


export default AlbumScreen;
