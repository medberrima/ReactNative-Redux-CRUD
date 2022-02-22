import React from 'react';
import { StyleSheet, Text, View, StatusBar,} from 'react-native';
import { Provider } from 'react-redux';
import RootNavigator from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/store';
import { getProducts } from './src/actions/products';
import { globalStyles } from './src/styles/globale';
import TabsNavigation from './src/components/TabsNavigation';

const App  = ({navigation})  => {

    store.subscribe(() => {
    console.log("------store changed!");
  })

  // store.dispatch(getProducts());
  
  return (
      <Provider store= {store} >
        <View style={styles.container}>
        <StatusBar
          animated= {true}
          backgroundColor= "#f01d71" 
          // barStyle= {"dark-content"}
        />
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>

        </View>
      </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
