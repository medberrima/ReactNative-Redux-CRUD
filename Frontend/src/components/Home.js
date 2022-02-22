import React, { useEffect } from 'react';
import {View, StyleSheet, FlatList, SafeAreaView, Text, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/products';
import ProductCard from './ProductCard';
import { globalStyles } from './../styles/globale';

const Home = ({ navigation, route}) => {
  const dispatch = useDispatch();
  const { products } = useSelector ((state) => state);

  useEffect(() => {
    dispatch(getProducts());
  },[])

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data= {products}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem = {({item}) => (
          <ProductCard item={item} navigation={navigation} />
          )}
        />
      <Text style={globalStyles.title} onPress={() => navigation.navigate("AddProduct")}>+</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title :{
    backgroundColor:"#f01d71",
    color:"white",
    padding:10,
    width: '100%',
    textAlign:'center',
    fontSize:20,
    position: 'absolute',
    bottom:0,
    left:0,
  }
})

export default Home;
