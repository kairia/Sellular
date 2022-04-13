import React,{useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Platform, Text, Image, StyleSheet,View,TextInput,TouchableOpacity } from "react-native";
import { updateUsername } from '../actions/user';
import { Box,useColorMode,Center } from "native-base";
import { Svg, Path } from "react-native-svg";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountImage from "../images/no-default-image.jpg";
import { LinearGradient }  from 'expo-linear-gradient';

import { useFonts } from 'expo-font';


var fontsLoaded = true;
var headerBgColor =["#fff","#000" ];
var headerTitleColor=["#121212",'#8281D7'];

const AccountScreen = ({ navigation }) => {

  const [newUsername, setNewUsername] = useState('');
  const dispatch = useDispatch();
  const user = useSelector( state => state.user );
  const { colorMode } = useColorMode();
  const saveUsername = () => {
    // in case the username hasnt been updated
    if(newUsername === '') return;
  
    dispatch( updateUsername(newUsername) );
  }

    state = {
        fontsLoaded: false,
      };
      
    
      let [fontsLoaded] = useFonts({
        'Contrail One': require('../../assets/fonts/ContrailOne-Regular.ttf'),
        'Alegreya Sans SC': require('../../assets/fonts/AlegreyaSansSC-Regular.ttf')
      })
    
      if(!fontsLoaded) {
        return null;
      }
    



return( 
    
  <><Box bg={colorMode == "light" ? headerBgColor[0] : headerBgColor[1]} width="100%" height="17%" style={{justifyContent:Platform.OS=='ios'?'center':null}}>
      <Text
        style={{
          color: colorMode == "light" ? headerTitleColor[0] : headerTitleColor[1],
          fontFamily: fontsLoaded ? 'Contrail One' : 'Roboto',
          fontSize: 48,
          top: "50%",
          left: "7%"
        }}></Text>
      <MaterialCommunityIcons
        color={colorMode == "light" ? '#000' : '#fff'}
        name={'menu'}
        size={24}
        marginTop={Platform.OS=='ios'?'50%':0}
        top={Platform.OS=='ios'?'50%':0}
        onPress={() => navigation.openDrawer()}
        style={{ marginLeft: "87%", marginTop: "5%" }} />
    </Box>
    
    <View height='100%' width='100%' style={{ backgroundColor: colorMode == "light" ? "#EEF7FF" : "#050B21", flex: 1, justifyContent: 'flex-start', paddingBottom: '30%' }}>
    <Image source={AccountImage} style={{position:'absolute',top:"5%",borderWidth:1.5,borderColor:colorMode == "light"?"#7060D2":"#E3E9FF",alignSelf:"center",backgroundColor:"#E5E0FF",height:96,width:96,borderRadius:100,opacity:0.5}}></Image>
    <Text style={{position:'absolute',top:"25%",color:colorMode == "light"?"#121212":"#fff",fontSize:24,alignSelf:"center",fontFamily:'Alegreya Sans SC'}}>{user.username}</Text> 
    
    <Text style={{position:'absolute',top:"30%",color:colorMode == "light"?"#121212":"#fff",fontSize:16,alignSelf:"center"}}>@TestAccount0440</Text>   
    
     
    <View style={{borderColor:colorMode == "light"?"#121212":"#fff",opacity:colorMode == "light"?0.5:0.3,borderTopLeftRadius:30,borderTopRightRadius:30,position:'absolute',alignSelf:"center",height:'40%',width:'90%',top:'40%',borderWidth:2,paddingBottom:500}}>
   
    </View>
     <TextInput 
        style={{ position:'absolute',top:"50%",height: 40 , borderColor: colorMode == "light" ?'black':'white', borderWidth: 1, borderRadius: 12, padding: 8, color: colorMode == "light" ?'black':'white',aspectRatio:6,alignSelf:'center'}}
        onChangeText={text => setNewUsername(text)}
        value={newUsername}
        placeholder='Change Username'
        placeholderTextColor={colorMode == "light" ?'black':'white'}
    />
    <View style={{width:'100%',position:'absolute',top:"70%",justifyContent:'center',flexDirection:'row'}}>
      <Center>
        <TouchableOpacity onPress={() => saveUsername()} style={{alignSelf:'center'}}>
             
             <LinearGradient 
              width={200}
              height={50}
              colors={['#3DB1D5','#8BB5EA','#D8B9FF']} 
              style={{borderRadius:10,alignSelf:'center',justifyContent:'center'}}
              bg="#6200EE"
            >
              <Center><Text fontWeight={700}  fontSize="14px" color={"#fff"} >Change</Text></Center>
              
              
            </LinearGradient> 
      </TouchableOpacity> 
      </Center>
      
    </View>
    
    </View>
      
      
      
      </>
);
}

export default AccountScreen