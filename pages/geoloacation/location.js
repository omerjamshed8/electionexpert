import React,{createContext, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import CompA from './android/screens/compA';

const Context=createContext();

function App(){
  const [latitude,setLatitude]=useState(0);
  const [longitude,setLongitude]=useState(0);
  const getLocation=()=>{
    Geolocation.getCurrentPosition(data=>{
      setLatitude(data.coords.latitude);
      setLongitude(data.coords.longitude);
    })
  }

  const clickhandler=()=>{

  }
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <Button onPress={getLocation} title="Get Location"></Button>
      {console.log("latitude",latitude)}
      {console.log("longitude",longitude)}
      <Context.Provider value={{latitude,longitude}}>
          <CompA/>
      </Context.Provider>
      <View style={{height:130,width:"97%",position:'relative',borderWidth:1.5,borderRadius:10,marginTop:"5%",justifyContent:'center',alignItems:'center'}}>
                <View style={{flexDirection:"row"}}>
                    <Text style={{color:'#2A2D43',textAlign:'center',textAlignVertical:"center",width:"35%",fontWeight:'400'}}>
                        Hello World
                    </Text>
                    <Text style={{color:'#2A2D43',textAlign:'center',textAlignVertical:"center",width:"35%",fontWeight:'800'}}>
                        August 17,2021
                    </Text>
                    <View style={{flexDirection:'column'}}>
                        <TouchableOpacity style={[styles.appButtonContainerLarge,{borderColor:'#F2385F'}]} onPress={clickhandler}>
                                <Text style={styles.appButtonTextLarge}>Invalid</Text>
                        </TouchableOpacity>
                    </View>
                 </View>
            </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appButtonContainer:{
    width:80,
    height:30,
    backgroundColor:'#F2385F',
    borderRadius:8,
    justifyContent:"center"
},
appButtonText:{
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center'
},
appButtonContainerLarge:{
    padding:2,
    width:'auto',
    height:'auto',
    backgroundColor:'#F2385F',
    borderRadius:8,
    justifyContent:"center",
    alignItems:'center',
    margin:"5%"
},
appButtonTextLarge:{
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    fontWeight:'bold',
    fontSize:15,
    color:'white'
}
});

export default App;
export {Context};