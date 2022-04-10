import React from 'react';
import { Linking , StyleSheet, View, Platform , ImageBackground ,TouchableOpacity } from 'react-native';
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
  var b="Purchase";
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
          <Box>
            <Text textAlign="left" fontWeight={700} fontSize="24px" color='#DC90FF'>{title}</Text>
            <Box 
            height="12%" 
            width="40%" 
            bg="#859AAE" 
            style={{borderRadius:5,flexDirection:"row"}}
            >

              <Text textAlign="left" fontSize="14px" color='#fff' ml="5%" style={{alignSelf: "center"}}> {artist}</Text>
              
            </Box>
            {star!="null"? <HStack mb="16px" alignItems="center">
                  
                 
                  <Text>{a}.0/5.0 </Text>
              </HStack>:null}
            <Text textAlign="left">{descriptions}</Text>
            <Text textAlign="right" fontSize="20px">{"$"+price}</Text>

             
             {Platform.OS == 'ios' ?
             
             <Button 
             fontSize="14px" 
             color={"#fff"} 
             onPress={() => alert("In your cart")} 
             width="50%" 
             height="18%"
             style={{marginLeft:"50%",marginTop:"5%",borderRadius:10}}>{b}</Button>

             :
             
             <TouchableOpacity 
             onPress={() => alert("In your cart")} style={{marginLeft:"50%",marginTop:"5%"}}>
             
             <LinearGradient 
              width="100%"
              colors={['#3DB1D5','#3EC4D5','#3ED5D5']} 
              style={{borderRadius:10}}
              bg="#6200EE"
            >
              <Center><Text fontWeight={700} mx="20%" my="8%" fontSize="14px" color={"#fff"}>{b}</Text></Center>
              
              
            </LinearGradient> 


             </TouchableOpacity>
              
             
            
            }

            
              
             
          </Box>
        </Box>
       
            
           
       
      
    </Box>

  );
}

export default DetailScreen;
