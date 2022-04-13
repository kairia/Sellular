import React,{ useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ImageBackground,Platform, View, Text, Image, ScrollView, StyleSheet,Button,TouchableOpacity,TextInput, } from 'react-native';
import { Box,useColorMode } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LinearGradient }  from 'expo-linear-gradient';
import { updateUsername } from '../actions/user';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import MessageScreen from '../screens/Messages';
import NotificationsScreen from '../screens/Notifications';
import SearchScreen from '../screens/Search';
import AccountScreen from '../screens/AccountPage';
import FlatGridTest from '../screens/FlatGridTest';

import { useFonts } from 'expo-font';

import CustomDrawer from '../components/CustomDrawer';
import { shadowOffset } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { Center } from 'native-base';
import { Logs } from 'expo';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
var fontsLoaded = true;
var headerBgColor =["#fff","#000" ];
var headerTitleColor=["#121212",'#8281D7'];

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
      <LogStack/>
    </NavigationContainer>
  );
}

const MyDrawer = ({navigation}) => {
  const { colorMode } = useColorMode();
  {drawerPosition: "right"}
  return (
    
    <Drawer.Navigator 
    
    drawerContent={props => <CustomDrawer{...props}/> }
    screenOptions={{
      drawerType:'front',
      drawerActiveBackgroundColor:colorMode == "light"?'rgba(255,255,255,0.4)':'rgba(255,255,255,0.1)',
      drawerActiveTintColor:colorMode == "light"?'#121212':'#fff',
      drawerInactiveTintColor:colorMode == "light"?'rgba(0,0,0,0.3)':'rgba(255,255,255,0.3)',
      drawerPosition: "right",
      drawerLabelStyle:{
        fontSize:24,
        fontFamily:fontsLoaded?'Alegreya Sans SC':'Roboto',
        paddingLeft:20,
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
        component={MainPage} 
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
      component={AccountScreen} 
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
  const { colorMode } = useColorMode();
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarStyle: 
          { position: 'absolute',
            justifyContent:'center',
            borderTopRightRadius:25,
            borderTopLeftRadius:25,
            height:Platform.OS=='ios'?'12%':'10%',
            backgroundColor:colorMode == "light"?'#3E5EB0':'#2D2A54',
            borderWidth:0,
            flexDirection: 'row',
            paddingTop:'4%',
            paddingLeft:'5%',
            paddingRight:'5%',
          },
        tabBarActiveTintColor: colorMode == "light"?'#FFFFFF':'#4DA4F5',
        tabBarInactiveTintColor:colorMode == "light"? '#6DC5F1':'#37548D',
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
        component={SearchScreen} 
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
        component={MessageScreen} 
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
        component={NotificationsScreen} 
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
const LogStack = ({navigation}) => {
  const { colorMode } = useColorMode();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Settings}
        options={{
          //alignItems:'center',
          title:" " ,
          headerShadowVisible: false,
          headerShown:false,
          headerRight: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={24}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 12 }} />
          ),
          headerLeft: () => (
              <Text
                style={{
                  fontFamily: fontsLoaded ? 'Contrail One' : 'Roboto',
                  color:"#121212",
                  fontSize: 48,
                  bottom:"20%"
                }}>Home</Text> 

          ),
          
        }} />
        <Stack.Screen
        name="Home"
        component={MyDrawer}
        options={{
          //alignItems:'center',
          title:" " ,
          headerShadowVisible: false,
          headerShown:false,
          headerRight: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={24}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 12 }} />
          ),
          headerLeft: () => (
              <Text
                style={{
                  fontFamily: fontsLoaded ? 'Contrail One' : 'Roboto',
                  color:"#121212",
                  fontSize: 48,
                  bottom:"20%"
                }}>Home</Text> 

          ),
          
        }} />

    </Stack.Navigator>
    );
  }
