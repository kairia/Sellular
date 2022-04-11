import React from 'react';
import { ImageBackground,StyleSheet, View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

var containerSize=[100,150,200]
var ad=[
  require('../images/Spoons.jpg'),
  require('../images/Keyboard.jpg'),
  require('../images/Shoe.jpg'),
  require('../images/Pot.jpg'),
  require('../images/Glass.jpg'),
  require('../images/Headphone.jpg'),
  require('../images/Cup.jpg'),
  require('../images/Glass.jpg'),
  require('../images/Typewritter.jpg'),
  require('../images/Lens.jpg'),
  require('../images/Watch.jpg'),
];

export default function Example() {
  const [items, setItems] = React.useState([
    { name: '$150', code: '@EDC624',type:1,image:0 },
    { name: '$90', code: '@Confidave',type:2 ,image:1},
    { name: '$250', code: '@abs0lut' ,type:2,image:2},
    { name: '$300', code: '@tranquility' ,type:1,image:3},
    { name: '$500', code: '@SedorsX' ,type:1,image:4},
    { name: '$300', code: '@Admiean',type:2 ,image:5},
    { name: '$110', code: '@UserXX' ,type:2,image:6},
    { name: '$60', code: '@ZER0w' ,type:1,image:7},
    { name: '$700', code: '@Accute',type:1 ,image:8},
    { name: '$1200', code: '@Jasmine',type:2 ,image:9},
    // { name: 'SUN FLOWER', code: '#f1c40f' ,type:2},
    // { name: 'CARROT', code: '#e67e22',type:1 },
    // { name: 'ALIZARIN', code: '#e74c3c',type:1 },
    // { name: 'CLOUDS', code: '#ecf0f1',type:2 },
    // { name: 'CONCRETE', code: '#95a5a6',type:2 },
    // { name: 'ORANGE', code: '#f39c12',type:1 },
    // { name: 'PUMPKIN', code: '#d35400',type:1 },
    // { name: 'POMEGRANATE', code: '#c0392b',type:2 },
    // { name: 'SILVER', code: '#bdc3c7' ,type:2},
    // { name: 'ASBESTOS', code: '#7f8c8d',type:1 },
  ]);

  return (
    <FlatGrid
      itemDimension={150}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: "#9BA5FF",height:containerSize[item.type] }]}>
          <ImageBackground source={ad[item.image]} imageStyle={{borderRadius:15,opacity:0.4}} style={{flex:1,justifyContent:"flex-end",  resizeMode: 'cover',padding:10}}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
          </ImageBackground>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 0,
    paddingBottom:100,
    marginHorizontal:10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 15,
    height: 150,
    marginVertical:-10
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});