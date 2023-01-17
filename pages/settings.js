import React,{useCallback,useState} from "react";
import { Text,View,StyleSheet,ImageBackground,Alert,Linking, ScrollView } from "react-native";
import { Button } from "react-native";
import History from "./searchhistory";
import {  TouchableOpacity} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput,ToastAndroid } from "react-native";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";


function Settings({navigation}){

    const AppButton = ({ onPress, title,bgColor,textCol,source,icon}) => (
        <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer,{
            // backgroundColor:bgColor?bgColor : 'white',
            backgroundColor: '#0f9b0f',
            borderColor:'black',
            marginLeft:50,
        }]}>
            {/* color:textCol?textCol:'white' */}
            <Text style={styles.appButtonText}>
                <Text>  </Text>
                {title}
            </Text>
        </TouchableOpacity>
      );


    // const clickHandler= ()=>{
    //     // navigation.navigate('Home')
        
    // }



//     const supportedURL = "https://gmail.com";

//     const unsupportedURL = "slack://open?team=123456";

//     const OpenURLButton = ({ url, children }) => {
//     const handlePress = useCallback(async () => {
//         // Checking if the link is supported for links with custom URL scheme.
//         const supported = await Linking.canOpenURL(url);

//         if (supported) {
//         // Opening the link with some app, if the URL scheme is "http" the web link should be opened
//         // by some browser in the mobile
//         await Linking.openURL(url);
//         } else {
//         Alert.alert(`Don't know how to open this URL: ${url}`);
//         }
//     }, [url]);
//     return <Button title={children} onPress={handlePress} />;
// };

    const pressHandler=(event)=>{
        console.log(contactInfo)
        setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
        setContactInfo({ ...contactInfo, [event.target.email]: event.target.value });
        setContactInfo({ ...contactInfo, [event.target.msg]: event.target.value });
        // alert("Thanks for your feedback")
        ToastAndroid.show("Thanks for your feedback",ToastAndroid.LONG);
    }
    const [contactInfo,setContactInfo]=useState({
        name:"",
        email:"",
        msg:"",
    });


 return(
    <View style={{flex:1}}>
        <ImageBackground style={{width:'100%',flex:1,alignItems:'center'}} source={require('./images/VelvetSun.jpg')}>
        <View style={{marginLeft:10,marginTop:150}}>
            <Text style={{color:'black',fontWeight:'bold',fontSize:30,marginLeft:-100}}>
                Settings
            </Text>
            <Text style={{fontWeight:'bold',fontSize:15,marginLeft:-100}}>For any Query Contact {'\n'}support</Text>
            <Text>{'\n'}</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex:1,marginTop:40}}>
                <View style={{flexDirection:'row',marginLeft:-70,marginBottom:20}}>
                <TextInput 
                    style={styles.input}
                    placeholder="Name"
                    onChangeText={e=>setContactInfo({...contactInfo,name:e})}
                    keyboardType='default'
                    />
                </View>
                {/* <Ionicons name="call-outline" size={40}/>
                <Text style={{color:'maroon',fontSize:20,marginLeft:30}}>0300 00 00 000</Text> */}
                {/* </View> */}

                <View style={{flexDirection:'row',marginLeft:-70,marginBottom:20}}>
                <TextInput placeholder="email" style={styles.input}
                    onChangeText={e=>setContactInfo({...contactInfo,email:e})}
                    />
                {/* <Ionicons name="chatbox-outline" size={40}/>
                <Text style={{color:'maroon',fontSize:20,marginLeft:30}}>Chat with us</Text> */}
                </View>

                <View style={{flexDirection:'row',marginLeft:-70,marginBottom:20}}>
                <TextInput placeholder="Message" style={styles.input}
                    onChangeText={e=>setContactInfo({...contactInfo,msg:e})}
                    multiline={true}
                />
                </View>
        <AppButton title={"Send"} onPress={pressHandler} source='Menu' bgColor='#CA955C' textCol='white'/>
        </View>
        </ScrollView>
        
        {/* <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
      <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton> */}
        
        
        </ImageBackground>
    </View>
 )   
}

export default Settings;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        
        marginLeft:80,
        marginTop:15,
        borderRadius:15,
        borderWidth:1,
        borderColor:'#B9FFF8',
        backgroundColor:'default',
        backgroundColor:'#E5E4E2',
        padding:8,
        marginTop:14,
        width:300,
    },
    sub:{
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
        marginTop:8,
        marginBottom:100,
        width:200,
        borderColor:'black',





        // borderColor:'black',
        // color:'green',
        // elevation: 8,
        // backgroundColor: "#D9CB50",
        // borderRadius: 10,
        // paddingVertical: 10,
        // paddingHorizontal: 12,
        // marginBottom:80,
        // marginTop:8,
        // width:250,
    },
    appButtonText: {
      fontSize: 18,
      color:'white',
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
      textAlign:'center'
    },
    img:{
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center'
    }
})