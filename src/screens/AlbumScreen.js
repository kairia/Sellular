import React, { useState } from 'react';
import { Box } from "native-base";
import { ImageBackground } from "react-native";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";

const AlbumScreen = ({ navigation }) => {
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  });
  return (
    <Box backgroundColor={"#fff"} >
      <AlbumList 
        style={{width:"100%"}}
        list={albumData.albumList}
        navigation={navigation}
      />
      
    </Box>
  );
};

export default AlbumScreen;
