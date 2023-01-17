import React from "react";
import { Text,View,StyleSheet,Dimensions, ImageBackground } from "react-native";
import { Button } from "react-native";
import Settings from "./settings";
import History from "./searchhistory";
import {  TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-ionicons";


function Menu({navigation}){
    
    const AppButton = ({ onPress, title,bgColor,textCol,source,icon}) => (
        <TouchableOpacity onPress={() => navigation.navigate(source)} style={[styles.appButtonContainer,{
            backgroundColor:bgColor?bgColor : 'white',
            borderColor:'black',
        }]}>
            {/* color:textCol?textCol:'white' */}
            <Text style={[styles.appButtonText,{color:'white'}]}>
                <Ionicons name={icon} size={20} color="white" />
                <Text>  </Text>
                {title}
            </Text>
        </TouchableOpacity>
      );


    const clickHandler= ()=>{
    }

    const Logout=()=>{
        navigation.navigate('Front')
    }
    return(
        <View style={{flex:1}}>
            <ImageBackground source={require('./images/homeimage.jpg')} style={styles.img}>
                <View style={{ flex : 1, justifyContent : 'flex-start',alignItems:'center',marginTop:"50%"}}>
                    <Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:35}}>Election Expert</Text>
                    </View>
                    <View style={{flex:1,justifyContent:'flex-end',alignItems:'center',marginBottom:'30%'}}>
                    <AppButton title={"Settings"} onPress={clickHandler} source='Settings' bgColor='#0f9b0f' textCol='white' icon={"settings"} />
                    <AppButton title={"History"} onPress={clickHandler} source='History' bgColor='#0f9b0f' textCol='white' icon={"search"}/>
                    {/* <AppButton title={"Favorites"} onPress={clickHandler} source='Favorites' bgColor='#0f9b0f' textCol='white' icon={"heart"}/> */}
                    <AppButton title={"Logout"} onPress={clickHandler} source='Front' bgColor='#0f9b0f' textCol='white' icon={"home"}/>
                    </View>
            </ImageBackground>
        </View>
    )
}
export default Menu;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
    },
    sub:{
        backgroundColor:'#ffffff',
        marginTop:20
    },
    top:{
        marginTop:10,

    },
    appButtonContainer: {
        borderColor:'black',
        color:'green',
        elevation: 8,
        backgroundColor: "#D9CB50",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 2,
        marginTop:12,
        width:200,
    },
    appButtonText: {
      fontSize: 18,
      color:'grey',
      fontWeight: "bold",
    //   alignSelf: "center",
      textTransform: "uppercase",
      textAlign:'center'
    },
    img:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,width:'100%',
        flex: 1,
        // justifyContent: 'center',
        // alignItems:'center'
    }
})