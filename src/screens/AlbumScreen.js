import React, { useState } from 'react';
import { Box } from "native-base";
import { ImageBackground,Text,Platform } from "react-native";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useFonts } from 'expo-font';


var fontsLoaded = true;

const AlbumScreen = ({ navigation }) => {
  
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
    Platform.OS == 'ios' ?
    <><Box bg="white" width="100%" height="15%">
      <Text
        style={{
          fontFamily: fontsLoaded ? 'Contrail One' : 'Roboto',
          fontSize: 48,
          top: "40%",
          left: "5%"
        }}>Home</Text>
      <MaterialCommunityIcons
        name={'menu'}
        size={24}
        onPress={() => navigation.openDrawer()}
        style={{ marginLeft: "85%" }} />
    </Box><Box backgroundColor={"#fff"}>
        <AlbumList
          style={{ width: "100%" }}
          list={albumData.albumList}
          navigation={navigation} />

      </Box></>:
      <Box backgroundColor={"#fff"}>
      <AlbumList
        style={{ width: "100%" }}
        list={albumData.albumList}
        navigation={navigation} />

    </Box>

  );
};

export default AlbumScreen;
