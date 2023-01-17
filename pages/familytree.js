import React from "react";
import { Text,View,StyleSheet,Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import { Button } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Buttons from "./likebutton";
import NadraData from "./nadradata";

function Familytree(){

    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0');
          if(randomColor==='black'){
            generateColor();
          }
        return `#${randomColor}`;
      };

    const Nadracontent=(props)=>{
        return(
            <View style={{flexDirection:'row'}}>
                <Image source={props.source} style={[styles.nadraimg1,{marginLeft:40}]}/>
                <Text style={[styles.nadraT,{flex:1}]}>{props.tex}</Text>
            </View>
        )
    }
    const Nadracomp=(props)=>{
        let color=generateColor();
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

            // <View>
                // <Text>{'\n'}</Text>
             // <View style={[styles.nadra,{backgroundColor:'silver'}]}>    <---
                //     <View style={{ backgroundColor:'silver', flexDirection: 'row',justifyContent:'space-between'}}>
                //         <Image source={require('./images/pakimg.png')} style={styles.nadraimg}/>
                //         <Image source={require('./images/pakimg2.jpg')} style={styles.nadraimg}/>
                //     </View>
                //     <Nadracontent source={require('./images/nadraimg1.jpg')} tex='خاندان نمبر '/>
                //     <Nadracontent source={require('./images/nadraimg1.jpg')} tex='نام'/>
                //     <Nadracontent source={require('./images/nadraimg1.jpg')} tex='والد کا نام '/>
                //     <Nadracontent source={require('./images/nadraimg1.jpg')} tex='شناختی نمبر '/>
                //     <Nadracontent source={require('./images/nadraimg2.jpg')} tex='پتہ'/>
                //     <Nadracontent source={require('./images/nadraimg1.jpg')} tex='فون نمبر '/>
                //     <Nadracontent source={require('./images/nadraimg1.jpg')} tex='صنف'/>
                //     <Buttons/>
                // </View> <---
            // </View>
        )
    }
    return(
        <View style={{flex:1,justifyContent:'center',margin:30}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <NadraData/>
              <NadraData/>
              <NadraData/>
              <NadraData/>
                {/* <Nadracomp/>
                <Nadracomp/>
                <Nadracomp/>
                <Nadracomp/> */}
                {/* <View>
                    <Text>
                        {'\n'}
                    </Text>
                </View> */}
            </ScrollView>
        </View>
    )
}
export default Familytree;

const styles=StyleSheet.create({
    // item:{
    //     position:'absolute',
    //     left:40,
    //     top:150,
    // },
    // img:{
    //     position:'absolute',
    //     // height:10,
    //     width:200,
    //     top:10,
    //     left:70,
    // },
    // contentContainer: {
    //     marginTop:200,//isko 250 krna hai
    //     paddingVertical: 10
    //   },
      nadra:{
        marginLeft:30,
        marginRight:30,
        marginBottom:10,
        borderRadius:20,
        textAlign:'right',
        fontWeight:20,
        marginTop:10,
        backgroundColor:'silver',
        // borderWidth:2
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
        paddingLeft:0,                                 //20
    },
      nadraimg:{
        // marginRight:20,
        width:40,
        height:30,
        padding:5,
        margin:20,
        marginHorizontal:-10,
        marginVertical:5
        // flexDirection: 'row',
      },
      nadraimg1:{
        // marginRight:20,
        marginBottom:10,
        marginLeft:0,
        width:150,
        height:40,
        justifyContent:'space-between',
        // padding:10,
        // marginLeft:100,
        // flexDirection:'row',
      }
})