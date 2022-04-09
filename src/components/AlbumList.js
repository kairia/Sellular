import React, { useState } from 'react';
import { ImageBackground, Text, FlatList, SectionList, StyleSheet, View } from "react-native";
import {NativeBaseProvider,Heading} from 'native-base';
import BooksDetail from "./BooksDetail";
import sections from "../json/album_section.json";

import MaskedView from '@react-native-masked-view/masked-view';
import image from "../images/BG_Daysky.jpg";
import { useFonts } from 'expo-font';
var fontsLoaded = true;

const Albumlist = (navigation) => {
  state = {
    fontsLoaded: false,
  };

  let [fontsLoaded] = useFonts({
    'Alegreya Sans SC': require('../../assets/fonts/AlegreyaSansSC-Regular.ttf'),
  })
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  });
  
  const renderSectionHeader = ({section}) => (
    
    <>
      <Text style={styles.sectionHeader} >{section.title}</Text>
      <MaskedView 
      style={{ flex: 1, flexDirection: 'row', height: '100%'}}
      maskElement={
        <View 
        width="100%" 
        height="100%" 
        style={{
          backgroundColor: '#fff',
          borderTopLeftRadius:50,
          borderBottomRightRadius:50
          }}>
          
        </View>
      }
      >
        <ImageBackground source={image} imageStyle={{ borderTopLeftRadius:50, borderBottomRightRadius:50}} style={{flex:1,justifyContent:"center",  resizeMode: 'cover'}}>
        <FlatList
          horizontal={section.horizontal}
          data={section.data}
          renderItem={({ item }) => <BooksDetail album={item} navigation={navigation}/>}
          showsHorizontalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
          keyExtractor={ item => item.title }
        />
      </ImageBackground>

      </MaskedView>
      
        
      <Text style={{color:"#000"}}>TEST</Text>
    </>
  );
  const renderItem = ({ item, section }) => {
    if (section.horizontal) {
      return null;
    }
  };

  return (
    <><SectionList
      sections={sections}
      contentContainerStyle={{ paddingHorizontal: 0 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={item => item.title} />
      
      </>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    // fontWeight: '600',
    fontSize: 24,
    fontFamily:fontsLoaded?'Alegreya Sans SC':'Roboto',
    fontWeight:"600",
    paddingBottom: 20,
    paddingLeft:28,
    // paddingLeft: 20,
    // textTransform: 'uppercase',
  },
})

export default Albumlist;
