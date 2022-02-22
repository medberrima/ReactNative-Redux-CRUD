import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  SafeAreaView,
} from 'react-native';
import { deleteProduct } from '../actions/products';
import store from './../store';
import FlatButton from './../shared/button';

const ProductDetail = ({route, navigation}) => {

  const setStarts = (rank) => {
    const starts = []
    for (let i = 0; i < parseInt(rank); i++) starts.push( <Image style={styles.star} key={i} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>)
    return starts
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{alignItems:'center', marginHorizontal:30}}>
          <Image style={styles.productImg} source={{uri: route.params.image}}/>
          <Text style={styles.description}> {route.params.category} </Text>
          <Text style={styles.name}>{route.params.nom.substr(0,20)}</Text>
          <Text style={styles.price}>$ {route.params.price}</Text>
          <Text style={styles.description}> {route.params.description} </Text>
        </View>
        <View style={styles.starContainer}>
          {setStarts(route.params.rating)}
          <Text>({route.params.rating})</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={{ flexDirection:'row'}}>
          <FlatButton 
            text='Delete'
            onPress ={() => {
              store.dispatch(deleteProduct(route.params.id))
              navigation.navigate('Home')
            }} 
          />
          <FlatButton text='Update' onPress ={() => {navigation.navigate('UpdateProduct',route.params)}} /> 
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  productImg:{
    width:300,
    height:300,
    marginBottom:10
  },
  name:{
    fontSize:28,
    color:"#696969",
    fontWeight:'bold'
  },
  price:{
    marginTop:10,
    fontSize:18,
    color:"green",
    fontWeight:'bold'
  },
  description:{
    textAlign:'center',
    marginTop:10,
    color:"#696969",
  },
  star:{
    width:40,
    height:40,
  },
  starContainer:{
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20,
    alignItems: 'center',
  },
  contentColors:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  separator:{
    height:2,
    backgroundColor:"#eeeeee",
    marginTop:20,
    marginHorizontal:30
  },
})

export default ProductDetail;
