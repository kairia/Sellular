import React from 'react';
import { Linking , StyleSheet, View, Platform , ImageBackground ,TouchableOpacity } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button, HStack } from "native-base";
import  {LinearGradient}  from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

var fontsLoaded = true;

import imageUser from "../images/BG_Nightsky.jpg";
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

  state = {
    fontsLoaded: false,
  };
  

  let [fontsLoaded] = useFonts({
    'Contrail One': require('../../assets/fonts/ContrailOne-Regular.ttf'),
    'Alegreya Sans SC': require('../../assets/fonts/AlegreyaSansSC-Regular.ttf'),
    'Nanum Gothic':require('../../assets/fonts/NanumGothic-Bold.ttf')
  })

  if(!fontsLoaded) {
    return null;
  }


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
        <View bg="white" width={"80%"} height={"5%"} style={{}}></View>
        <Box width={"100%"} style={{aspectRatio:1}} >
          <ImageBackground
            source={ad[image]}
            alt='bookImage'
            style={{flex:1,justifyContent:"center",  resizeMode: 'cover'}}
            // imageStyle={{borderBottomLeftRadius:50,borderBottomRightRadius:50}}
          >
          
          <Box bg="#fff" width={4}height={4} style={{position:"absolute",bottom:"5%",alignSelf:"center",borderRadius:50,opacity:0.8}}></Box>
         
          <LinearGradient 
          colors={['rgba(255,255,255,0)','rgba(255,255,255,0)','rgba(255,255,255,1)']} 
          locations={[0.0,0.3,1]}
          width={"100%"} 
          height={"100%"} 
          // style={{borderBottomLeftRadius:50,borderBottomRightRadius:50}}
          >
          </LinearGradient>
          </ImageBackground>
        </Box>
        
        <Box bg="#fff" width={"90%"} mx="auto" mt="28px">
          <Box bg="#fff" style={{borderWidth:2,borderColor:"#666666",padding:"10%",paddingBottom:"20%",borderTopRightRadius:25,borderTopLeftRadius:25}} >
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              
            <Text textAlign="left" fontSize="24px" fontWeight="700" color='#121212' fontFamily='Nanum Gothic'>{title}</Text>
            <Image source={imageUser} alt="xx" style={{height: 48,width: 48,borderRadius:50}}/>

            </View>
            
            <View style={{flex:1 ,backgroundColor:"#859AAE" ,borderRadius:10,width:"20%"}}>
              <Center>
                <Text fontSize="14px" color='#fff' style={{alignSelf: "center"}}> {artist}</Text>
              </Center>
            </View>
            {star!="null"? <HStack mb="16px" alignItems="center">
                  
                 
                  <Text>{a}.0/5.0 </Text>
              </HStack>:null}
            <View style={{justifyContent:"center",backgroundColor:"#fff",height:"25%"}}>
            
             <Text textAlign="right">Price</Text>
             <Text textAlign="right" color="#DC90FF" fontWeight={"700"} fontSize="24px">{"$"+price}</Text>
            </View>
            

             
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
              colors={['#3DB1D5','#8BB5EA','#D8B9FF']} 
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
