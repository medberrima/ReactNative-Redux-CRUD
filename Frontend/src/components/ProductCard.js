import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CardViewWithImage } from 'react-native-simple-card-view'
import FlatButton from './../shared/button';
const ProductCard = ({item,navigation}) => {
  return (
    <View>
      <CardViewWithImage
      key={item.id}
        width={ (175)}
        source={  {uri: item.image}  }
        content={ 'price :' + item.price +'$' }
        title={ item.nom.substr(0,15) }
        imageWidth={ 100 }
        imageHeight={ 100 }
        imageMargin={ {top: 10} }
        onPress={() => navigation.navigate('ProductDetail',item)}
        roundedImage={ false }
      />
      
    </View>
  );
}

const styles = StyleSheet.create({})

export default ProductCard;
