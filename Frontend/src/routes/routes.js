import * as React from 'react';
import Home from '../components/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetail from '../components/ProductDetail';
import AddProduct from '../components/AddProduct';
import UpdateProduct from './../components/UpdateProduct';
import { Text } from 'react-native';
import { globalStyles } from './../styles/globale';


const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen name="UpdateProduct" component={UpdateProduct} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}