import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
const Header = () => {

  const openMenu = () => {
    console.log('openMenu handler');
  };
  
  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
      <View>
        <Text style={styles.headerText}> Med Berr </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width:'100%',
    height: 70,
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    flexDirection:'row',
    backgroundColor:'#f01d71',
    padding: 10,
  }
})

export default Header;
