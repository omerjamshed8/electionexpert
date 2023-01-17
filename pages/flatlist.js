import React,{useEffect,useState} from 'react';
import {View,Text,StyleSheet,SafeAreaView, FlatList, Button} from 'react-native';
import Sourcedata from './sourcedata';

const HookEffect=({route,navigation})=>{
    const [myUserData,setMyUserData]=useState();
    const [isLoaded,setIsLoaded]=useState(true);
    // console.log("param= ",route.params.query);
    const getUserData=async()=>{
        const query=route.params.query;
        try{
            setIsLoading(true)
            const response=await fetch(
                "https://vertex.plabesk.com/api/usman/search-data?cnic="+query
            );
            setIsLoading(false)
            // console.log(await response.h5())
            const myData=await response.json();
            console.log('*************')
            console.log("myData==================== ",myData)
            if(!myData.error) {
                setMyUserData(myData.response);
                console.log("my data= ",myData.response);
            }
            else{
                console.log("Error finding data");
            }   
        }
        catch(error){
            console.log(error);
        }
    };
    useEffect(()=>{
        getUserData();
    },[]);

    const Presshandler=()=>{
        navigation.navigate('Sourcedata',{
            source:myUserData.response,
        })
    }
    return(
        <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            {/* <View>
                <Text>
                    {myUserData.response.cnic} {'\n'}
                    {myUserData.response.name} {'\n'}
                    {myUserData.response.age}  {'\n'}
                    {myUserData.response.address} {'\n'}
                    {myUserData.response.block_code} {'\n'}
                </Text>
             </View> */}

            {/* <View style={{flexDirection:'column',justifyContent:'flex-start',backgroundColor:'silver'}}>
                <Text style={[styles.nadraT]}>  نام:  {myUserData.response.name}</Text>
                <Text style={[styles.nadraT]}>گھرانہ نمبر:  {myUserData.response.block_code}</Text>
                <Text style={[styles.nadraT]}>عمر:  {myUserData.response.age}</Text>
                <Text style={[styles.nadraT]}>شناختی کارڈ نمبر :    {myUserData.response.cnic}</Text>
                <Text style={[styles.nadraT]}>سلسلہ نمبر :  {myUserData.response.silsila_no}</Text>
            </View> */}

            <Button onPress={Presshandler} title="Press"/>


            {/* {myUserData &&
                <Text style={{margin:100}}>
                    گھرانہ نمبر {myUserData.response.cnic} {'\n'}
                    {myUserData.response.name} {'\n'}
                    {myUserData.response.age}  {'\n'}
                    {myUserData.response.address} {'\n'}
                    {myUserData.response.block_code} {'\n'}
                </Text>
            } */}
        </SafeAreaView>
    )
}

export default HookEffect;


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
        fontSize:20,
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
