import React from "react";
import { Platform, Text, Image, StyleSheet } from "react-native";
import { Box } from "native-base";
import { Svg, Path } from "react-native-svg";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useFonts } from 'expo-font';


var fontsLoaded = true;

const SearchScreen = ({ navigation }) => {


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
  <Box bg="white" width="100%" height="17%">
  <Text
    style={{
      fontFamily: fontsLoaded ? 'Contrail One' : 'Roboto',
      fontSize: 48,
      top: "50%",
      left: "7%"
    }}>Search</Text>
  <MaterialCommunityIcons
    name={'menu'}
    size={24}
    onPress={() => navigation.openDrawer()}
    style={{ marginLeft: "87%",marginTop:"5%"}} />
</Box>
);
}

export default SearchScreen