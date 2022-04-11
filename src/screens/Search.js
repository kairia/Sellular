import React from "react";
import { Platform, Text, Image, StyleSheet,View,ImageBackground } from "react-native";
import { Box,useColorMode } from "native-base";
import { Svg, Path } from "react-native-svg";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useFonts } from 'expo-font';
import image from "../images/BG_Daysky.jpg";
import image2 from "../images/BG_Nightsky.jpg";
import SB from "../images/SB.png";
import BBG from "../images/Boxes.png";


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
    Platform.OS == 'ios' ?
    <Box bg="white" width="100%" height="15%">
    <Text
      style={{
        fontFamily: fontsLoaded ? 'Contrail One' : 'Roboto',
        fontSize: 48,
        top: "40%",
        left: "5%"
      }}>Search</Text>
    <MaterialCommunityIcons
      name={'menu'}
      size={24}
      onPress={() => navigation.openDrawer()}
      style={{ marginLeft: "87%" }} />
  </Box>:
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
    <ImageBackground source={colorMode == "light"?image:image2} imageStyle={{overflow:'hidden', borderBottomLeftRadius:25}} style={{overflow:'hidden',height:'85%',justifyContent:"center",  resizeMode: 'cover',top:0}}>
     <View style={{borderBottomLeftRadius:25,overflow:'hidden',marginBottom:'34%',height:'100%',justifyContent:"center",  resizeMode: 'cover',top:0}}>
     <Image width='90%' source={BBG} style={{position:'absolute',alignSelf:'center',opacity:colorMode == "light" ?1:0.3}}></Image>
     </View>
     <Image width='90%' source={SB} style={{position:'absolute',alignSelf:'center',bottom:'30%'}}></Image>
    </ImageBackground>

      </View></>
);
}

export default SearchScreen