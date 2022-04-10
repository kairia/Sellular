import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import react from "react";
import {ImageBackground,View,Text,Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import image from "../images/BG_Daysky.jpg";
import image2 from "../images/BG_Nightsky.jpg";
import AccountImage from "../images/KAIPROD.png";
import MaskedView from '@react-native-masked-view/masked-view';

import { useFonts } from 'expo-font';


var fontsLoaded = true;

const CustomDrawer = (props) => {
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
       
        <ImageBackground source={image} imageStyle={{ borderTopLeftRadius:50}} style={{flex:1,justifyContent:"center",  resizeMode: 'cover'}}>
           <View style={{borderBottomWidth:1,borderRightWidth:1,borderColor:"#A89CF0",backgroundColor:"#fff",height:"13%",width:"100%",borderTopLeftRadius:50,borderBottomRightRadius:50,margin:0}}>
               <View style={{flexDirection:"row",borderTopWidth:2,borderLeftWidth:2,borderColor:"#C3C9FF",position:"absolute",bottom:0,right:0,backgroundColor:"#E3E9FF",height:"90%",width:"95%",borderTopLeftRadius:40,borderBottomRightRadius:50,margin:0}}>
                 <View style={{borderWidth:1.5,borderColor:"#7060D2",alignSelf:"center",backgroundColor:"#E5E0FF",height:64,width:64,borderRadius:50,opacity:0.5,marginLeft:"5%"}}></View>
                 <View style={{margin:"5%",aspectRatio:2,alignSelf:"center",height:64,flexDirection:"row"}}>
                   <Text style={{paddingLeft:"10%",fontSize:20,alignSelf:"center",fontFamily:'Alegreya Sans SC'}}>Kai</Text>
                 </View>
               </View>
           </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            
            <View style={{position:"absolute",top:"50%"}}>
            <Text numberOfLines={1} ellipsizeMode="clip" style={{paddingTop:"70%",fontSize:120,fontFamily:'Contrail One',color:"#fff",transform: [{ rotate: '270deg'}]}}>CELL</Text>
            </View>
            

            <View style={{borderTopLeftRadius:50,position:"absolute",bottom:0,right:0,width:"95%",height:"13%",backgroundColor:"#E3E9FF",flexDirection:"row"}}>
            <ImageBackground source={image2} imageStyle={{borderTopLeftRadius:50}} style={{flex:1,justifyContent:"center",  resizeMode: 'cover'}}>
            <Text style={{color:"#fff",alignSelf:"center",paddingBottom:"15%"}}>CustomText</Text>
            </ImageBackground>
            </View>

            
        </ImageBackground>
        
        
    )
}

export default CustomDrawer