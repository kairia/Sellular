import React from "react";
import { Platform, Text, Image, StyleSheet,View } from "react-native";
import { Box,useColorMode } from "native-base";
import { Svg, Path } from "react-native-svg";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountImage from "../images/no-default-image.jpg";

import { useFonts } from 'expo-font';


var fontsLoaded = true;
var headerBgColor =["#fff","#000" ];
var headerTitleColor=["#121212",'#8281D7'];

const AccountScreen = ({ navigation }) => {
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
      }}>Notifications</Text>
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
        }}></Text>
      <MaterialCommunityIcons
        color={colorMode == "light" ? '#000' : '#fff'}
        name={'menu'}
        size={24}
        onPress={() => navigation.openDrawer()}
        style={{ marginLeft: "87%", marginTop: "5%" }} />
    </Box>
    <View height='100%' width='100%' style={{ backgroundColor: colorMode == "light" ? "#EEF7FF" : "#050B21", flex: 1, justifyContent: 'flex-start', paddingBottom: '30%' }}>
    <Image source={AccountImage} style={{marginTop:'10%',borderWidth:1.5,borderColor:colorMode == "light"?"#7060D2":"#E3E9FF",alignSelf:"center",backgroundColor:"#E5E0FF",height:96,width:96,borderRadius:100,opacity:0.5}}></Image>
    <Text style={{color:colorMode == "light"?"#121212":"#fff",fontSize:24,alignSelf:"center",fontFamily:'Alegreya Sans SC'}}>User</Text> 
    <Text style={{color:colorMode == "light"?"#121212":"#fff",fontSize:16,alignSelf:"center"}}>@TestAccount0440</Text>   
    <View style={{borderColor:colorMode == "light"?"#121212":"#fff",opacity:colorMode == "light"?0.5:0.3,borderTopLeftRadius:30,borderTopRightRadius:30,position:'absolute',alignSelf:"center",height:'40%',width:'90%',top:'40%',borderWidth:2,paddingBottom:500}}>

    </View>
    </View>
      
      
      
      </>
);
}

export default AccountScreen