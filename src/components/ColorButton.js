// Inspiration: https://dribbble.com/shots/17057599-Fashico-Mobile-Prototype-Animation

import * as React from 'react';
import { StatusBar, Pressable, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { MotiView, motify } from 'moti';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  AnonymousPro_700Bold,
} from '@expo-google-fonts/anonymous-pro';

const _colors = {
  gray: '#1D1520',
  white: '#f3f3f3',
};
const menu = [
  { icon: 'rotate-ccw', color: '#33A5E4' },
  { icon: 'youtube', color: '#F73B30' },
  { icon: 'image', color: '#FE63F4' },
];

const extraMenu = [
  { icon: 'award', color: 'turquoise' },
  { icon: 'cast', color: 'salmon' },
];
const _size = 64;
const _iconSize = _size * 0.4;
const _closedOffset = 4;

const MotifyPressable = motify(Pressable)();

const FabButton = ({ menu, size = 64, closedOffset = 4, onPress }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const iconSize = React.useMemo(() => size * 0.4, [size]);
  return (
    <View>
      <View style={{ position: 'absolute' }}>
        {menu.map((menuItem, index) => {
          const _offsetAngle = Math.PI / 3;
          const _radius = size * 1.3;
          // Take the midPoint of the menu
          // Create a reflected index that will have 0 as midPoint and +-1 on sides.
          // Example:
          // 3 items => [-1, 0, 1]
          // 5 items => [-2, -1, 0, 1, 2]
          // In this way we can assign x,y position on the circle.
          const midPoint = Math.floor(menu.length / 2);
          const reflectedIndex = index - midPoint;
          return (
            <MotifyPressable
              key={menuItem.icon}
              onPress={() => {
                setIsOpen((isOpen) => !isOpen);
                onPress(menuItem);
              }}
              animate={{
                translateX:
                  Math.sin(reflectedIndex * _offsetAngle) *
                  (isOpen ? _radius : closedOffset),
                translateY:
                  -Math.cos(reflectedIndex * _offsetAngle) *
                  (isOpen ? _radius : closedOffset),
              }}
              style={[
                styles.circle,
                { backgroundColor: menuItem.color, position: 'absolute' },
                { width: size, height: size, borderRadius: size / 2 },
              ]}
              transition={{
                delay: index * 100,
              }}>
              <Feather
                name={menuItem.icon}
                size={iconSize}
                color={_colors.white}
              />
            </MotifyPressable>
          );
        })}
      </View>
      <MotifyPressable
        onPress={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
        style={[
          styles.circle,
          { backgroundColor: _colors.gray },
          { width: size, height: size, borderRadius: size / 2 },
        ]}
        animate={{
          rotate: isOpen ? '0deg' : '-45deg',
        }}>
        <Feather name="x" size={iconSize} color={_colors.white} />
      </MotifyPressable>
    </View>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({
    AnonymousPro_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View
        style={styles.fabContainer}>
        <FabButton
          menu={menu}
          onPress={(menuItem) => {
            // This will give back the selected MenuItem.
            // Do whatever with it!
            console.log(menuItem.icon);
          }}
          size={_size}
          closedOffset={_closedOffset}
        />
        <Text style={styles.text}>[Default]{'\n'}size: 64{'\n'}closedOffset:4</Text>
      </View>
      <View
        style={styles.fabContainer}>
        <FabButton
          menu={menu}
          onPress={(menuItem) => {
            // This will give back the selected MenuItem.
            // Do whatever with it!
            console.log(menuItem.icon);
          }}
          size={42}
          closedOffset={4}
        />
        <Text style={styles.text}>size: 42{'\n'}closedOffset: 4</Text>
      </View>
      <View
        style={[styles.fabContainer, {justifyContent: 'center', paddingBottom: 0}]}>
        <FabButton
          menu={[...menu, ...extraMenu]}
          onPress={(menuItem) => {
            // This will give back the selected MenuItem.
            // Do whatever with it!
            console.log(menuItem.icon);
          }}
          size={52}
          closedOffset={3}
        />
        <Text style={styles.text}>size: 52{'\n'} closedOffset:3{'\n'}menu: 5 items</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  fabContainer: {
    flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 40, marginBottom: 20
  },
  text: {
    fontFamily: 'AnonymousPro_700Bold',
    position: 'absolute', bottom: 10, right: 10,textAlign: 'right'
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
