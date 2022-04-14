import React from 'react';
import { Linking , StyleSheet, View, Platform , ImageBackground ,TouchableOpacity } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button, HStack,useColorMode } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import  {LinearGradient}  from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

var fontsLoaded = true;
var bannerBorderRadius = 40;


var lg=[
  require("../images/Linear_Gradient_White.png"),
  require("../images/Linear_Gradient_DB.png"),

]
var ad=[
  require('../images/BluePhone.jpg'),
  require('../images/Pentax.jpg'),
  require('../images/Tesla.jpg'),
];

const DetailScreen = ({ route }) => {
  const { colorMode } = useColorMode();

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
    <Box bg={colorMode == "light"?"#fff":"#050B21"} height={"100%"} > 
        <View bg="white" width={"80%"} height={"5%"} style={{}}></View>
        <Box width={"100%"} style={{aspectRatio:1,overflow:'hidden'}} >
          <ImageBackground
            source={ad[image]}
            alt='bookImage'
            style={{flex:1,justifyContent:"flex-start",  resizeMode: 'cover',overflow:'hidden'}}
            imageStyle={{borderTopLeftRadius:bannerBorderRadius,borderBottomRightRadius:bannerBorderRadius}}
          >
          
          <Box bg="#fff" width={"3%"}height={"3%"} style={{position:"absolute",bottom:"5%",alignSelf:"center",borderRadius:50,opacity:0.8}}></Box>
          
          <View style={{opacity:0.5,right:'2%',borderBottomRightRadius:bannerBorderRadius,width:'97%',height:'97%',alignSelf:'center',position:'absolute',borderBottomWidth:2,borderRightWidth:2,borderColor:"#fff"}}></View>
          {/* <LinearGradient 
          colors={['rgba(255,255,255,0)','rgba(255,255,255,0)','rgba(255,255,255,0.9)']} 
          locations={[0.0,0.3,1]}
          width={"100%"} 
          height={"100%"} 
          // style={{borderBottomLeftRadius:50,borderBottomRightRadius:50}}
          >
          </LinearGradient> */}
          <Image source={colorMode == "light"?lg[0]:lg[1]} alt="LGW" style={{ position: 'absolute',bottom:0,width:"100%",opacity:0.5,overflow:'hidden' }}></Image>
          </ImageBackground>
        </Box>
        
        
          
        
        <Box bg="transparent" width={"95%"} mx="auto" mt="5%">
          <Box bg="transparent" style={{justifyContent:"space-between",borderWidth:2,borderColor:"#999999",padding:"5%",paddingBottom:"20%",borderTopRightRadius:25,borderTopLeftRadius:25}} >
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              
            <Text textAlign="left" fontSize="24px" fontWeight="700" color={colorMode == "light"?'#121212':'#fff'} fontFamily='Nanum Gothic'>{title}</Text>
            {/* <Image source={bg2} alt="xx" style={{height: 48,width: 48,borderRadius:50}}/> */}
            <MaterialCommunityIcons
            color={colorMode == "light"?'#000':'#fff'}
            name={'heart-outline'}
            size={24}
            onPress={() => null}
            style={{ alignSelf:"center" }} />
            </View>
            
            <View style={{backgroundColor:"#859AAE" ,borderRadius:5,width:"20%"}}>
              <Center>
                <Text fontSize="14px" color={'#fff'} style={{alignSelf: "center"}}> {artist}</Text>
              </Center>
            </View>
            {star!="null"? <HStack mb="16px" alignItems="center">
                  
                 
                  <Text>{a}.0/5.0 </Text>
              </HStack>:null}
            <View style={{justifyContent:"center",backgroundColor:"transparent",height:"25%"}}>
            
             <Text textAlign="right" fontWeight={"700"}>Price</Text>
             <Text textAlign="right" color={colorMode == "light"?"#121212":'#fff'} fontWeight={"700"} fontSize="24px">{"$"+price}</Text>
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
