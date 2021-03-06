import React, { useState,useEffect } from 'react';
import { ImageBackground, Text, FlatList, SectionList, StyleSheet, View,Image,ScrollView } from "react-native";
import { Box, Center,useColorMode } from "native-base";
import {NativeBaseProvider,Heading} from 'native-base';
import BooksDetail from "./BooksDetail";
import sections from "../json/album_section.json";
import FlatGridTest from '../screens/FlatGridTest';
import { db,firebase } from '../../firebase';
import {
  ref,
  onValue,
  push,
  update,
  remove
} from 'firebase/database';

import MaskedView from '@react-native-masked-view/masked-view';
import image from "../images/BG_Daysky.jpg";
import image2 from "../images/BG_Nightsky.jpg";
import LGW from "../images/Linear_Gradient_White.png";

var bg=[
  require("../images/BG_Daysky.jpg"),
  require("../images/BG_Nightsky.jpg"),

]





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
    
    
    <Box bg={colorMode == "light"?"#EEF7FF":"#050B21"}>
      <Box style={{flexDirection:"row",justifyContent:'space-between'}} >
        <Text style={[styles.sectionHeader,{color:colorMode == "light"?"#121212":"#fff"}]} >{section.title}</Text>
        <Box style={{justifyContent:'center',marginRight:28}}>
        <Text style={{alignSelf: "center"}} ></Text>
        </Box>
      </Box>
      
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
        <ImageBackground source={colorMode == "light"?bg[0]:bg[1]} imageStyle={{ borderTopLeftRadius:50, borderBottomRightRadius:50}} style={{borderTopLeftRadius:50, borderBottomRightRadius:50,flex:1,justifyContent:"center",  resizeMode: 'cover',width:"100%"}}>
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
      
      <Box style={{flexDirection:"row"}} ><Text style={[styles.sectionHeader,{marginBottom:"-2%",color:colorMode == "light"?"#121212":"#fff"}]} >Latest</Text><Text style={{marginLeft:"60%",alignSelf: "center"}} ></Text></Box>  
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
  var sections2=[];
  var [secs, setSecs] = useState([]);
  const renderItem = ({ item, section }) => {
    
     



    useEffect(() => {
      
      onValue(ref(db, '/0/data'), querySnapShot => {
        let data = querySnapShot.val() || {};
        let todoItems = {...data};
        setSecs(todoItems);
        const newCells =[];
        
        querySnapShot.forEach(doc => {
          sections2.push({
            artist:doc.val().artist,
            descriptions:doc.val().descriptions,
            owner:doc.val().owner,
            ownerID:doc.val().ownerID,
            price:doc.val().price,
            star:doc.val().star,
            title:doc.val().title,
            url:doc.val().url,
          });
          setSecs(newCells)
          
      });
     
      
      // console.log(sections2)
       
      });
    }, []);

// console.log(sections2)
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
