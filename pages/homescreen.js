// import React from "react";
// import { View, Button, Text, StyleSheet } from "react-native";

// const Home1 = () => {
//   return (
//     <View style={styles.center}>
//       <Text>This is the home screen</Text>
//       <Button title="Go to About Screen" 
//       nPress={() => navigation.navigate("About")}/>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//   },
// });

// export default Home1;

import React from "react";
import { Text,View,Image,StyleSheet,ScrollView } from "react-native";

import Test from "./test";
export default function HomeScreen(){
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white'}}>
            <Image source={require('./images/pti.jpg') } style={styles.img}/>
            <ScrollView contentContainerStyle={styles.contentContainer}>
            {/* <CountryFlag isoCode="PK" size={175} style={styles.item}/> */}
            <Text style={{fontWeight:'bold',fontSize:30,marginLeft:30}}>WELCOME USER</Text>
            {/* <Search/> */}
            <Test/>
            {/* <DrawerNavigator/> */}
            </ScrollView>
        </View>
      )
}

const styles=StyleSheet.create({
    item:{
        position:'absolute',
        left:40,
        top:150,
    },
    img:{
        position:'absolute',
        // height:10,
        width:200,
        top:20,
        left:70,
    },
    contentContainer: {
        marginTop:250,
        paddingVertical: 10
      }
})