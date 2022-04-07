import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Svg, Path } from "react-native-svg";

import {
useFonts,
} from "@expo-google-fonts/dev";

export default function App (){

	let [fontsLoaded] = useFonts({
	});

	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {stylesheet._Home}>
			<View style = {stylesheet._Rectangle_13}>
			</View>
			<View style = {[stylesheet._Home_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Home_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Home
			</Text>
			</View>
			<View style = {[stylesheet._introduce, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._introduce, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Latest 
			</Text>
			</View>
			<View style = {[stylesheet._introduce_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._introduce_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Explore
			</Text>
			</View>
			<Image style = {stylesheet._DISCOVERBG} source = {{uri: imageUrl_DISCOVERBG}}>
			</Image>
			<View style = {stylesheet._Discover}>
				<View style = {stylesheet._Group_3}>
					<View style = {stylesheet._Rectangle_6}>
					</View>
					<Image style = {stylesheet._unsplash_bWZAPKm0zZE} source = {{uri: imageUrl_unsplash_bWZAPKm0zZE}}>
					</Image>
					<View style = {stylesheet._unsplash_bWZAPKm0zZE_2}>
					</View>
					<View style = {stylesheet._unsplash_Ete0zMKPWys}>
					</View>
					<View style = {[stylesheet.__Kevin0987, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[stylesheet.__Kevin0987, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						@Kevin0987
					</Text>
					</View>
					<View style = {[stylesheet._Kevin_Baker, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[stylesheet._Kevin_Baker, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						Kevin Baker
					</Text>
					</View>
					<View style = {[stylesheet.__169_99, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[stylesheet.__169_99, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						 $169.99
					</Text>
					</View>
				</View>
				<View style = {stylesheet._Group_4}>
					<View style = {stylesheet._Rectangle_6_2}>
					</View>
					<Image style = {stylesheet._unsplash_HIzGn9FZDFU} source = {{uri: imageUrl_unsplash_HIzGn9FZDFU}}>
					</Image>
					<View style = {stylesheet._unsplash_guxJTmZKhsg}>
					</View>
					<View style = {[stylesheet.__Est666, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[stylesheet.__Est666, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						@Est666
					</Text>
					</View>
					<View style = {[stylesheet._Ethan_Stratos, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[stylesheet._Ethan_Stratos, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						Ethan Stratos
					</Text>
					</View>
					<View style = {stylesheet._unsplash_bWZAPKm0zZE_3}>
					</View>
					<View style = {[stylesheet.__59_99, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[stylesheet.__59_99, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						 $59.99
					</Text>
					</View>
				</View>
				<View style = {stylesheet._Group_5}>
					<View style = {stylesheet._Rectangle_6_3}>
					</View>
					<Image style = {stylesheet._unsplash_7_OQMgoGzDw} source = {{uri: imageUrl_unsplash_7_OQMgoGzDw}}>
					</Image>
					<View style = {stylesheet._unsplash_ENOcRpYwT68}>
					</View>
					<View style = {[stylesheet.__RealElon, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[stylesheet.__RealElon, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						@RealElon
					</Text>
					</View>
					<View style = {[stylesheet._Elon_Musket, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[stylesheet._Elon_Musket, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						Elon Musket
					</Text>
					</View>
					<View style = {stylesheet._unsplash_bWZAPKm0zZE_4}>
					</View>
					<View style = {[stylesheet.__50000, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[stylesheet.__50000, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						 $50000
					</Text>
					</View>
				</View>
			</View>
			<View style = {stylesheet._Frame_3}>
				<View style = {stylesheet._unsplash_UtByU3uhBVM}>
				</View>
				<View style = {stylesheet._unsplash_JHEIAnOXbkc}>
				</View>
				<View style = {stylesheet._unsplash_cHlK4sZXOQo}>
				</View>
				<View style = {stylesheet._unsplash_R_srioOZAIU}>
				</View>
				<View style = {stylesheet._unsplash_vufh6gIfJq0}>
				</View>
				<View style = {stylesheet._unsplash_hVlrxhscOJE}>
				</View>
				<View style = {stylesheet._unsplash_vcwRpwRniOQ}>
				</View>
				<View style = {stylesheet._unsplash_1SAnrIxw5OY}>
				</View>
				<View style = {stylesheet._unsplash_2T_nIeT6Y1I}>
				</View>
			</View>
			<View style = {stylesheet._Group_6}>
				<View style = {stylesheet._Rectangle_14}>
				</View>
				<Svg style = {stylesheet._Vector} fill = {"rgba(55, 113, 140, 1)"}>
				<Path fillRule = {"nonzero"} d = {"M 21.09375 18.75 L 0.78125 18.75 C 0.5740496097132564 18.75 0.37533562863245606 18.832309439312667 0.2288228366523981 18.978822231292725 C 0.08231004467234015 19.125335023272783 2.1141942363467336e-16 19.324049609713256 0 19.53125 L 1.5178830414797062e-16 21.09375 C 2.656295322589486e-16 21.300950390286744 0.08231004467234015 21.499664976727217 0.2288228366523981 21.646177768707275 C 0.37533562863245606 21.792690560687333 0.5740496097132564 21.875 0.78125 21.875 L 21.09375 21.875 C 21.300950390286744 21.875 21.499664976727217 21.792690560687333 21.646177768707275 21.646177768707275 C 21.792690560687333 21.499664976727217 21.875 21.300950390286744 21.875 21.09375 L 21.875 19.53125 C 21.875 19.324049609713256 21.792690560687333 19.125335023272783 21.646177768707275 18.978822231292725 C 21.499664976727217 18.832309439312667 21.300950390286744 18.75 21.09375 18.75 Z M 21.09375 12.5 L 0.78125 12.5 C 0.5740496097132564 12.5 0.37533562863245606 12.582309439312667 0.2288228366523981 12.728822231292725 C 0.08231004467234015 12.875335023272783 2.1141942363467336e-16 13.074049609713256 0 13.28125 L 1.5178830414797062e-16 14.84375 C 2.656295322589486e-16 15.050950390286744 0.08231004467234015 15.249664976727217 0.2288228366523981 15.396177768707275 C 0.37533562863245606 15.542690560687333 0.5740496097132564 15.625 0.78125 15.625 L 21.09375 15.625 C 21.300950390286744 15.625 21.499664976727217 15.542690560687333 21.646177768707275 15.396177768707275 C 21.792690560687333 15.249664976727217 21.875 15.050950390286744 21.875 14.84375 L 21.875 13.28125 C 21.875 13.074049609713256 21.792690560687333 12.875335023272783 21.646177768707275 12.728822231292725 C 21.499664976727217 12.582309439312667 21.300950390286744 12.5 21.09375 12.5 Z M 21.09375 6.25 L 0.78125 6.25 C 0.5740496097132564 6.25 0.37533562863245606 6.332310184370726 0.2288228366523981 6.478822976350784 C 0.08231004467234015 6.625335768330842 2.1141942363467336e-16 6.824049609713256 0 7.03125 L 1.5178830414797062e-16 8.59375 C 2.656295322589486e-16 8.800950390286744 0.08231004467234015 8.999664231669158 0.2288228366523981 9.146177023649216 C 0.37533562863245606 9.292689815629274 0.5740496097132564 9.375 0.78125 9.375 L 21.09375 9.375 C 21.300950390286744 9.375 21.499664976727217 9.292689815629274 21.646177768707275 9.146177023649216 C 21.792690560687333 8.999664231669158 21.875 8.800950390286744 21.875 8.59375 L 21.875 7.03125 C 21.875 6.824049609713256 21.792690560687333 6.625335768330842 21.646177768707275 6.478822976350784 C 21.499664976727217 6.332310184370726 21.300950390286744 6.25 21.09375 6.25 Z M 21.09375 0 L 0.78125 0 C 0.5740496097132564 3.469446951953614e-16 0.37533562863245606 0.08230999810621142 0.2288228366523981 0.22882279008626938 C 0.08231004467234015 0.37533558206632733 2.1141942363467336e-16 0.5740496097132564 0 0.78125 L 1.5178830414797062e-16 2.34375 C 2.656295322589486e-16 2.5509503902867436 0.08231004467234015 2.7496642316691577 0.2288228366523981 2.8961770236492157 C 0.37533562863245606 3.0426898156292737 0.5740496097132564 3.125 0.78125 3.125 L 21.09375 3.125 C 21.300950390286744 3.125 21.499664976727217 3.0426898156292737 21.646177768707275 2.8961770236492157 C 21.792690560687333 2.7496642316691577 21.875 2.5509503902867436 21.875 2.34375 L 21.875 0.78125 C 21.875 0.5740496097132564 21.792690560687333 0.37533558206632733 21.646177768707275 0.22882279008626938 C 21.499664976727217 0.08230999810621142 21.300950390286744 5.204170427930421e-16 21.09375 0 L 21.09375 0 Z"}   strokeLinejoin = {"miter"}  strokeWidth = {2}  stroke = {"rgba(28, 95, 143, 1)"}/>
				</Svg>
			</View>
			<View style = {stylesheet._SlideMenu}>
				<View style = {stylesheet._unsplash_Hlkuojv_P6I}>
				</View>
				<Svg style = {stylesheet._Vector_2} fill = {"rgba(255, 255, 255, 1)"}>
				<Path fillRule = {"nonzero"} d = {"M 23.916669845581055 2.4087500594910773 L 21.507919786089975 0 L 11.958334922790527 9.549584863299449 L 2.4087500594910773 0 L 0 2.4087500594910773 L 9.549584863299449 11.958334922790527 L 0 21.507919786089975 L 2.4087500594910773 23.916669845581055 L 11.958334922790527 14.367084982281604 L 21.507919786089975 23.916669845581055 L 23.916669845581055 21.507919786089975 L 14.367084982281604 11.958334922790527 L 23.916669845581055 2.4087500594910773 Z"}   strokeLinejoin = {"miter"}/>
				</Svg>
				<View style = {stylesheet._Ellipse_8}>
				</View>
				<View style = {stylesheet._Ellipse_10}>
				</View>
				<View style = {stylesheet._Ellipse_9}>
				</View>
				<View style = {[stylesheet._Settings, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Settings, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Settings
				</Text>
				</View>
				<View style = {[stylesheet._Settings_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Settings_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Logout
				</Text>
				</View>
				<View style = {[stylesheet._CellManage, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._CellManage, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Manage cells
				</Text>
				</View>
				<View style = {[stylesheet._MyAccount, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._MyAccount, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					My Account
				</Text>
				</View>
			</View>
		</View>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({
	_Home: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 1961,
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
	_Rectangle_13: {
		position: "absolute",
		width: 428,
		height: 946,
		borderRadius: 0,
		opacity: 1,
		left: 1,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_Home_2: {
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
	_introduce: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 37,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 149},
			{rotate: "0deg"},
		],
		fontFamily: "Alegreya Sans SC",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 22,
		color: "rgba(20, 29, 62, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_introduce_2: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 37,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 630},
			{rotate: "0deg"},
		],
		fontFamily: "Alegreya Sans SC",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 22,
		color: "rgba(20, 29, 62, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_DISCOVERBG: {
		position: "absolute",
		width: 428,
		height: 421,
		borderRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 193,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Discover: {
		position: "absolute",
		width: 346,
		height: 408,
		borderRadius: 0,
		left: 47,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 198},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Group_3: {
		position: "absolute",
		width: 305,
		height: 372,
		transform: [
			{translateX: 0},
			{translateY: 17},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_6: {
		position: "absolute",
		width: 305,
		height: 372,
		borderRadius: 27,
		opacity: 1,
		borderWidth: 3,
		borderColor: "rgba(255, 198, 88, 1)",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_unsplash_bWZAPKm0zZE: {
		position: "absolute",
		width: 250,
		height: 250,
		borderRadius: 28,
		opacity: 1,
		left: 26,
		right: "auto",
		top: 28,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_unsplash_bWZAPKm0zZE_2: {
		position: "absolute",
		width: 250,
		height: 45,
		borderTopLeftRadius: 28,
		borderTopRightRadius: 28,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 0,
		opacity: 1,
		left: 26,
		right: "auto",
		top: 28,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_unsplash_Ete0zMKPWys: {
		position: "absolute",
		width: 46,
		height: 46,
		borderRadius: 1000,
		backgroundColor: "rgba(196, 196, 196, 1)",
		left: 26,
		right: "auto",
		top: 300,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	__Kevin0987: {
		position: "absolute",
		width: 78,
		height: 15,
		left: 86,
		right: "auto",
		top: 331,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "NanumGothic",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_Kevin_Baker: {
		position: "absolute",
		width: 110,
		height: 15,
		left: 86,
		right: "auto",
		top: 313,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "NanumGothic",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 15,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	__169_99: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 173,
		right: "auto",
		top: 37,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Alegreya Sans",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 30,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_Group_4: {
		position: "absolute",
		width: 305,
		height: 372,
		transform: [
			{translateX: 328},
			{translateY: 17},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_6_2: {
		position: "absolute",
		width: 305,
		height: 372,
		borderRadius: 27,
		opacity: 1,
		borderWidth: 3,
		borderColor: "rgba(255, 198, 88, 1)",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_unsplash_HIzGn9FZDFU: {
		position: "absolute",
		width: 250,
		height: 250,
		borderRadius: 28,
		opacity: 1,
		left: 26,
		right: "auto",
		top: 28,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_unsplash_guxJTmZKhsg: {
		position: "absolute",
		width: 46,
		height: 46,
		borderRadius: 1000,
		backgroundColor: "rgba(196, 196, 196, 1)",
		left: 26,
		right: "auto",
		top: 300,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	__Est666: {
		position: "absolute",
		width: 78,
		height: 15,
		left: 86,
		right: "auto",
		top: 331,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "NanumGothic",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_Ethan_Stratos: {
		position: "absolute",
		width: 110,
		height: 15,
		left: 86,
		right: "auto",
		top: 313,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "NanumGothic",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 15,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_unsplash_bWZAPKm0zZE_3: {
		position: "absolute",
		width: 250,
		height: 45,
		borderTopLeftRadius: 28,
		borderTopRightRadius: 28,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 0,
		opacity: 1,
		left: 26,
		right: "auto",
		top: 28,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	__59_99: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 187,
		right: "auto",
		top: 37,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Alegreya Sans",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 30,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_Group_5: {
		position: "absolute",
		width: 305,
		height: 372,
		transform: [
			{translateX: 656},
			{translateY: 17},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_6_3: {
		position: "absolute",
		width: 305,
		height: 372,
		borderRadius: 27,
		opacity: 1,
		borderWidth: 3,
		borderColor: "rgba(255, 198, 88, 1)",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_unsplash_7_OQMgoGzDw: {
		position: "absolute",
		width: 250,
		height: 250,
		borderRadius: 28,
		opacity: 1,
		left: 26,
		right: "auto",
		top: 28,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_unsplash_ENOcRpYwT68: {
		position: "absolute",
		width: 46,
		height: 46,
		borderRadius: 1000,
		backgroundColor: "rgba(196, 196, 196, 1)",
		left: 26,
		right: "auto",
		top: 300,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	__RealElon: {
		position: "absolute",
		width: 78,
		height: 15,
		left: 86,
		right: "auto",
		top: 331,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "NanumGothic",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_Elon_Musket: {
		position: "absolute",
		width: 110,
		height: 15,
		left: 86,
		right: "auto",
		top: 313,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "NanumGothic",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 15,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_unsplash_bWZAPKm0zZE_4: {
		position: "absolute",
		width: 250,
		height: 45,
		borderTopLeftRadius: 28,
		borderTopRightRadius: 28,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 0,
		opacity: 1,
		left: 26,
		right: "auto",
		top: 28,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	__50000: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 174,
		right: "auto",
		top: 37,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Alegreya Sans",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 30,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_Frame_3: {
		position: "absolute",
		width: 389,
		height: 1260,
		borderRadius: 0,
		overflow: "hidden",
		left: 25,
		right: "auto",
		top: 671,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_unsplash_UtByU3uhBVM: {
		position: "absolute",
		width: 180,
		height: 336,
		borderRadius: 26,
		opacity: 1,
		left: 8,
		right: "auto",
		top: 25,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(196, 196, 196, 1)",
	},
	_unsplash_JHEIAnOXbkc: {
		position: "absolute",
		width: 180,
		height: 237,
		borderRadius: 26,
		opacity: 1,
		left: 201,
		right: "auto",
		top: 312,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(196, 196, 196, 1)",
	},
	_unsplash_cHlK4sZXOQo: {
		position: "absolute",
		width: 180,
		height: 237,
		borderRadius: 26,
		opacity: 1,
		left: 8,
		right: "auto",
		top: 762,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(196, 196, 196, 1)",
	},
	_unsplash_R_srioOZAIU: {
		position: "absolute",
		width: 180,
		height: 237,
		borderRadius: 26,
		opacity: 1,
		left: 8,
		right: "auto",
		top: 374,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(196, 196, 196, 1)",
	},
	_unsplash_vufh6gIfJq0: {
		position: "absolute",
		width: 180,
		height: 134,
		borderRadius: 26,
		opacity: 1,
		left: 201,
		right: "auto",
		top: 25,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(196, 196, 196, 1)",
	},
	_unsplash_hVlrxhscOJE: {
		position: "absolute",
		width: 180,
		height: 134,
		borderRadius: 26,
		opacity: 1,
		left: 201,
		right: "auto",
		top: 563,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(196, 196, 196, 1)",
	},
	_unsplash_vcwRpwRniOQ: {
		position: "absolute",
		width: 180,
		height: 125,
		borderRadius: 26,
		opacity: 1,
		left: 201,
		right: "auto",
		top: 179,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(196, 196, 196, 1)",
	},
	_unsplash_1SAnrIxw5OY: {
		position: "absolute",
		width: 180,
		height: 125,
		borderRadius: 26,
		opacity: 1,
		left: 8,
		right: "auto",
		top: 624,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(196, 196, 196, 1)",
	},
	_unsplash_2T_nIeT6Y1I: {
		position: "absolute",
		width: 180,
		height: 336,
		borderRadius: 26,
		opacity: 1,
		left: 201,
		right: "auto",
		top: 711,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(196, 196, 196, 1)",
	},
	_Group_6: {
		position: "absolute",
		width: 52,
		height: 52,
		transform: [
			{translateX: 358},
			{translateY: 87},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_14: {
		position: "absolute",
		width: 52,
		height: 52,
		borderRadius: 11,
		opacity: 1,
		borderWidth: 2,
		borderColor: "rgba(28, 95, 143, 1)",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_Vector: {
		position: "absolute",
		color: "rgba(55, 113, 140, 1)",
		width: "auto",
		height: 21.875,
		borderRadius: 0,
		left: 15,
		right: 15.125,
		transform: [
			{translateX: 0},
			{translateY: 15},
			{rotate: "0deg"},
		],
	},
	_SlideMenu: {
		position: "absolute",
		width: 455,
		height: 1011,
		transform: [
			{translateX: 428},
			{translateY: 53},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_unsplash_Hlkuojv_P6I: {
		position: "absolute",
		width: 283,
		height: 946,
		borderTopLeftRadius: 60,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(34, 110, 165, 1)",
	},
	_Vector_2: {
		position: "absolute",
		color: "rgba(255, 255, 255, 1)",
		width: "auto",
		height: 23.916669845581055,
		borderRadius: 0,
		left: 174,
		right: 257.08333015441895,
		transform: [
			{translateX: 0},
			{translateY: 48},
			{rotate: "0deg"},
		],
	},
	_Ellipse_8: {
		position: "absolute",
		width: 455,
		height: 455,
		borderRadius: 1000,
		backgroundColor: "rgba(0,0,0,0)",
		borderWidth: 4,
		borderStyle: "solid",
		borderColor: "rgba(255, 255, 255, 1)",
		left: 0,
		right: "auto",
		top: 556,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Ellipse_10: {
		position: "absolute",
		width: 379,
		height: 379,
		borderRadius: 1000,
		backgroundColor: "rgba(0,0,0,0)",
		borderWidth: 4,
		borderStyle: "solid",
		borderColor: "rgba(255, 255, 255, 1)",
		left: 38,
		right: "auto",
		top: 594,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Ellipse_9: {
		position: "absolute",
		width: 425,
		height: 425,
		borderRadius: 1000,
		backgroundColor: "rgba(0,0,0,0)",
		borderWidth: 3,
		borderStyle: "solid",
		borderColor: "rgba(255, 255, 255, 1)",
		left: 15,
		right: "auto",
		top: 571,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Settings: {
		position: "absolute",
		width: 163,
		height: "auto",
		left: 182,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 215},
			{rotate: "0deg"},
		],
		fontFamily: "Alegreya Sans SC",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 26,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_Settings_2: {
		position: "absolute",
		width: 163,
		height: "auto",
		left: 182,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 268},
			{rotate: "0deg"},
		],
		fontFamily: "Alegreya Sans SC",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 26,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_CellManage: {
		position: "absolute",
		width: 163,
		height: "auto",
		left: 182,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 162},
			{rotate: "0deg"},
		],
		fontFamily: "Alegreya Sans SC",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 26,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_MyAccount: {
		position: "absolute",
		width: 166,
		height: "auto",
		left: 226,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 109},
			{rotate: "0deg"},
		],
		fontFamily: "Alegreya Sans SC",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 26,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
});

const imageUrl_unsplash_HIzGn9FZDFU = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/cf37892fdf20adfb8b8f94be661f5700"
const imageUrl_unsplash_7_OQMgoGzDw = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/3b1932b3d65fd062bd464678ca8d4735"
const imageUrl_DISCOVERBG = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/75816c611d3c6c2667aa176af0bf20f1"
const imageUrl_unsplash_bWZAPKm0zZE = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/924995b456a9151210d61a2c98b7e019"