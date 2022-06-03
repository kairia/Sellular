import React from "react";
import { Platform, Text, Image, StyleSheet,View } from "react-native";
import { Box,useColorMode } from "native-base";
import { Svg, Path } from "react-native-svg";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useFonts } from 'expo-font';
import Mail from "../images/Mail.png";

var fontsLoaded = true;
var headerBgColor =["#fff","#000" ];
var headerTitleColor=["#121212",'#8281D7'];

const MessageScreen = ({ navigation }) => {
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
   
  <><View bg={colorMode == "light" ? headerBgColor[0] : headerBgColor[1]} width="100%" height="13%" style={{backgroundColor: colorMode == "light" ? headerBgColor[0] : headerBgColor[1], flex: 1,justifyContent:'space-between',flexDirection:'row'}}>
     <Text
        style={{
          color: colorMode == "light" ? headerTitleColor[0] : headerTitleColor[1],
          fontFamily: fontsLoaded ? 'Contrail One' : 'Roboto',
          fontSize: 48,
          alignSelf:'center',
          marginLeft:'5%',
          marginTop:'6%'
        }}>Inbox</Text>
      <MaterialCommunityIcons
        color={colorMode == "light" ? '#000' : '#fff'}
        name={'menu'}
        size={24}
        onPress={() => navigation.openDrawer()}
        style={{ alignSelf:'center',marginRight:'8%' }} />
    </View>
    <View height='100%' width='100%' style={{backgroundColor:colorMode == "light"?"#EEF7FF":"#050B21",flex:6,justifyContent:'center',paddingBottom:'30%'}}>
     
     <Image source={Mail} style={{tintColor:colorMode == "light"?'#121212':'#fff',alignSelf:'center'}}/>
     <Text style={{color:colorMode == "light"?'#000':'#fff',alignSelf:'center',fontFamily:'Alegreya Sans SC',fontSize:20,opacity:colorMode == "light" ?0.8:0.3}}>nothing inbox </Text>
    </View>
    </>
);
}

export default MessageScreen