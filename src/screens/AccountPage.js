import React from "react";
import { Platform, Text, Image, StyleSheet,View } from "react-native";
import { Box,useColorMode } from "native-base";
import { Svg, Path } from "react-native-svg";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    <View height='100%' width='100%' style={{ backgroundColor: colorMode == "light" ? "#EEF7FF" : "#050B21", flex: 1, justifyContent: 'center', paddingBottom: '30%' }}>

        
      </View>
      
      
      
      </>
);
}

export default AccountScreen