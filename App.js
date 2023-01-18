import * as React from 'react';
import { StyleSheet,Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Register from './pages/register';
import Bottomnav from './pages/bottomnav';
import Login from './pages/login';
import Home from './pages/home.js';
import 'react-native-gesture-handler';
import MyStack from './pages/stack';
import Front from './pages/front';
// import Draw from './pages/menudrawer';
import About from './pages/about';
import History from './pages/searchhistory';
import Draw from './pages/menudrawer';
import Print from './pages/nadrarender';
import HookEffect from './pages/flatlist';
import DataProvider from './pages/DataProvider';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Geolocation from '@react-native-community/geolocation';

const Context=React.createContext();

export default function App() {

  // const [latitude,setLatitude]=useState(0);
  // const [longitude,setLongitude]=useState(0);
  // const getLocation=()=>{
  //   Geolocation.getCurrentPosition(data=>{
  //     setLatitude(data.coords.latitude);
  //     setLongitude(data.coords.longitude);
  //   })
  // }

  // React.useEffect(()=>{
  //   getLocation()
  // },[])

  return (
    // <Bottomnav/>
    // <Context.Provider value={{latitude,longitude}}>
    <DataProvider>
      <MyStack/>
    </DataProvider>
    // </Context.Provider>
    // <HookEffect/>
    //  <Print/>
    );
}

const style=StyleSheet.create({
  
})