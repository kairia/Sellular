import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import HTabs from '../components/HTabs';

import { useFonts } from 'expo-font';


import { shadowOffset } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { Center } from 'native-base';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
var fontsLoaded = true;

const Navigation = () => {
  
  state = {
    fontsLoaded: false,
  };


  let [fontsLoaded] = useFonts({
    'Contrail One': require('../../assets/fonts/ContrailOne-Regular.ttf'),
  })
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarStyle: 
          { //position: 'absolute',
            borderTopRightRadius:15,
            borderTopLeftRadius:15,
            height:'10%',
            backgroundColor:'#1D5F8F',
            flexDirection: 'row',
            paddingTop:'4%',
            paddingLeft:'5%',
            paddingRight:'5%',
          },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#6DC5F1',
        tabBarLabelPosition:'50%',
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HStack}
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-variant" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen 
        name="WList" 
        component={MessagePage} 
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen 
        name="MBooks" 
        component={ComingSoon2} 
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message-text" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen 
        name="MBooks2" 
        component={ComingSoon2} 
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={AlbumScreen}
        options={{
          title: "  Home",
          headerShadowVisible:false,
          headerTitleStyle:{
            fontFamily:fontsLoaded?'Contrail One':'Roboto',
            fontSize:48,
            
          },
          headerStyle:{
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            backgroundColor:"#fff",
            shadowOffset:0,
          
          },
          headerRight: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={24}
              onPress={() => alert("Search?")}
              style={{ marginRight: 12 }}
            />
          ),
          
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          title: "",
          headerShadowVisible:false,
          headerStyle: {
            backgroundColor: '#fff',
       
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              size={30}
              onPress={() =>navigation.goBack(null)}
              style={{ marginLeft: 8 }}
            />
          ),
          headerRight: () => (
         <MaterialCommunityIcons
            name={'bookmark'}
            color={'#6200EE'}
            size={30}
            onPress={() =>alert("bookmark!")}
            style={{ marginLeft: 8 }}
          />
            
          ),
          backgroundColor:'#fff',
        })}
      />
    </Stack.Navigator>
  );
}
const ComingSoon = ({navigation}) => {
  return (
  <View style={styles.container}>
    <Text style={styles.Text2}>Wishlist</Text>
    <Text style={styles.Text}>
    
      coming soon...
    </Text>
  </View>
  );

}
const ComingSoon2 = ({navigation}) => {
  return (
  <View style={styles.container}>
    <Text style={styles.Text2}>My Books</Text>
    <Text style={styles.Text}>
    
      coming soon...
    </Text>
  </View>
  );

}
const MessagePage =({navigation}) => {

  return (
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

}
export default Navigation;

const styles = StyleSheet.create({
  Text:{
    color:'#FFF',
    fontSize:25,
  },
  Text2:{
    color:'#FFF',
    fontSize:50,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const stylesheet = StyleSheet.create({
  _Messages: {
  position: "relative",
  flex: 1,
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
  fontFamily: "Roboto",
  fontWeight: "400",
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
  fontFamily: "Roboto",
  fontWeight: "700",
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

  imageUrl_Mail='../images/Mail'