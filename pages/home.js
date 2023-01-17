import React from "react";
import {View,Text,StyleSheet,Button,Image,ScrollView,SafeAreaView, ImageBackground} from 'react-native';
import CountryFlag from "react-native-country-flag";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from "./search";
import Test from "./test";
import DrawerNavigator  from "./menudrawer";
import HomeScreen from "./homescreen";
import {TouchableOpacity,Dimensions} from 'react-native';
import Buttons from "./likebutton";
import NadraData from "./nadradata";

// function Home({navigation}){

//     const AppButton = ({ onPress, title,bgColor,textCol }) => (
//         <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer,{
//             backgroundColor:bgColor?bgColor : 'white',
//             marginLeft:0
//         }]}>
//           <Text style={[styles.appButtonText,{color:textCol?textCol:'white'}]}>{title}</Text>
//         </TouchableOpacity>
//       );

//     const Nadracontent=(props)=>{
//         return(
//             <View style={{flexDirection:'row'}}>
//                 <Image source={props.source} style={[styles.nadraimg1,{marginLeft:40}]}/>
//                 <Text style={[styles.nadraT,{flex:1}]}>{props.tex}</Text>
//             </View>
//         )
//     }

//     const clickHandle=()=>{
//         navigation.navigate('FamilyTree');
//     }
//     const onTest=()=>{
//       navigation.navigate('Test');
//     }

//     return(
//     <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white'}}>
//         <ScrollView showsVerticalScrollIndicator={false}>
//         <Image source={require('./images/pti.jpg') } style={styles.img}/>
//         <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
//         {/* <CountryFlag isoCode="PK" size={175} style={styles.item}/> */}
//         <Text style={{fontWeight:'bold',fontSize:30,marginLeft:30,marginTop:50}}>WELCOME USER</Text>
//         {/* <Search/> */}
//         <Test/>
//         {/* <Button onPress={onTest} title="Search" style={{width:"100%"}}/> */}
//         {/* <DrawerNavigator/> */}
//         <View>
//             <Text>
//                 {'\n'}
//             </Text>
//         </View>

//         <ScrollView>
//           <NadraData/>
//             {/* <View style={styles.nadra}>
//                 <View style={{ flexDirection: 'row',justifyContent:'space-between'}}>
//                     <Image source={require('./images/pakimg.png')} style={styles.nadraimg}/>
//                     <Image source={require('./images/pakimg2.jpg')} style={styles.nadraimg}/>
//                 </View>
//                 <Nadracontent source={require('./images/nadraimg1.jpg')} tex='خاندان نمبر '/>
//                 <Nadracontent source={require('./images/nadraimg1.jpg')} tex='نام'/>
//                 <Nadracontent source={require('./images/nadraimg1.jpg')} tex='والد کا نام '/>
//                 <Nadracontent source={require('./images/nadraimg1.jpg')} tex='شناختی نمبر '/>
//                 <Nadracontent source={require('./images/nadraimg2.jpg')} tex='پتہ'/>
//                 <Nadracontent source={require('./images/nadraimg1.jpg')} tex='فون نمبر '/>
//                 <Nadracontent source={require('./images/nadraimg1.jpg')} tex='صنف'/>
//                 <Buttons/>
//             </View> */}
            
//         </ScrollView>
//         <View><Text>{'\n'}</Text></View>
//         <AppButton title={"Family Tree"} onPress={clickHandle} bgColor='#CA955C' textCol='white'/>
//     </ScrollView>
//     </ScrollView>
//     </SafeAreaView>
//   )
// }

// export default Home;

