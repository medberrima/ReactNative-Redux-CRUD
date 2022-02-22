import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const FlatButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.btnText}>{ text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal:50,
    backgroundColor: '#f01d71',
    marginHorizontal: 20 ,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform:'uppercase',
    fontSize: 16,
    textAlign: 'center'
  }
})

export default FlatButton;
