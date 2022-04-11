import React from 'react';
import { Linking , StyleSheet, View, Platform , ImageBackground ,TouchableOpacity } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button, HStack } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import  {LinearGradient}  from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

var fontsLoaded = true;
var bannerBorderRadius = 40;

import bg1 from "../images/BG_Daysky.jpg";
import bg2 from "../images/BG_Nightsky.jpg";
import LGW from "../images/Linear_Gradient_White.png";

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
            style={{flex:1,justifyContent:"flex-start",  resizeMode: 'cover',overflow:'hidden'}}
            imageStyle={{borderTopLeftRadius:bannerBorderRadius,borderBottomRightRadius:bannerBorderRadius}}
          >
          
          <Box bg="#fff" width={"3%"}height={"3%"} style={{position:"absolute",bottom:"5%",alignSelf:"center",borderRadius:50,opacity:0.8}}></Box>
          

          {/* <LinearGradient 
          colors={['rgba(255,255,255,0)','rgba(255,255,255,0)','rgba(255,255,255,0.9)']} 
          locations={[0.0,0.3,1]}
          width={"100%"} 
          height={"100%"} 
          // style={{borderBottomLeftRadius:50,borderBottomRightRadius:50}}
          >
          </LinearGradient> */}
          <Image source={LGW} alt="LGW" style={{ position: 'absolute',bottom:0,width:"100%",opacity:0.5 }}></Image>
          </ImageBackground>
        </Box>
        
        
          
        
        <Box bg="transparent" width={"90%"} mx="auto" mt="5%">
          <Box bg="transparent" style={{justifyContent:"space-between",borderWidth:2,borderColor:"#999999",padding:"5%",paddingBottom:"20%",borderTopRightRadius:25,borderTopLeftRadius:25}} >
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              
            <Text textAlign="left" fontSize="24px" fontWeight="700" color='#121212' fontFamily='Nanum Gothic'>{title}</Text>
            {/* <Image source={bg2} alt="xx" style={{height: 48,width: 48,borderRadius:50}}/> */}
            <MaterialCommunityIcons
            name={'heart-outline'}
            size={24}
            onPress={() => navigation.openDrawer()}
            style={{ alignSelf:"center" }} />
            </View>
            
            <View style={{backgroundColor:"#859AAE" ,borderRadius:5,width:"20%"}}>
              <Center>
                <Text fontSize="14px" color='#fff' style={{alignSelf: "center"}}> {artist}</Text>
              </Center>
            </View>
            {star!="null"? <HStack mb="16px" alignItems="center">
                  
                 
                  <Text>{a}.0/5.0 </Text>
              </HStack>:null}
            <View style={{justifyContent:"center",backgroundColor:"transparent",height:"25%"}}>
            
             <Text textAlign="right" fontWeight={"700"}>Price</Text>
             <Text textAlign="right" color="#121212" fontWeight={"700"} fontSize="24px">{"$"+price}</Text>
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
