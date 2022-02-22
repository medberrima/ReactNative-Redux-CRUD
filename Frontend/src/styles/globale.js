import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
  container:{
    padding:50,
    height:'100%'
  },
  titleText:{
    fontFamily: 'Poppins-Bold',
    fontSize:25,
    color:'#000',
    paddingVertical:10
  },
  paragraph:{
    marginVertical:50,
    lineHeight:20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius:6,
    marginBottom:5
  },
  errorText: {
    color: 'red',
    marginBottom:30,
    fontWeight: 'bold'
  },

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