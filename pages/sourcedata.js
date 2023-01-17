import React from "react";
import { Animated,Text,View,StyleSheet,ScrollView,Image,TouchableHighlight } from "react-native";
import { TouchableOpacity } from "react-native";
import Buttons from './likebutton'; 

function Sourcedata({route},{navigation}){
    console.log("route=",route.params.source);
    const data=route.params.source;
  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  const Nadracontent=(props)=>{
    const { source } = props

    return(
      <View>
      <View style={{flexDirection:'row'}}>
        <Text style={[styles.nadraT,{marginLeft:"20%",position:'relative',fontWeight:"normal"}]}>{props.source}</Text>
        <Text style={[styles.nadraT,{flex:1}]}>{props.tex}</Text>
      </View>
      </View>
    )
}
let color=generateColor()
  return(
    <View style={{flex:1,position:'relative',justifyContent:'center'}}>
          <View style={[styles.nadra,{backgroundColor:'silver',borderColor:'black',borderWidth:2}]}>
            <ScrollView>
                <View style={[styles.nadra,{backgroundColor:'silver', flexDirection: 'row',justifyContent:'space-between'}]}>
                    <Image source={require('./images/pakimg.png')} style={styles.nadraimg}/>
                    <Image source={require('./images/pakimg2.jpg')} style={styles.nadraimg}/>
                </View>
                <Nadracontent source={data.name} tex='نام'/>
                <Nadracontent source={data.cnic} tex='شناختی نمبر '/>
                <Nadracontent source={data.address} tex='پتہ'/>
                <Nadracontent source={data.gharana_no} tex='گھرانہ نمبر:'/>
                <Nadracontent source={data.age} tex='عمر'/>
                {/* <Nadracontent source={route.params.name} tex='خاندان نمبر '/> */}
                {/* <Nadracontent source={route.params.name} tex='والد کا نام '/> */}
                <Buttons/>
              </ScrollView>
            </View>
            </View>
    )
  }
export default Sourcedata;

  const styles=StyleSheet.create({
    appButtonContainer: {
        color:'green',
      elevation: 8,
      backgroundColor: "#D9CB50",
      borderRadius: 20,
      paddingVertical: 2,
      paddingHorizontal: 4,
      marginTop:-30,
      width:130,
    },
    appButtonText: {
      fontSize: 16,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    item:{
        position:'absolute',
        left:40,
        top:150,
    },
    img:{
        position:'absolute',
        width:200,
        top:10,
        left:70,
    },
    contentContainer: {
        marginTop:200,
        paddingVertical: 10
      },
      nadra:{
        marginLeft:0,
        marginRight:0,
        marginBottom:10,
        borderRadius:20,
        textAlign:'right',
        fontWeight:20,
        marginTop:0,
        backgroundColor:'silver',
      },
      nadraT:{
        fontWeight:'bold',
        fontSize:15,
        marginBottom:20,
        marginRight:20,
        paddingLeft:0, 
      },
      nadraimg:{
        width:40,
        height:30,
        padding:5,
        margin:20,
      },
      nadraimg1:{
        marginLeft:30,
        width:160,
        height:35,
        marginBottom:10,
        flexDirection:'row',
      }
})
