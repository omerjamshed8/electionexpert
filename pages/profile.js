import React,{useState} from "react";
import { Text,View,StyleSheet,ImageBackground,TextInput, ScrollView,Dimensions } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {  TouchableOpacity} from "react-native";

function Profile(){
    const AppButton = ({ onPress, title,bgColor,textCol }) => (
        <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer,{
            // backgroundColor:bgColor?bgColor : 'white',
            backgroundColor: '#0f9b0f',
            marginLeft:100,
            width:150,
            borderWidth:0
            // width:{size},
        }]}>
          <Text style={[styles.appButtonText,{color:textCol?textCol:'white'}]}>{title}</Text>
        </TouchableOpacity>
      );
    
    const pressHandler=(event)=>{
        console.log(contactInfo)
        setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
        setContactInfo({ ...contactInfo, [event.target.password]: event.target.value });
        setContactInfo({ ...contactInfo, [event.target.party]: event.target.value });
    }

    const [contactInfo,setContactInfo]=useState({
        name:"",
        password:"",
        party:""
    });


    return(
        <View style={styles.container}>
            <ImageBackground source={require('./images/greens.jpg')} style={styles.img}>
            <Text style={styles.text}>Profile Edit</Text>
            <Text style={{marginLeft:26}}>Here you can edit your profile {'\n'}</Text>
            <Ionicons 
                name="person-circle-sharp"
                size={100}
                style={{marginLeft:'35%'}}>
            </Ionicons>
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <Text style={{marginLeft:26,fontSize:15}}>Edit Name</Text>
            <TextInput 
                    style={styles.input}  
                    onChangeText={e => setContactInfo({...contactInfo, name: e})}
                    keyboardType='default'
            />
            <Text style={{marginLeft:26,fontSize:15,marginTop:10}}>Change Password</Text>
            <TextInput 
                    style={styles.input}  
                    onChangeText={e => setContactInfo({...contactInfo, password: e})}
                    keyboardType='default'
            />
            <Text style={{marginLeft:26,fontSize:15,marginTop:10}}>Change Party</Text>
            <TextInput 
                    style={styles.input}  
                    onChangeText={e => setContactInfo({...contactInfo, party: e})}
                    keyboardType='default'
            />
            <AppButton title={"Save"} onPress={pressHandler} bgColor='#CA955C' textCol='white'/>
            </ScrollView>
            {/* <Text>{'\n'}</Text> */}
            </ImageBackground>
        </View>
    )
}
export default Profile;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
    },
    img:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,width:'100%',
        flex:1,
        justifyContent:'center'
    },
    text:{
        fontWeight:'bold',
        fontSize:30,
        textAlign:'center',
        marginTop:200,
        marginLeft:-160
    },
    input:{
        
        borderRadius:15,
        // borderTopWidth:0.3,
        // borderLeftWidth:0.5,
        // borderRightWidth:0.5,
        // borderColor:'yellow',
        backgroundColor:'#E5E4E2',
        padding:8,
        marginTop:6,
        width:300,
        marginLeft:25,
        paddingTop:4


        // marginLeft:26,
        // marginTop:15,
        // borderRadius:15,
        // borderWidth:1,
        // borderColor:'black',
        // backgroundColor:'#E5E4E2',
        // padding:8,
        // marginTop:14,
        // width:300,
        // height:40,
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
        
        
        
        
        
        
        
        
    //     color:'green',
    //   elevation: 8,
    //   backgroundColor: "#D9CB50",
    //   borderRadius: 30,
    //   paddingVertical: 10,
    //   paddingHorizontal: 12,
    //   marginTop:20,
    //   width:200,
    //   borderColor:'black',
    //   borderWidth:0.5
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    contentContainer:{
        marginTop:20
    }
})