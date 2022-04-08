import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import react from "react";
import {ImageBackground,View,Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import image from "../images/BG_Nightsky.jpg";

const CustomDrawer = (props) => {


    return(
       
        <ImageBackground source={image}imageStyle={{ borderTopLeftRadius:50}} style={{flex:1,justifyContent:"center",  resizeMode: 'cover'}}>
           <View style={{padding:'5%'}}></View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            <View style={{padding:50}}>
            <Text style={{color:"#fff"}}>CustomText</Text>
            </View>
        </ImageBackground>
        
        
    )
}

export default CustomDrawer