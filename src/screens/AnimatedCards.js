// Inspiration: https://dribbble.com/shots/15057600-Wallpapers-App-Interactions
import { MotiView } from '@motify/components';
import { AnimatePresence } from 'framer-motion';
import {faker} from '@faker-js/faker';
import * as React from 'react';
import { useColorMode } from 'native-base';
import { Animated, Dimensions, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View,Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import LGW from "../images/Linear_Gradient_White.png";


const API_KEY = '563492ad6f91700001000001029c0c9c83fa49fbb4f0622c6d4f6070';
const COLLECTION = 'k4yque3';
// const URL = `https://api.pexels.com/v1/collections/${COLLECTION}`;
const URL = `https://api.pexels.com/v1/search?query=blue&orientation=portrait`;




const { width, height } = Dimensions.get('screen');
import { useFonts } from 'expo-font';


var fontsLoaded = true;

var bg=[
  require("../images/BG_Daysky.jpg"),
  require("../images/BG_Nightsky.jpg"),

]

var headerBgColor =["#fff","#000" ];
var headerTitleColor=["#121212",'#8281D7'];

var containerloc='76%'
const IMAGE_WIDTH = width * 0.8;
const IMAGE_HEIGHT = height * 0.75;
const SPACING = 10;

export default function Wallpapers() {
  const navigation = useNavigation();
  state = {
    fontsLoaded: false,
  };
  

  let [fontsLoaded] = useFonts({
    'Contrail One': require('../../assets/fonts/ContrailOne-Regular.ttf'),
    'Alegreya Sans SC': require('../../assets/fonts/AlegreyaSansSC-Regular.ttf')
  })
  const { colorMode } = useColorMode();
  const [data, setData] = React.useState([]);
  const memoData = React.useRef(null);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    (async function getData() {
      if (!!memoData.current) {
        setData(memoData.current);
        return;
      }

      const data = await fetch(URL, {
        headers: {
          Authorization: API_KEY,
        },
      }).then((x) => x.json());

      // console.log(data[0]);
      memoData.current = data.photos;
      setData(data.photos);
    })();
  }, []);

  return (
    <View
      style={{ flex: 1, backgroundColor: '#000', justifyContent: 'flex-end' }}>
      <StatusBar barStyle='light-content' />
      <AnimatePresence>
        {data.length === 0 && (
          <MotiView
            key='loading'
            from={{ opacity: 0.8, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{
              type: 'timing',
              duration: 1000,
            }}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              width,
              height,
            }}>
            <Text>Loading ...</Text>
          </MotiView>
        )}
      </AnimatePresence>
      <View style={[StyleSheet.absoluteFillObject]}>
        {data.map((item, index) => {
          // doing it faster instead of halfway through
          const inputRange = [index - 0.8, index, index + 0.8];
          const animated = Animated.divide(scrollX, IMAGE_WIDTH + SPACING * 2);

          const opacity = animated.interpolate({
            inputRange,
            outputRange: [0, 0.4, 0],
          });
          const textOpacity = animated.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          const textTranslate = animated.interpolate({
            inputRange,
            outputRange: [200, 0, -200],
          });
          return (
            <SafeAreaView
              key={`bg-item-${item.id}`}
              style={[StyleSheet.absoluteFillObject]}>
              <Animated.Image
                source={ colorMode == "light"?bg[0]:bg[1] }
                style={[StyleSheet.absoluteFillObject, { opacity:0.03 }]}
                blurRadius={10}
              />
              <View
                style={[
                  {
                    top:containerloc,
                    position:'absolute',
                    alignSelf:'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: data.length + 1,
                    marginTop:'3%',
                  },
                ]}>
                  
                <Animated.View
                  style={{
                    opacity: textOpacity,
                    transform: [{ translateX: textTranslate }],
                    marginBottom: 0,
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 20,
                      marginBottom: SPACING / 1,
                      fontWeight: '700',
                      textTransform: 'capitalize',
                    }}>
                    {item.photographer}
                  </Text>
                  
                </Animated.View>
                <Animated.View
                  style={{
                    opacity: textOpacity,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent:'space-around',
                    width:'85%'
                  }}><Text
                    style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}
                    numberOfLines={1}
                    adjustsFontSizeToFit>
                    Now on cell
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 13,
                      fontWeight: '600',
                      marginRight: SPACING,
                    }}>
                  </Text>
                  <ImageBackground
                    source={{ uri: item.src.tiny }}
                    style={{
                      backgroundColor: 'red',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingVertical: SPACING / 2,
                      paddingHorizontal: SPACING,
                      borderRadius: 20,
                      overflow: 'hidden',
                    }}
                    blurRadius={80}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 12,
                        fontWeight: '800',
                      }}>
                      new
                    </Text>
                  </ImageBackground>
                </Animated.View>
              </View><View style={[
                  {
                    top:containerloc,
                    position:'absolute',
                    alignSelf:'center',
                    width:'95%',
                    height:'13%',
                    backgroundColor:'rgba(0,0,0,0.05)',
                    zIndex:5,
                    elevation:0,
                    borderRadius:28,
                    borderColor:'rgba(255,255,255,0.1)',
                    borderWidth:2
                  },
                ]}>

                  </View>
                  <View style={{

                   position:'absolute',
                   width:'100%',
                   height:'100%',
                  }}>
                      <View bg={'transparent'} width="100%" height="13%" style={{backgroundColor: colorMode == "light" ? headerBgColor[0] : headerBgColor[1], flex: 1,justifyContent:'space-between',flexDirection:'row'}}>
  <Text
     style={{
       color: colorMode == "light" ? headerTitleColor[0] : headerTitleColor[1],
       fontFamily: fontsLoaded ? 'Contrail One' : 'Roboto',
       fontSize: 48,
       alignSelf:'center',
       marginLeft:'5%',
       marginTop:'6%'
     }}>Explore</Text>
     <MaterialCommunityIcons
             name={'cart-variant'}
             size={24}
             onPress={() =>  navigation.navigate('Cart')}
             style={{ alignSelf:'center',marginRight:'-30%'}}
             color={colorMode == "light"?'#121212':'#fff'} />
   <MaterialCommunityIcons
     color={colorMode == "light" ? '#000' : '#fff'}
     name={'menu'}
     size={24}
     onPress={() => navigation.openDrawer()}
     style={{ alignSelf:'center',marginRight:'8%' }} />
 </View>
    <View height='100%' width='100%' style={{ backgroundColor: 'transparent', flex: 6, justifyContent: 'center', paddingBottom: '30%' }}>

        
      </View>
                  </View>
            </SafeAreaView>
          );
        })}
      </View>
      <Animated.FlatList
        data={data}
        extraData={data}
        keyExtractor={(item) => String(item.id)}
        scrollEventThrottle={16}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: (width - (IMAGE_WIDTH + SPACING * 2)) / 2,
        }}
        style={{ flexGrow: 0, backgroundColor: 'transparent' ,opacity:0.9}}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: true,
          }
        )}
        snapToInterval={IMAGE_WIDTH + SPACING * 2}
        decelerationRate='fast'
        renderItem={({ item, index }) => {
          const inputRange = [index - 1, index, index + 1];
          const animated = Animated.divide(scrollX, IMAGE_WIDTH + SPACING * 2);

          const translateY = animated.interpolate({
            inputRange,
            outputRange: [100, 40, 100],
            extrapolate: 'clamp',
          });
          const scale = animated.interpolate({
            inputRange,
            outputRange: [1.5, 1, 1.5],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              style={{
                width: IMAGE_WIDTH,
                height: IMAGE_HEIGHT,
                transform: [
                  {
                    translateY,
                  },
                ],
                margin: SPACING,
                overflow: 'hidden',
                borderRadius: 30,
              }}>
              <Animated.Image
                style={{
                  borderRadius: 20,
                  width: IMAGE_WIDTH,
                  height: IMAGE_HEIGHT,
                  resizeMode: 'cover',
                  transform: [{ scale }],
                }}
                source={{ uri: item.src.large }}
              />
            </Animated.View>
          );
        }}
      />
    </View>
  );
}
