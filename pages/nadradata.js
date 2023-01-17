import React from "react";
import { Animated,Text,View,StyleSheet,ScrollView,Image,TouchableHighlight } from "react-native";
import Buttons from './likebutton'; 
import Lightbox from 'react-native-lightbox-v2';
// import Lightbox from 'react-native-lightbox-v2';

function NadraData(){

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  const imagePressHandler=()=>{
    <View>
      <Image></Image>
    </View>
  }

  // var source;
  const showFullimg=(source)=>{
    console.log(source);
    //  Animated.timing(new Animated.Value(0), 
    //     {
    //       toValue: 1,
    //       duration: 500,
    //       easing: Easing.linear,
    //       useNativeDriver: false //make it as false
    //     }).start();

    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Lightbox>
          <Image source={source} resizeMode={[styles.nadraimg1,{marginLeft:40}]}/>
        </Lightbox>
        {/* <Text style={{fontSize: 30}}>{source}</Text> */}
        {/* <Image source={source} style={{height:100,width:100}}/> */}
      </View>
    )
  }

  const Nadracontent=(props)=>{
    // source={props}
    const { source } = props
    // console.log(source);

    return(
      // <View>
      // <TouchableHighlight onPress={() => showFullimg(source)}>
      <View>
      <View style={{flexDirection:'row'}}>
        <Lightbox>
          <Image source={require('./images/nadraimg1.jpg')} style={[styles.nadraimg1,{marginLeft:40}]} resizeMode='contain'/>
        </Lightbox>  
        <Text style={[styles.nadraT,{flex:1}]}>{props.tex}</Text>
      </View>
      </View>
      // <View style={{flexDirection:'row'}}>
        //     <Image source={props.source} style={[styles.nadraimg1,{marginLeft:40}]}/>
        //     <Text style={[styles.nadraT,{flex:1}]}>{props.tex}</Text>
        // </View>
    //     </TouchableHighlight>
    // </View>
    )
}
let color=generateColor()
  return(
          <View style={[styles.nadra,{backgroundColor:'silver',borderColor:'black',borderWidth:2}]}>
            <ScrollView>
                <View style={[styles.nadra,{backgroundColor:'silver', flexDirection: 'row',justifyContent:'space-between'}]}>
                    <Image source={require('./images/pakimg.png')} style={styles.nadraimg}/>
                    <Image source={require('./images/pakimg2.jpg')} style={styles.nadraimg}/>
                </View>
                <Nadracontent source={require('./images/nadraimg1.jpg')} tex='خاندان نمبر '/>
                <Nadracontent source={require('./images/nadraimg1.jpg')} tex='نام'/>
                <Nadracontent source={require('./images/nadraimg1.jpg')} tex='والد کا نام '/>
                <Nadracontent source={require('./images/nadraimg1.jpg')} tex='شناختی نمبر '/>
                <Nadracontent source={require('./images/nadraimg2.jpg')} tex='پتہ'/>
                <Nadracontent source={require('./images/nadraimg1.jpg')} tex='فون نمبر '/>
                <Nadracontent source={require('./images/nadraimg1.jpg')} tex='صنف'/>
                <Buttons/>
              </ScrollView>
            </View>
    )
  }
export default NadraData;

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
        // height:10,
        width:200,
        top:10,
        left:70,
    },
    contentContainer: {
        marginTop:200,//isko 250 krna hai
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



        // borderRadius:10,
        // textAlign:'right',
        // fontWeight:20,
        // marginTop:20,
        // backgroundColor:'#EFEFEF'




        // width: 250,
        // border: 15,
        // borderColor:'green',
        // padding: 50,
        // marginLeft: 20,
      },
      nadraT:{
        fontWeight:'bold',
        fontSize:15,
        marginBottom:20,
        marginRight:20,
        paddingLeft:0, 


        // fontWeight:'bold',
        // fontSize:15,
        // marginBottom:0,   //4
        // marginRight:20,
        // paddingLeft:30
      },
      nadraimg:{
        // marginRight:20,
        width:40,
        height:30,
        padding:5,
        margin:20,
        // flexDirection: 'row',
      },
      nadraimg1:{
        // marginRight:20,
        marginLeft:30,
        width:160,
        height:35,
        marginBottom:10,
        // padding:10,
        // marginLeft:100,
        flexDirection:'row',
        // flexDirection: 'row',
      }
})
