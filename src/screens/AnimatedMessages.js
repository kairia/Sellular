import React, { useCallback } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, StyleSheet, FlatList, View, Text, ScrollView } from 'react-native';
import chroma from 'chroma-js';
import {faker} from '@faker-js/faker';
import { Box,useColorMode } from "native-base";
import { useFonts } from 'expo-font';
import Animated, {
  useDerivedValue,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  withTiming,
  interpolate,
  measure,
  useAnimatedRef,
  Extrapolate,
} from 'react-native-reanimated';
import Constants from 'expo-constants';
import LGW from "../images/Linear_Gradient_White_UP.png";
import { ImageBackground } from 'react-native';
var lg=[
  require("../images/Linear_Gradient_White_UP.png"),
  require("../images/Linear_Gradient_DB_UP.png"),

]



var bg=[
  require("../images/BG_Daysky.jpg"),
  require("../images/BG_Nightsky.jpg"),

]

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const colors = chroma.scale(['#e4c7ff', '#73a9ff']).mode('lch').colors(30);
const Bcolors = chroma.scale(['#f5cfff', '#73a9ff']).mode('lch').colors(30);

const _spacing = 20;
var headerBgColor =["#fff","#000" ];
var headerTitleColor=["#121212",'#8281D7'];


faker.seed(30);
const _data = colors.map((color) => {

  
  return {
    key: faker.datatype.uuid(),
    text:faker.lorem.sentences(),
    user:'@'+faker.name.firstName()+faker.random.numeric(4),
    color,
    height: 130,
  };
});
const _Bdata = Bcolors.map((color) => {
  return {
    color
  };
});

var fontsLoaded = true;
const _offset = 0;

const Item = ({ item, index,scrollY, itemY, itemHeight }) => {
  
  const stylez = useAnimatedStyle(() => {
    // console.log(values.value)

   

    return {
      opacity: interpolate(
        scrollY.value,
        [itemY.value - 1, itemY.value, itemY.value + itemHeight.value],
        [1, 1,0]
      ),
      transform: [
        { perspective: itemHeight.value * 4 },
        {
          translateY: interpolate(
            scrollY.value,
            [
              itemY.value - index * _offset ,
              itemY.value - index * _offset,
              itemY.value - index * _offset ,
            ],
            [0, 0, 1]
          ),
        },
        {
          scale: interpolate(
            scrollY.value,
            [itemY.value - 1, itemY.value, itemY.value + itemHeight.value],
            [1, 1, 0]
          ),
        },
        // , {
        //   rotate: `${interpolate(scrollY.value, [itemY.value - index * _offset - 1, itemY.value - index * _offset , itemY.value - index * _offset  + 1], [0, 0, 10], Extrapolate.CLAMP)}deg`,
        // }
      ],
    };
  });
  return (
    <><Animated.View
      style={[
        {
          flex:6,
          backgroundColor: item.color,
          marginBottom: _spacing,
          height: item.height,
          padding: _spacing,
          borderRadius: 28,
          borderColor:'#be60e6',
          borderWidth:2,
          opacity:0.5
        },
        stylez,
      ]}>
        
        
        
        <View style={{flex:1,alignItems:'flex-start',flexDirection:'row' }}>
          {/* <View style={{alignSelf:'center',width:10,height:10,backgroundColor:'#121212',borderRadius:100,marginRight:5}}></View>  */}
        <Text style={{ alignSelf:'center',fontWeight: '800',fontSize:18 }}>
          {item.user}
        </Text>
        </View>
        
        <View style={{flex:2}}>
        <Text style={{ fontWeight: '700',fontSize:15 }}>
          {item.text}
          </Text>
        </View>
      </Animated.View></>
  );
};

const CustomCellRendererComponent = React.memo(({ children, ...props }) => {
  const itemY = useSharedValue(0);
  const itemHeight = useSharedValue(1);
  return (
    <View
      {...props}
      onLayout={(ev) => {
        itemY.value = ev.nativeEvent.layout.y;
        itemHeight.value = ev.nativeEvent.layout.height;
      }}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { itemY, itemHeight });
        }
        return child;
      })}
    </View>
  );
});

export default function App() {
  const navigation = useNavigation();

const { colorMode } = useColorMode();

let [fontsLoaded] = useFonts({
  'Contrail One': require('../../assets/fonts/ContrailOne-Regular.ttf'),
  'Alegreya Sans SC': require('../../assets/fonts/AlegreyaSansSC-Regular.ttf')
})
 const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((ev) => {
    scrollY.value = ev.contentOffset.y;
  });
if(!fontsLoaded) {
  return null;
}

 
  return (
  <>
  
  <View bg={colorMode == "light" ? headerBgColor[0] : headerBgColor[1]} width="100%" height="13%" style={{ backgroundColor: colorMode == "light" ? headerBgColor[0] : headerBgColor[1], flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
    <Text
      style={{
        color: colorMode == "light" ? headerTitleColor[0] : headerTitleColor[1],
        fontFamily: fontsLoaded ? 'Contrail One' : 'Roboto',
        fontSize: 48,
        alignSelf: 'center',
        marginLeft: '5%',
        marginTop: '6%'
      }}>Messages</Text><MaterialCommunityIcons
      name={'cart-variant'}
      size={24}
      onPress={() =>  navigation.navigate('Cart')}
      style={{ alignSelf:'center',marginRight:'-22%'}}
      color={colorMode == "light"?'#121212':'#fff'} />
    <MaterialCommunityIcons
      color={colorMode == "light" ? '#000' : '#fff'}
      name={'menu'}
      size={24}
      onPress={() => navigation.openDrawer()}
      style={{ alignSelf: 'center', marginRight: '8%' }} />
  </View>
  
  <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground source={colorMode == "light"?bg[0]:bg[1]} blurRadius={5} imageStyle={{width:'120%',height:'120%',alignSelf:'center',marginLeft:'-10%'}}>
      <AnimatedFlatList
      style={{opacity:0.5}}
        data={_data}
        keyExtractor={(item) => item.key}
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        CellRendererComponent={CustomCellRendererComponent}
        renderItem={({ item, index }) => {
          return <Item item={item} index={index}  scrollY={scrollY} />;
        } } />

       </ImageBackground>
    </View>
    <View style={{position:'absolute',justifyContent:'center',width:'100%',height:'100%',flexDirection:'column',bottom:'5%'}}>
      <Image alt='lgw' source={colorMode=='light'?lg[0]:lg[1]} style={{top:'-13.5%'}}></Image>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    paddingTop: 0,
    padding: _spacing,
  },
});
