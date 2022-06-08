import React,{ useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ImageBackground,Platform, View,  Image, ScrollView, StyleSheet,TouchableOpacity,TextInput,Dimensions,StatusBar,KeyboardAvoidingView } from 'react-native';
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
import CartScreen from '../screens/Cart';
import SearchScreen from '../screens/Search';
import AccountScreen from '../screens/AccountPage';
import RegisterScreen from '../screens/Register';
import FlatGridTest from '../screens/FlatGridTest';
import AlternateHome from '../screens/AnimatedHome.js'
import LoadingIndicator from '../components/loadingAnimation.tsx';
import animatedCards from '../screens/AnimatedCards.js';

import animatedMessages from '../screens/AnimatedMessages.js';
import { useFonts } from 'expo-font';

import CustomDrawer from '../components/CustomDrawer'; 
import { shadowOffset } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { Center } from 'native-base';
import { Logs } from 'expo';
import { Block, Checkbox, Text, theme } from "galio-framework";
import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import ArgonOnboard from "../constants/Images";
import { auth } from '../../firebase';
import { useDelay } from 'react-use-precision-timer';
import Cart from '../screens/Cart';

const { width, height } = Dimensions.get("screen");

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
var fontsLoaded = true;
var headerBgColor =["#fff","#000" ];
var headerTitleColor=["#121212",'#8281D7'];
var isLoaded = false;

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
          {
            position: 'absolute',
            justifyContent:'center',
            borderTopRightRadius:25,
            borderTopLeftRadius:25,
            height:Platform.OS=='ios'?'12%':'10%',
            backgroundColor:isLoaded== true?colorMode == "light"?'#3E5EB0':'#2D2A54':'transparent',
            borderWidth:0,
            elevation:0,
            flexDirection: 'row',
            shadowColor:'transparent',
            borderColor:'transparent',
            paddingTop:'4%',
            paddingLeft:'5%',
            paddingRight:'5%',
          },
        tabBarActiveTintColor:isLoaded== true? colorMode == "light"?'#FFFFFF':'#4DA4F5':'transparent',
        tabBarInactiveTintColor:isLoaded== true?colorMode == "light"? '#6DC5F1':'#37548D':'transparent',
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
        component={animatedCards} 
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={28} />
          ),
        }}
      />
      {/* <Tab.Screen 
        name="WList44" 
        component={Placeholder} 
        options={{
          onPress:({previousS}),
          headerShown: false,
          title: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={28} />
          ),
        }}
      /> */}
      <Tab.Screen 
        name="MBooks" 
        component={MessageScreen} 
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen 
        name="MBooks2" 
        component={animatedMessages} 
        options={{
          unmountOnBlur:true,
          headerShown: false,
          title: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message-text" color={color} size={24} />
          ),
        }} 
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })}
      />
    </Tab.Navigator>
  );
}
const LogStack = ({navigation}) => {
  const { colorMode } = useColorMode();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="boards"
        component={Onboarding}
        options={{
          //alignItems:'center',
          title:" " ,
          headerShadowVisible: false,
          headerShown:false,
          
        }} />
      <Stack.Screen
        name="Login"
        component={Regi}
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
            <><MaterialCommunityIcons
              name={'cart-variant'}
              color={{ marginRight: 12, color: colorMode == "light" ? "#121212" : '#fff' }}
              size={24}
              onPress={() => navigation.navigate('Cart')}
              style={{ marginRight: 10 }} /><MaterialCommunityIcons
                name={'menu'}
                size={24}
                onPress={() => navigation.openDrawer()}
                style={{ marginRight: 12 }} /></>
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
          headerTransparent: false,
          headerStyle: {
            backgroundColor: 'rgba(255,255,255,1)',
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
              color={colorMode==light?"#fff":"#121212"}
              size={40}
              onPress={() => navigation.navigate('Home')}
              style={{ marginLeft: 4,marginBottom:10 }} />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'menu'}
              color={colorMode==light?"#fff":"#121212"}
              size={24}
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 16 }} />
              

          ),
          backgroundColor: '#fff',
        })} />
        <Stack.Screen
        name="Cart"
        component={Placeholder}
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
    </Stack.Navigator></>:
    <Stack.Navigator>
    <Stack.Screen
      name="maintop"
      component={AlbumScreen}
      options={{
        //alignItems:'center',
        title: " Home",headerShadowVisible: false,
        headerShown:false,
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
          <><MaterialCommunityIcons
            name={'cart-variant'}
            color={{marginRight: 12, color: colorMode == "light" ? "#121212" : '#fff'}}
            size={24}
            onPress={() => navigation.navigate('Cart')}
            style={{ marginRight: 10 }} /><MaterialCommunityIcons
              name={'menu'}
              size={24}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 12, color: colorMode == "light" ? "#121212" : '#fff' }} /></>
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
            style={{ marginLeft: 0,marginTop:'10%'}} />
        ),
        headerRight: () => (
          <><MaterialCommunityIcons
            name={'cart-variant'}
            color={"#fff"}
            size={24}
            onPress={() => navigation.navigate('Cart')}
            style={{ marginRight: 10 }} /><MaterialCommunityIcons
              name={'menu'}
              color={"#fff"}
              size={24}
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 0 }} /></>

        ),
        backgroundColor: '#fff',
      })} />
       <Stack.Screen
        name="Cart"
        component={CartScreen}
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
const MainPage = ({navigation}) => {
  const callback = () => isLoaded=true;
  useDelay(5000, callback);

  if(!isLoaded){

  return(<>
    <Tabs />
    <LoadingIndicator />
    </>)
  }

  return (
    <Tabs />
  );

}
const Placeholder = ({navigation}) => {

  return null

}


