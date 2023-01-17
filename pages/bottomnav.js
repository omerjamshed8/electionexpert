// import * as React from 'react';
// import { StyleSheet,Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Home from './home';
// import MyStack from './stack';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function Bottomnav() {
//   return (
//     <NavigationContainer >
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             if (route.name === 'Home') {
//               return (
//                 <Ionicons
//                   name={
//                     focused
//                       ? 'home'
//                       : 'home'
//                   }
//                   size={size}
//                   color={color}
//                 />
//               );
//             } else if (route.name === 'Settings') {
//               return (
//                 <Ionicons
//                   name={focused ? 'settings' : 'settings'}
//                   size={size}
//                   color={color}
//                 />
//               );
//             }
//           },
//           tabBarInactiveTintColor: 'gray',
//           tabBarActiveTintColor: 'tomato',
//         })}
//       >
//         <Tab.Screen
//           name="Home"
//           component={Home}
//           options={{ tabBarBadge: 3, header : () => null }}
          
//         />
//         <Tab.Screen name="Settings" component={SettingsScreen}  options={{header : () => null}}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const style=StyleSheet.create({
  
// })