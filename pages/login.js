import React,{useRef, useState} from "react";
import { Text,View, TextInput,StyleSheet, Button,ImageBackground,Dimensions, ScrollView,Alert} from "react-native";
import {  TouchableOpacity} from "react-native";

function Login({navigation}){

    const AppButton = ({ onPress, title,bgColor,textCol }) => (
        <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer,{
            // backgroundColor:bgColor?bgColor : 'white',
            backgroundColor: '#0f9b0f',
            marginLeft:70,
            // borderColor:'black',
            borderWidth:0
        }]}>
          <Text style={[styles.appButtonText,{color:textCol?textCol:'white'}]}>{title}</Text>
        </TouchableOpacity>
      );

    const pressHandler=(event)=>{
        console.log(contactInfo)
        setContactInfo({ ...contactInfo, [event.target.phone]: event.target.value });
        setContactInfo({ ...contactInfo, [event.target.password]: event.target.value });
        // if(contactInfo.email=="")
        // {
        //     Alert.alert("Email field cannot be empty");
        // }
        // else if(!contactInfo.phone.includes('@'&&'.'))
        // {
        //     Alert.alert("Invalid email address");
        // }
        // else if(contactInfo.phone.length>50)
        // {
        //     Alert.alert("Email length should be less than 50 characters");
        // }
        // else if(contactInfo.phone.length<6)
        // {
        //     Alert.alert("Email length must be greater than 6 characters");
        // }
        // else if(contactInfo.password=="")
        // {
        //     Alert.alert("password field cannot be empty");
        // }
        // else if(contactInfo.password.length>50)
        // {
        //     Alert.alert("password field cannot be greater than 50 characters");
        // }
        // else if(contactInfo.password.length<6)
        // {
        //     Alert.alert("password length must be greater than 6 characters");
        // }
        // else
        // {
        //     navigation.navigate('Home');
        // }
        navigation.navigate('Home');

    }

    const [contactInfo,setContactInfo]=useState({
        phone:"",
        password:""
    });
    
    //   const nameRef = useRef();

    return(
        <View style={styles.container}>
            <ImageBackground source={require('./images/wng1.png')}  style={styles.img}>
                <Text style={{fontWeight:'bold',fontSize:30,marginTop:220,marginLeft:130,color:'white'}}>Login</Text>
                <Text style={{marginLeft:100,marginTop:6,color:'white'}}>Login to your account</Text>
                <Text>{'\n'}</Text>
                {/* <Text>Enter Your phone: </Text> */}
                <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <TextInput 
                    style={styles.input} 
                    placeholder='Email/Phone' 
                    onChangeText={e => setContactInfo({...contactInfo, phone: e})}
                    keyboardType='numeric'
                />

                {/* <Text style={styles.container, styles.top}>Enter Your Password: </Text> */}
                <TextInput 
                    secureTextEntry={true}
                    style={styles.input} 
                    placeholder='Password' 
                    onChangeText={e => setContactInfo({...contactInfo, password: e})}
                    keyboardType='default'
                />
                <Text style={{marginLeft:70,marginTop:10,color:'white'}}>Forgot your Password? Click here</Text>
                <AppButton title={"Sign In"} onPress={pressHandler} bgColor='#D9CB50' textCol='white'/>
                </ScrollView>
                <Text>{contactInfo.phone} {contactInfo.password}</Text>
            </ImageBackground>
        </View>
    );
}

export default Login;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        borderRadius:15,
        backgroundColor:'#E5E4E2',
        padding:8,
        marginTop:14,
        width:300,
        marginLeft:25,
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
      marginLeft:45,
      backgroundColor: "#D9CB50",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginTop:20,
      width:200,
      borderColor:'black'
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    contentContainer: {
        paddingVertical: 6
      },
    img:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,width:'100%',
        flex: 1,
        justifyContent: 'center'
    }
})