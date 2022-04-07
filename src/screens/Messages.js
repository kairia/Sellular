import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

export default function App () {
return( 
 <View style = {stylesheet._Messages}>
    <><View style={stylesheet._Heading}>
        <Text style={stylesheet._Heading}>
            Messages
        </Text>
    </View><View style={stylesheet._Nothing_inbox}>
            <Text style={stylesheet._Nothing_inbox}>
                Nothing inbox
            </Text>
        </View><Image style={stylesheet._Mail} source={{ uri: imageUrl_Mail }}>
        </Image></>
 </View>
);
};

const stylesheet = StyleSheet.create({
_Messages: {
position: "relative",
width: Dimensions.get("window").width,
height: 926,
borderRadius: 0,
overflow: "hidden",
transform: [
{translateX: 0},
{translateY: 0},
{rotate: "0deg"},
],
backgroundColor: "rgba(255, 255, 255, 1)",
left: 0,
top: 0,
},
_Heading: {
position: "absolute",
width: 209,
height: 53,
left: 37,
right: "auto",
transform: [
{translateX: 0},
{translateY: 90},
{rotate: "0deg"},
],
fontFamily: "Contrail One",
fontWeight: 400,
textDecorationLine: "none",
fontSize: 48,
color: "rgba(0, 0, 0, 1)",
textAlign: "left",
textAlignVertical: "top",
letterSpacing: 0,
},
_Nothing_inbox: {
position: "absolute",
width: "auto",
height: "auto",
left: 145,
right: "auto",
top: 445,
bottom: "auto",
transform: [
{translateX: 0},
{translateY: 0},
{rotate: "0deg"},
],
fontFamily: "Alegreya Sans",
fontWeight: 700,
textDecorationLine: "none",
fontSize: 24,
color: "rgba(0, 0, 0, 0.30000001192092896)",
textAlign: "left",
textAlignVertical: "top",
letterSpacing: 0,
},
_Mail: {
position: "absolute",
width: 69,
height: 69,
borderRadius: 0,
opacity: 1,
left: 179,
right: "auto",
top: 364,
bottom: "auto",
transform: [
{translateX: 0},
{translateY: 0},
{rotate: "0deg"},
],
backgroundColor: "rgba(0,0,0,0)",
},
});



imageUrl_Mail='./src/images/Mail'