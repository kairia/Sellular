import React from "react";
import { ImageBackground,StyleSheet,  View} from "react-native";
import {NativeBaseProvider,Box, Text,Heading,HStack,Pressable, Image} from "native-base";
import image from "../images/BG_Nightsky.jpg";

var ad=[
  require('../images/img_book_fashinopolis.png'),
  require('../images/img_book_chanel.png'),
  require('../images/img_book_calligraphy.png'),
  require('../images/img_book_ysl.png'),
  require('../images/img_book_tbos.png'),
  require('../images/img_book_stitchedup.png'),
];
var st=[
  require('../images/icon_star_empty.png'),
  require('../images/icon_star_filled.png'),
];
const BooksDetail =({ album, navigation}) => {
  //  let { album } = props;
  
   return (
    // <NativeBaseProvider>
      <Box bg="white" style={styles.cellStyle}> 
           <Pressable
              onPress={() => {console.log(album);navigation.navigation.navigate('Detail',album)}}
            >
              <Box>
                <Box>
                 <Image
                  style={styles.imageStyle}
                  source={ad[album.image]}
                  alt="123"
                />   
              </Box>
              </Box>  
              <Box>
                {album.star!="null"? <HStack mt="16px">
                  
                </HStack>:null}        
                <Heading style={styles.headerTitleStyle}>{album.title}</Heading>
                <Text style={styles.headerContentStyle} color="black:alpha.50" >{album.artist}</Text>
              </Box>    
            </Pressable> 
      </Box>
    // </NativeBaseProvider>
  )};

const styles = StyleSheet.create({
  cellStyle:{
    borderWidth:3,
    borderColor:"#FFC658",
    borderRadius:28,
    marginVertical:15,
    marginLeft: 20,
    padding:20,
    justifyContent:"center"
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 0,
    width: 130,
  },
  headerTitleStyle: {
    fontSize: 16,
    // fontWeight: 'bold',
  },
  headerContentStyle: {
    fontSize: 12,
    // fontWeight: '300',
    // color:"#000",
  },
  imageStyle: {
    height: 200,
    width: 200,
    marginRight:0,
    borderRadius:28,
  }
});

export default BooksDetail;
