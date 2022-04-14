import React from "react";
import { Platform, Text, Image, StyleSheet,View,ImageBackground } from "react-native";
import { Box,useColorMode } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useFonts } from 'expo-font';
import BBG from "../images/Boxes.png";

var bg=[
  require("../images/BG_Daysky.jpg"),
  require("../images/BG_Nightsky.jpg"),

]

var sb=[
  require("../images/SB.png"),
  require("../images/SBD.png"),

]

var fontsLoaded = true;
var headerBgColor =["#fff","#000" ];
var headerTitleColor=["#121212",'#8281D7'];

const SearchScreen = ({ navigation }) => {
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
    



return( 
  <><Box bg={colorMode == "light" ? headerBgColor[0] : headerBgColor[1]} width="100%" height="17%">
      <Text
        style={{
          color: colorMode == "light" ? headerTitleColor[0] : headerTitleColor[1],
          fontFamily: fontsLoaded ? 'Contrail One' : 'Roboto',
          fontSize: 48,
          top: "50%",
          left: "7%"
        }}>Search</Text>
      <MaterialCommunityIcons
        color={colorMode == "light" ? '#000' : '#fff'}
        name={'menu'}
        size={24}
        onPress={() => navigation.openDrawer()}
        style={{ marginLeft: "87%", marginTop: "5%" }} />
    </Box><View height='100%' width='100%' style={{ backgroundColor: colorMode == "light" ? "#EEF7FF" : "#050B21", flex: 1, justifyContent: 'flex-start', paddingBottom: '30%' }}>
    <ImageBackground source={colorMode == "light"?bg[0]:bg[1]} imageStyle={{overflow:'hidden', borderBottomLeftRadius:25}} style={{overflow:'hidden',height:'85%',justifyContent:"center",  resizeMode: 'cover',top:0}}>
     <View style={{borderBottomLeftRadius:25,overflow:'hidden',marginBottom:'34%',height:'100%',justifyContent:"center",  resizeMode: 'cover',top:0}}>
     <Image width='90%' source={BBG} style={{position:'absolute',alignSelf:'center',opacity:colorMode == "light" ?1:0.3}}></Image>
     </View>
     <Image width='90%' source={colorMode == "light"?sb[0]:sb[1]} style={{position:'absolute',alignSelf:'center',bottom:'30%'}}></Image>
    </ImageBackground>

      </View></>
);
}

export default SearchScreen