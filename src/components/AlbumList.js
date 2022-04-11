import React, { useState } from 'react';
import { ImageBackground, Text, FlatList, SectionList, StyleSheet, View,Image,ScrollView } from "react-native";
import { Box, Center,useColorMode } from "native-base";
import {NativeBaseProvider,Heading} from 'native-base';
import BooksDetail from "./BooksDetail";
import sections from "../json/album_section.json";
import FlatGridTest from '../screens/FlatGridTest';


import MaskedView from '@react-native-masked-view/masked-view';
import image from "../images/BG_Daysky.jpg";
import image2 from "../images/BG_Nightsky.jpg";
import LGW from "../images/Linear_Gradient_White.png";

import { useFonts } from 'expo-font';
var fontsLoaded = true;

const Albumlist = (navigation) => {
  const { colorMode } = useColorMode();
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
    
    
    <Box bg={colorMode == "light"?"#EEF7FF":"#050B21"}><Box style={{flexDirection:"row"}} ><Text style={[styles.sectionHeader,{color:colorMode == "light"?"#121212":"#fff"}]} >{section.title}</Text><Text style={{marginLeft:"62%",alignSelf: "center"}} >more</Text></Box>
      
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
        <ImageBackground source={colorMode == "light"?image:image2} imageStyle={{ borderTopLeftRadius:50, borderBottomRightRadius:50}} style={{borderTopLeftRadius:50, borderBottomRightRadius:50,flex:1,justifyContent:"center",  resizeMode: 'cover',width:"100%"}}>
        <FlatList
          // style={{paddingLeft:20}}
          horizontal={section.horizontal}
          data={section.data}
          renderItem={({ item }) => <BooksDetail album={item} navigation={navigation}/>}
          showsHorizontalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
          keyExtractor={ item => item.title }
        />
      </ImageBackground>

      </MaskedView>
      
      <Box style={{flexDirection:"row"}} ><Text style={[styles.sectionHeader,{marginBottom:"-2%",color:colorMode == "light"?"#121212":"#fff"}]} >Explore</Text><Text style={{marginLeft:"60%",alignSelf: "center"}} ></Text></Box>  
      <MaskedView 
      style={{ flex: 1, flexDirection: 'row', height: '100%'}}
      maskElement={
        <Center>
          <View 
        width="90%" 
        height="100%" 
        style={{
          backgroundColor: '#000',
          borderTopRightRadius:50,
          borderBottomLeftRadius:50,
          marginTop:50,  
          }}>
          
        </View>
        </Center>
        
      }
      >
      <FlatGridTest></FlatGridTest>
      </MaskedView>
      
      
    </Box>
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
    color:"#121212",
    alignSelf: "center",
    fontSize: 24,
    fontFamily:fontsLoaded?'Alegreya Sans SC':'Roboto',
    fontWeight:"600",
    marginVertical:"3%",
    paddingLeft:28,
    // paddingLeft: 20,
    // textTransform: 'uppercase',
  },
})

export default Albumlist;