// const styles=StyleSheet.create({
//     appButtonContainer: {
//         color:'green',
//       elevation: 8,
//       backgroundColor: "#D9CB50",
//       borderRadius: 20,
//       paddingVertical: 2,
//       paddingHorizontal: 4,
//       marginTop:-30,
//       width:130,
//     },
//     appButtonText: {
//       fontSize: 16,
//       color: "#fff",
//       fontWeight: "bold",
//       alignSelf: "center",
//       textTransform: "uppercase"
//     },
//     item:{
//         position:'absolute',
//         left:40,
//         top:150,
//     },
//     img:{
//         position:'absolute',
//         // height:10,
//         // width:300,
//         width:"100%",//agar width 100% nai chalta to width 300 ko uncomment krdo
//         top:"3%",
//         left:20,
//     },
//     contentContainer: {
//         // marginTop:200,//isko 250 krna hai
//         // paddingVertical: 10
//         marginTop:"70%"
//       },
//       nadra:{
//         marginLeft:0,
//         marginRight:0,
//         marginBottom:10,
//         borderRadius:20,
//         textAlign:'right',
//         fontWeight:20,
//         marginTop:0,
//         backgroundColor:'silver',



//         // borderRadius:10,
//         // textAlign:'right',
//         // fontWeight:20,
//         // marginTop:20,
//         // backgroundColor:'#EFEFEF'




//         // width: 250,
//         // border: 15,
//         // borderColor:'green',
//         // padding: 50,
//         // marginLeft: 20,
//       },
//       nadraT:{
//         fontWeight:'bold',
//         fontSize:15,
//         marginBottom:20,
//         marginRight:20,
//         paddingLeft:0, 


//         // fontWeight:'bold',
//         // fontSize:15,
//         // marginBottom:0,   //4
//         // marginRight:20,
//         // paddingLeft:30
//       },
//       nadraimg:{
//         // marginRight:20,
//         width:40,
//         height:30,
//         padding:5,
//         margin:20,
//         // flexDirection: 'row',
//       },
//       nadraimg1:{
//         // marginRight:20,
//         marginLeft:30,
//         width:160,
//         height:35,
//         marginBottom:10,
//         // padding:10,
//         // marginLeft:100,
//         flexDirection:'row',
//         // flexDirection: 'row',
//       }
// })





// // import {
// //     createStackNavigator
// //   } from '@react-navigation/stack';
// // import About from "./about";
// // const Stack = createStackNavigator();
// // export default function Home(){
// //     return (
// //         <Stack.Navigator
// //           initialRouteName="Home"
// //           screenOptions={{
// //             headerStyle: { backgroundColor: '#42f44b' },
// //             headerTintColor: '#fff',
// //             headerTitleStyle: { fontWeight: 'bold' }
// //           }}>
// //           <Stack.Screen
// //             name="Home"
// //             component={HomeScreen}
// //             options={{ title: 'Home Page' }}/>
// //             <Stack.Screen
// //             name="About"
// //             component={About}
// //             options={{ title: 'About Page' }}/>
// //         </Stack.Navigator>
// //     );
// // }




function Home({navigation}){

  const AppButton = ({ onPress, title,bgColor,textCol }) => (
      <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer,{
          backgroundColor:bgColor?bgColor : 'white',
          marginLeft:0
      }]}>
        <Text style={[styles.appButtonText,{color:textCol?textCol:'white'}]}>{title}</Text>
      </TouchableOpacity>
    );

  const Nadracontent=(props)=>{
      return(
          <View style={{flexDirection:'row'}}>
              <Image source={props.source} style={[styles.nadraimg1,{marginLeft:40}]}/>
              <Text style={[styles.nadraT,{flex:1}]}>{props.tex}</Text>
          </View>
      )
  }

  const clickHandle=()=>{
      navigation.navigate('FamilyTree');
  }
  const onTest=()=>{
    navigation.navigate('Test');
  }

  return(
  <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <ImageBackground source={require('./images/homeimg.jpg') } style={styles.img}/>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      <Text style={{fontWeight:'bold',fontSize:30,textAlign:'center',color:'white'}}>WELCOME USER</Text>
      <Test/> 
      <View>
          <Text>
              {'\n'}
          </Text>
      </View>

      <ScrollView>
        {/* <NadraData/> */}
      </ScrollView>
      <AppButton title={"Family Tree"} onPress={clickHandle} bgColor='#0f9b0f' textCol='white'/>
  </ScrollView>
  {/* </ScrollView> */}
  </SafeAreaView>
)
}

export default Home;

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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,width:'100%',
    flex: 1,
    justifyContent: 'center'
  },
  contentContainer: {
      marginTop:"70%"
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