const HStack = ({navigation}) => {
  const { colorMode } = useColorMode();
  return (
    Platform.OS == 'ios' ?
    <>
      <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={AlbumScreen}
        options={{
          //alignItems:'center',
          title:" " ,
          headerShadowVisible: false,
          headerShown:false,
          headerRight: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={24}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 12 }} />
          ),
          headerLeft: () => (
              <Text
                style={{
                  fontFamily: fontsLoaded ? 'Contrail One' : 'Roboto',
                  color:"#121212",
                  fontSize: 48,
                  bottom:"20%"
                }}>Home</Text> 

          ),
          
        }} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          title: "",
          headerShadowVisible: false,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'rgba(255,255,255,0)',
            position: 'absolute',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              color={"#fff"}
              size={40}
              onPress={() => navigation.navigate('Home')}
              style={{ marginLeft: 4,marginBottom:10 }} />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'menu'}
              color={'#fff'}
              size={24}
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 16 }} />

          ),
          backgroundColor: '#fff',
        })} />
    </Stack.Navigator></>:
    <Stack.Navigator>
    <Stack.Screen
      name="maintop"
      component={AlbumScreen}
      options={{
        //alignItems:'center',
        title: " Home",
        headerShadowVisible: true,
        headerTitleStyle: {
          fontFamily: fontsLoaded ? 'Contrail One' : 'Roboto',
          fontSize: 48,
          color:colorMode == "light"?headerTitleColor[0]:headerTitleColor[1],
        },
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: colorMode == "light"?headerBgColor[0]:headerBgColor[1],
          shadowOffset: 0,
          marginTop: '40%',
          height: 100,
        },
        headerRight: () => (
          <MaterialCommunityIcons
            name={'menu'}
            size={24}
            onPress={() => navigation.openDrawer()}
            style={{ marginRight: 12,color:colorMode == "light"?"#121212":'#fff' }} />
        ),
      }} />
    <Stack.Screen
      name="Detail"
      component={DetailScreen}
      options={({ route }) => ({
        title: "",
        headerShadowVisible: false,
        headerTransparent: true,
        headerStyle: {
          backgroundColor: 'rgba(255,255,255,0)',
          position: 'absolute',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: '400',
          fontSize: 20
        },
        headerLeft: () => (
          <MaterialCommunityIcons
            name={'chevron-left'}
            color={"#fff"}
            size={40}
            onPress={() => navigation.navigate('maintop')}
            style={{ marginLeft: 0}} />
        ),
        headerRight: () => (
          <MaterialCommunityIcons
            name={'menu'}
            color={'#fff'}
            size={24}
            onPress={() => navigation.openDrawer()}
            style={{ marginLeft: 16 }} />

        ),
        backgroundColor: '#fff',
      })} />
  </Stack.Navigator>

  );
}
const MainPage = ({navigation}) => {
  return (
    <Tabs/>
  );

}
const Settings = ({navigation}) => {
  const dispatch = useDispatch();

  const user = useSelector( state => state.user );
  const [newUsername, setNewUsername] = useState('');

  const saveUsername = () => {
  // in case the username hasnt been updated
  if(newUsername === '') return;

  dispatch( updateUsername(newUsername) );
}

  
  return (
    <><View style={styles.container}>
      <Text style={styles.Text2}>Registeration(beta)</Text>
      <Text style={styles.Text}>

        Welcome {user.username}
      </Text>
      <TextInput 
        style={{ marginVertical:'10%',height: 40, borderColor: 'white', borderWidth: 1, borderRadius: 12, padding: 8, color: 'white',aspectRatio:6,alignSelf:'center'}}
        onChangeText={text => setNewUsername(text)}
        value={newUsername}
        placeholder='Type in your name'
        placeholderTextColor='white'
    />
    <View style={{height:'30%',justifyContent:'space-around'}}>
       <TouchableOpacity onPress={() => saveUsername()} style={{alignSelf:'center'}}>
             
             <LinearGradient 
              width={200}
              height={50}
              colors={['#3DB1D5','#8BB5EA','#D8B9FF']} 
              style={{borderRadius:10,alignSelf:'center',justifyContent:'center'}}
              bg="#6200EE"
            >
              <Center><Text fontWeight={700}  fontSize="14px" color={"#fff"} >Register</Text></Center>
              
              
            </LinearGradient> 
      </TouchableOpacity> 
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{alignSelf:'center'}}>
             
             <LinearGradient 
              width={200}
              height={50}
              colors={['#3DB1D5','#8BB5EA','#D8B9FF']} 
              style={{borderRadius:10,alignSelf:'center',justifyContent:'center'}}
              bg="#6200EE"
            >
              <Center><Text fontWeight={700}  fontSize="14px" color={"#fff"} >LOGIN</Text></Center>
              
              
            </LinearGradient> 
      </TouchableOpacity>
    </View>
       
    </View></>
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
    alignSelf:'center'
  },
  Text2:{
    color:'#FFF',
    fontSize:36,
    alignSelf:'center'
  },
  container: {
    height:'100%',
    width:'100%',
    backgroundColor: '#000',
    justifyContent: 'center',
  },
});

