import React from 'react';
import { ImageBackground, View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import HTabs from '../components/HTabs';

import { useFonts } from 'expo-font';

import CustomDrawer from '../components/CustonDrawer';
import { shadowOffset } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { Center } from 'native-base';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
var fontsLoaded = true;

const Navigation = () => {
  
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
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
}

const MyDrawer = () => {
  {drawerPosition: "right"}
  return (
    
    <Drawer.Navigator 
    
    drawerContent={props => <CustomDrawer{...props}/> }
    screenOptions={{
      drawerType:'front',
      drawerActiveBackgroundColor:'rgba(255,255,255,0.1)',
      drawerActiveTintColor:'#fff',
      drawerInactiveTintColor:'rgba(255,255,255,0.6)',
      drawerPosition: "right",
      drawerLabelStyle:{
        fontSize:24,
        fontFamily:fontsLoaded?'Alegreya Sans SC':'Roboto',
        paddingLeft:24,
      },
      drawerItemStyle:{
        borderRadius:10,
      },
      drawerStyle: {
        borderTopLeftRadius:60,
        marginTop:"15%",
        backgroundColor: '#000',
        width: "55%",
      },
    }} 
      initialRouteName="HomeStack">
      <Drawer.Screen 
        name="MainPage" 
        component={ComingSoon} 
        options={{
          headerShown: false,
          title: "Main Page",
       //   drawerIcon: ({ color }) => (
       //     <MaterialCommunityIcons name="home" color={color} size={26} />
       //   ),
        }}
      />
      <Drawer.Screen 
      name="My Account" 
      component={Settings} 
      options={{
        headerShown: false,
        title: "My Account",
     //   drawerIcon: ({ color }) => (
     //     <MaterialCommunityIcons name="home" color={color} size={26} />
     //   ),
      }}
    />
    </Drawer.Navigator>
  );  
}

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarStyle: 
          { position: 'absolute',
            justifyContent:'center',
            borderTopRightRadius:25,
            borderTopLeftRadius:25,
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
        component={ComingSoon2} 
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
          title: " Home",
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
              onPress={() => navigation.openDrawer()}
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
    <Tabs/>
  );

}
const Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Text style={styles.Text2}>Settings</Text>
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

