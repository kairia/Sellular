import React from 'react';
import { Linking,StyleSheet, View,Platform,ImageBackground } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button, HStack } from "native-base";
import  {LinearGradient}  from 'expo-linear-gradient';

var ad=[
  require('../images/BluePhone.jpg'),
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

const DetailScreen = ({ route }) => {
  const { title, 
    artist,
    price,
    star,
    url,
    image,
    descriptions
  } = route.params;

  var a=Number(star[0])+Number(star[1])+Number(star[2])+Number(star[3])+Number(star[4]);
  var b="Purchase"+price;
  //colors={['#fff','rgba(255,255,255,0.5)','rgba(255,255,255,0)']}

  return (
    <Box bg="white" height={"100%"} > 
        <View bg="white" width={"80%"} height={"5%"} style={{borderBottomLeftRadius:20,borderBottomRightRadius:20}}></View>
        <Box width={"100%"} style={{aspectRatio:1}} >
          <ImageBackground
            source={ad[image]}
            alt='bookImage'
            style={{flex:1,justifyContent:"center",  resizeMode: 'cover'}}
          >
          <LinearGradient 
          colors={['rgba(255,255,255,0)','rgba(255,255,255,0)','rgba(255,255,255,1)']} 
          locations={[0.0,0.3,1]}
          width={"100%"} 
          height={"100%"} 
          >
          </LinearGradient>
          </ImageBackground>
        </Box>
        
        <Box bg="#fff" width={320} mx="auto" mt="28px">
          <Center>
            <Heading fontSize="24px" color='#000000'>{title}</Heading>
            <Heading my="8px" fontSize="14px" color='#666666'> {artist}</Heading>
            {star!="null"? <HStack mb="16px" alignItems="center">
                  
                 
                  <Text>{a}.0/5.0 </Text>
              </HStack>:null}
            <Text textAlign="center">{descriptions}</Text>
            <Button 
              mt="28px"
              width="190px"
              onPress={() => alert("In your cart")}
              fontSize="14px"
              bg="#6200EE"
            >
           {b}
            </Button>  
          </Center>
        </Box>
       
            
           
       
      
    </Box>

  );
}

export default DetailScreen;
