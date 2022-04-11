import React from "react";
import { ImageBackground,StyleSheet,  View} from "react-native";
import {NativeBaseProvider,Box, Text,Heading,HStack,Pressable, Image,useColorMode} from "native-base";
import image from "../images/BG_Nightsky.jpg";
import MaskedView from '@react-native-masked-view/masked-view';


var ad=[
  require('../images/BluePhone.jpg'),
  require('../images/Pentax.jpg'),
  require('../images/Tesla.jpg'),
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
   const { colorMode } = useColorMode();
   return (
    // <NativeBaseProvider>
      <Box bg="white" style={[styles.cellStyle,{backgroundColor:colorMode == "light"?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)",borderColor:colorMode == "light"?"#EDC8FF":'#6A53C3'}]}> 
           <Pressable
              onPress={() => {console.log(album);navigation.navigation.navigate('Detail',album)}}
            >
              <Box>
                <Box>
                 
                 <ImageBackground
                  style={[styles.imageStyle,{justifyContent:'flex-start',overflow:'hidden'}]}
                  imageStyle={{    borderRadius:28,  }}
                  source={ad[album.image]}
                  alt="123"
                >

                  <View style={{backgroundColor:'rgba(0,0,0,0.4)',height:'20%',width:'100%',opacity:1,justifyContent:"flex-start",flexDirection:'row'}}>
                    <Text style={{alignSelf:'center',marginLeft:'8%',fontWeight:'700',fontSize:16,color:"#fff"}}>${album.price}</Text>
                  </View>
                </ImageBackground>

              </Box>
              </Box>  
              <Box>
                {album.star!="null"? <HStack mt="16px">
                  
                </HStack>:null}
                <Box  style={{flex:1,flexDirection:"row"}}>   
                  <Image source={image} alt="xx" style={{height: 40,width: 40,borderRadius:50,alignSelf:"center",opacity:0.8}}/>  
                  <View style={{flex:1,alignSelf:"center",justifyContent:'flex-end'}}>   
                  <Heading style={styles.headerTitleStyle}>{album.owner}</Heading>
                  <Text style={[styles.headerContentStyle,{opacity:colorMode == "light"?1:0.8}]} color={colorMode == "light"?"black:alpha.50":"#fff"} >@{album.ownerID}</Text>
                  </View>
                </Box>
                
              </Box>    
            </Pressable> 
      </Box>
    // </NativeBaseProvider>
  )};

const styles = StyleSheet.create({
  cellStyle:{
    backgroundColor:"rgba(255,255,255,0.5)",
    borderWidth:2,
    borderColor:"#EDC8FF",
    borderRadius:28,
    marginVertical:25,
    marginHorizontal: 10,
    padding:15,
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
    marginLeft:10,
    marginBottom:-10
    // fontWeight: 'bold',
  },
  headerContentStyle: {
    fontSize: 12,
    marginLeft:10,
    fontWeight: '700',
    // color:"#000",
  },
  imageStyle: {
    opacity:0.8,
    height: 180,
    width: 180,
    marginRight:0,
    borderRadius:28,
    marginBottom:10,
    
  }
});

export default BooksDetail;
