import React from 'react';
import {View, StyleSheet} from 'react-native';
import Home from './Home';
import AddProduct from './AddProduct';


const TabsNavigation = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AddProduct" component={AddProduct} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({})

export default TabsNavigation;
