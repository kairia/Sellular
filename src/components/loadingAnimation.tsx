import React from "react";
import { View } from "native-base";
import { MotiView } from "moti";



const LoadingIndicator = ( {size}: { size:number} ) =>{

 return(
    
 <MotiView
from={{
    width:size,
    height:size,
    borderRadius:size/6,
    borderWidth:2,
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
      borderWidth:size/10,
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