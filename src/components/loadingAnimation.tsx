import React from "react";
import { View } from "native-base";
import { MotiView } from "moti";
import { Image } from 'react-native';

var sellular = require("../images/Sellular.png");
var orbs = require("../images/Orbs.png");


const LoadingIndicator = ( {size}: { size:number} ) =>{

    


 return(
    
 <MotiView
from={{
    width:size,
    height:size,
    borderRadius:size/6,
    borderWidth:4,
}}
animate={{
width:size+10,
height:size+10,
borderRadius:(size+10)/6,
borderWidth:size/10,
}}

 transition={{
     type:'timing',
     duration:1500,
     repeat:Infinity,
 }}
  style={{
      rotation:90,
      width:size,
      height:size,
      borderRadius: size / 6,
      borderWidth:size/8,
      borderColor:"#fff",
  }}>

 </MotiView>
   

 )


}



export default function App(){
    return(
      <View 
      style={{position:'absolute',width:'100%',height:'100%',alignItems:'center',justifyContent:'center',backgroundColor:'#3E5EB0'}}>
    
    <LoadingIndicator size={100}/>
    <Image source={sellular} style={{ position:'absolute',top:'60%'}}/>
    <Image source={orbs} style={{ width:90,height:90,position:'absolute',top:'44%',opacity:0.5}}/> 

 </View>
  
    )

};


//     return(
//         <View
//         style={{position:'absolute',flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'000000'}}
//         >
//          <LoadingIndicator size={100}/>

//         </View>
//     )
    
//     ;
// }