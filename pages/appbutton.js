import React from "react";
import { Text,View, TextInput,StyleSheet, Button,ImageBackground} from "react-native";
import {  TouchableOpacity} from "react-native";

const AppButton = ({ onPress, title,bgColor,textCol }) => (
    <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer,{
        backgroundColor:bgColor?bgColor : 'white',
        marginLeft:26,
        width:300,
        // width:{size},
    }]}>
      <Text style={[styles.appButtonText,{color:textCol?textCol:'white'}]}>{title}</Text>
    </TouchableOpacity>
  );
  export default AppButton;

  const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
    },
    sub:{
        marginLeft:100,
        backgroundColor:'#ffffff',
        marginTop:20
    },
    top:{
        marginTop:10,

    },
    appButtonContainer: {
        color:'green',
      elevation: 8,
      backgroundColor: "#D9CB50",
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginTop:20,
      width:200,
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
})