import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import react,{ Component }  from "react";
import {ImageBackground,View,Text,Image} from 'react-native';
import { Switch, useColorMode } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import image from "../images/BG_Daysky.jpg";
import image2 from "../images/BG_Nightsky.jpg";
import AccountImage from "../images/no-default-image.jpg";
import MaskedView from '@react-native-masked-view/masked-view';
import ToggleSwitch from 'toggle-switch-react-native'

import { useFonts } from 'expo-font';

var test = false;
var fontsLoaded = true;

const CustomDrawer = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();
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
       
        <ImageBackground source={colorMode == "light"?image:image2} imageStyle={{ borderTopLeftRadius:50}} style={{flex:1,justifyContent:"center",  resizeMode: 'cover'}}>
           <View style={{borderBottomWidth:1,borderRightWidth:1,borderColor:colorMode == "light"?"#A89CF0":"#000",backgroundColor:colorMode == "light"?"#fff":"rgba(138,150,255,0.25)",height:"13%",width:"100%",borderTopLeftRadius:50,borderBottomRightRadius:50,margin:0}}>
               <View style={{flexDirection:"row",borderTopWidth:0,borderLeftWidth:0,borderColor:colorMode == "light"?"#C3C9FF":"#E3E9FF",position:"absolute",bottom:0,right:0,backgroundColor:colorMode == "light"?"#E3E9FF":"#19192E",height:"90%",width:"95%",borderTopLeftRadius:40,borderBottomRightRadius:50,margin:0}}>
                 <Image source={AccountImage} style={{borderWidth:1.5,borderColor:colorMode == "light"?"#7060D2":"#E3E9FF",alignSelf:"center",backgroundColor:"#E5E0FF",height:64,width:64,borderRadius:50,opacity:0.5,marginLeft:"5%"}}></Image>
                 <View style={{margin:"5%",aspectRatio:2,alignSelf:"center",height:64,flexDirection:"row"}}>
                   <Text style={{color:colorMode == "light"?"#121212":"#fff",paddingLeft:"10%",fontSize:24,alignSelf:"center",fontFamily:'Alegreya Sans SC'}}>User</Text>
                 </View>
               </View>
           </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            
            <View style={{position:"absolute",top:"50%"}}>
            <Text numberOfLines={1} ellipsizeMode="clip" style={{paddingTop:"70%",fontSize:120,opacity:colorMode == "light"?1:0.3,fontFamily:'Contrail One',color:"#fff",transform: [{ rotate: '270deg'}]}}>CELL</Text>
            </View>
            

            <View style={{borderTopLeftRadius:50,position:"absolute",bottom:0,right:0,width:"95%",height:"13%",backgroundColor:"#E3E9FF",flexDirection:"row"}}>
            <ImageBackground source={colorMode == "light"?image2:image} imageStyle={{borderTopLeftRadius:50}} style={{overflow:"hidden",flex:1,justifyContent:"flex-start",  resizeMode: 'cover',paddingTop:'10%',paddingLeft:'10%'}}>
            {/* <Text style={{color:"#fff",alignSelf:"center",paddingBottom:"15%"}}>CustomText</Text> */}
                           {/* <View style={{borderTopLeftRadius:50,width:"200%",height:"100%",backgroundColor:"#000",position:'absolute',alignSelf:"center",left:0,paddingRight:"50%",opacity:colorMode == "light"?0:0.1}}></View> */}

            <ToggleSwitch
             isOn={colorMode === "dark"}
             onColor="#004A85"
             offColor="#B2C8FF"
             label="dark"
             labelStyle={{ color: colorMode == "light"?"white":"#121212",fontSize:24, fontWeight: "900",marginRight:"25%",fontFamily:'Alegreya Sans SC' }}
             onToggle={toggleColorMode}
             />
             {/* <Switch
                  name="light Mode"
                  isChecked={colorMode === "light"}
                  onToggle={toggleColorMode}
                  accessibilityLabel="display-mode"
                  accessibilityHint="light or dark mode"
               /> */}
            </ImageBackground>
            </View>

            
        </ImageBackground>
        
        
    )
}

export default CustomDrawer