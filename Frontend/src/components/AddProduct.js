import { Formik } from 'formik';
import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, TextInput, Text, SafeAreaView, ScrollView } from 'react-native';
import { globalStyles } from './../styles/globale';
import * as yup from 'yup';
import FlatButton from '../shared/button';
import store from './../store';
import { addProduct } from '../actions/products';

const ReviewSchema = yup.object({
  nom: yup.string()
    .required()
    .min(4),
  description: yup.string()
    .required()
    .min(2),
  category: yup.string()
    .required()
    .min(2),
  image: yup.string()
    .required()
    .min(5),
  price: yup.number()
    .required()
    .min(1),
  rating: yup.number()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val)>0
    })
});
const AddProduct = ({navigation}) => {

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView>
        <ScrollView>
          <View style={globalStyles.container}>
            <Formik
              initialValues={ {
                "nom": "",
                "description": "",
                "category": "",
                "image": "",
                "price": "",
                "rating": "",
              }}
              validationSchema={ReviewSchema}
              onSubmit={(values, actions) => {
                store.dispatch(addProduct(values));
                actions.resetForm();
                navigation.navigate('Home');
              }}
            >
              {(props)=>(
                <View>
                  <TextInput 
                    style={globalStyles.input}
                    placeholder= ' nom'
                    onChangeText={props.handleChange('nom')}
                    value={props.values.nom}
                    onBlur={props.handleBlur('nom')}
                  />
                  <Text style={globalStyles.errorText }>{props.touched.nom &&props.errors.nom}</Text>
                  <TextInput 
                    style={globalStyles.input}
                    placeholder= 'description'
                    multiline
                    numberOfLines={5}
                    onChangeText={props.handleChange('description')}
                    value={props.values.description}
                    onBlur={props.handleBlur('description')}
                  />
                  <Text style={globalStyles.errorText }>{props.touched.description &&props.errors.description}</Text>
                  <TextInput 
                    style={globalStyles.input}
                    placeholder= 'category'
                    onChangeText={props.handleChange('category')}
                    value={props.values.category}
                    onBlur={props.handleBlur('category')}
                  />
                  <Text style={globalStyles.errorText }>{props.touched.category &&props.errors.category}</Text>
                  <TextInput 
                    style={globalStyles.input}
                    placeholder= 'image'
                    multiline
                    numberOfLines={3}
                    onChangeText={props.handleChange('image')}
                    value={props.values.image}
                    onBlur={props.handleBlur('image')}
                  />
                  <Text style={globalStyles.errorText }>{props.touched.image &&props.errors.image}</Text>
                  <TextInput 
                    keyboardType='numeric'
                    placeholder= ' price'
                    style={globalStyles.input}
                    onChangeText={props.handleChange('price')}
                    value={props.values.price}
                    onBlur={props.handleBlur('price')}
                  />
                  <Text style={globalStyles.errorText }>{props.touched.price && props.errors.price}</Text>
                  <TextInput 
                    keyboardType='numeric'
                    placeholder= ' rating'
                    style={globalStyles.input}
                    onChangeText={props.handleChange('rating')}
                    value={props.values.rating}
                    onBlur={props.handleBlur('rating')}
                  />
                  <Text style={globalStyles.errorText }>{props.touched.rating && props.errors.rating}</Text>

                  <FlatButton  text='add' onPress={props.handleSubmit} />
                </View>
              )
              }
            </Formik>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({})

export default AddProduct;