const Regi = ({navigation}) => {
  const dispatch = useDispatch();

  const user = useSelector( state => state.user );
  const [newUsername, setNewUsername] = useState('');
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');

  useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged(user=>{
        if(user){
          navigation.navigate('Home')
        }
      })
      return unsubscribe
  },[])




  const handleSignUp =() =>{
    auth
      .createUserWithEmailAndPassword(email,pass)
      .then(userCredential =>{
        const user =userCredential.user;
        console.log('Registered as',user.email);
      })
      .catch(error => alert(error.message))
  }
  const handleLogin =() =>{
    auth
    .signInWithEmailAndPassword(email,pass)
    .then(userCredential =>{
      const user =userCredential.user;
      console.log('Logged in as',user.email);
    })
    .catch(error => alert(error.message))


  }


  const SignIn = () => {
  // in case the username hasnt been updated
  if(newUsername === '') {alert('username is empty');return}
  else if(email === ''){alert('email is empty');return}
  else if(pass === ''){alert('password is empty'); return}
  else{dispatch( updateUsername(newUsername) );handleLogin;}
  
}

  
  return (
    <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={ArgonOnboard.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block safe flex middle>
            <Block style={styles.registerContainer}>
              {/* <Block flex={0.25} middle style={styles.socialConnect}>
                <Text color="#8898AA" size={12}>
                  Sign up with
                </Text>
                <Block row style={{ marginTop: theme.SIZES.BASE }}>
                  <Button style={{ ...styles.socialButtons, marginRight: 30 }}>
                    <Block row>
                      <Icon
                        name="logo-github"
                        family="Ionicon"
                        size={14}
                        color={"black"}
                        style={{ marginTop: 2, marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>GUDHUB</Text>
                    </Block>
                  </Button>
                  <Button style={styles.socialButtons}>
                    <Block row>
                      <Icon
                        name="logo-google"
                        family="Ionicon"
                        size={14}
                        color={"black"}
                        style={{ marginTop: 2, marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>GOGGLE</Text>
                    </Block>
                  </Button>
                </Block>
              </Block> */}
              <Block flex>
                <Block flex={0.17} middle>
                  <Text color="#8898AA" size={28}>
                    Sign up
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        onChangeText={text => setNewUsername(text)}
                        value={newUsername}
                        placeholder="User Name(optional)"
                        iconContent={
                          <MaterialCommunityIcons
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="face-man"

                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        onChangeText={text => setEmail(text)}
                        value={email}
                        placeholder="Email"
                        iconContent={
                          <MaterialCommunityIcons
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="email-outline"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    {/* <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Email"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block> */}
                    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        onChangeText={text => setPass(text)}
                        value={pass}
                        placeholder="Password"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                      <Block row style={styles.passwordCheck}>
                        {/* <Text size={12} color={argonTheme.COLORS.MUTED}>
                          password strength:
                        </Text>
                        <Text bold size={12} color={argonTheme.COLORS.SUCCESS}>
                          {" "}
                          strong
                        </Text> */}
                      </Block>
                    </Block>
                    <Block row width={width * 0.75}>
                      {/* <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={argonTheme.COLORS.PRIMARY}
                        label="I agree with the"
                      />
                      <Button
                        style={{ width: 100 }}
                        color="transparent"
                        textStyle={{
                          color: argonTheme.COLORS.PRIMARY,
                          fontSize: 14
                        }}
                      >
                        Privacy Policy
                      </Button> */}
                    </Block>
                    <Block middle>
                      <Button onPress={handleLogin} color="secondary" style={styles.createButton}>
                        <Text bold size={16} color={argonTheme.COLORS.WHITE}>
                         SignIn
                        </Text>
                      </Button>
                  <Text color="#8898AA" size={14} style={{margin:1}}>
                    Or 
                  </Text>
                  <Button onPress={handleSignUp} color="primary" style={styles.createButton2}>
                        <Text bold size={16} color={argonTheme.COLORS.WHITE}>
                          Register
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
  );

}



const Onboarding = ({navigation}) => {

  if(isLoaded)
  isLoaded=false;

  return (
    <Block flex style={styles.container2}>
    <StatusBar hidden />
    <Block flex center>
    <ImageBackground
        source={ArgonOnboard.Onboarding}
        style={{ height, width, zIndex: 1 }}
      />
    </Block>
    <Block center>
      <Image source={ArgonOnboard.LogoOnboarding} style={styles.logo} />
    </Block>
    <Block flex space="between" style={styles.padded}>
        <Block flex space="around" style={{ zIndex: 2 }}>
          <Block style={styles.title}>
            <Block>
              <Text  color="white" size={45} style={{fontFamily:fontsLoaded?'Alegreya Sans SC':'Roboto',}}>
                Cellular
              </Text>
            </Block>
            <Block>
              <Text color="white" size={45} style={{fontFamily:fontsLoaded?'Alegreya Sans SC':'Roboto',}}>
                Network
              </Text>
            </Block>
            <Block style={styles.subTitle}>
              <Text color="white" size={16}>
                Unlimited posibilities, in your pocket.
              </Text>
            </Block>
          </Block>
          <Block center>
            <Button
              style={styles.button}
              color={"secondary"}
              onPress={() => navigation.navigate('Login')}
              textStyle={{ color: 'white',fontWeight:'700' }}
            >
              Get Started
            </Button>
          </Block>
      </Block>
    </Block>
  </Block>
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
  registerContainer: {
    width: width * 0.9,
    height: height * 0.7,
    backgroundColor: "#F4F5F7",
    borderRadius: 28,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  },
  createButton2: {
    width: width * 0.5,
  },
  container2: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  logo: {
    width: 250,
    height: 75,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%'
  },
  title: {
    marginTop:'-5%'
  },
  subTitle: {
    marginTop: 20
  }
});

