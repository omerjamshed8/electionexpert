import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './login';
import Register from './register';
import Home from './home';
import Front from './front';
import HomeScreen from './menudrawer';
import { StackRouter } from 'react-navigation';
import DrawerNavigator from './menudrawer';
import Draw from './menudrawer';
import History from './searchhistory';
import Familytree from './familytree';
import Bottomnav from './bottomnav';
import Settings  from './settings';
import Menu from './menu';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import Favorites from './favorites';
import Profile from './profile';
import { View } from 'react-native';
import HookEffect from './flatlist';
import Test from './test';
import Sourcedata from './sourcedata';

function HomeTabs(){
  return (
    <Tab.Navigator initialRouteName='home' backBehavior='initialRoute'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'home') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'home'
                      : 'home'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Menu') { //settings ko menu krna hai
              return (
                <Ionicons
                  name={focused ? 'menu' : 'menu'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name==='Profile'){
              return(
                // <View style={{ backgroundColor: 'black', padding : 10, position: 'absolute', bottom : 10 }}>
                <Ionicons
                  name={focused?'person-circle-outline':'person-circle-outline'}
                  size={size}
                  color={color}
                  />
                // </View>
              );
            }
          },
          tabBarInactiveTintColor: 'grey',
          tabBarActiveTintColor: 'white',
          tabBarInactiveBackgroundColor:'#fff',
          tabBarHideOnKeyboard:'true',
          tabBarActiveBackgroundColor:'green'
          // tabBarActiveBackgroundColor:'#ff8989'
        })}
      >
        <Tab.Screen name="Menu" component={Menu}  options={{header : () => null}}/>
        <Tab.Screen
          name="home"
          component={Home}
          options={{ header : () => null }} //tabBarBadge: 3,
        />
        <Tab.Screen name="Profile" component={Profile}  options={{header : () => null}}/>
      </Tab.Navigator>
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={Home} />
    //   <Stack.Screen name="Welcome" component={Front} options={{headerShown:false}}/>
    //     <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
    //     <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
    // </Tab.Navigator>
  );
}
function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Front" component={Front} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeTabs} options={{headerShown:false}}/>
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="HookEffect" component={HookEffect}/>
        <Stack.Screen name="Sourcedata" component={Sourcedata} options={{headerShown:false}}/>
        <Stack.Screen name="History" component={History}/>
        <Stack.Screen name="Favorites" component={Favorites}/>
        <Stack.Screen name="FamilyTree" component={Familytree} />
        <Stack.Screen name="Settings" component={Settings} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
        {/* <Stack.Screen name="HookEffect" component={HookEffect} /> */}
        {/* <Stack.Screen name="Settings" component={HomeScreen} /> */}
       </Stack.Navigator>
    </NavigationContainer>
  );
}
// function MyStack() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Welcome" component={Front} options={{headerShown:false}}/>
//         <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
//         <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
//         <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
//         <Stack.Screen name="History" component={History}/>
//         <Stack.Screen name="FamilyTree" component={Familytree} options={{headerShown:false}}/>
//         {/* <Stack.Screen name="Settings" component={HomeScreen} /> */} 
//        </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default MyStack;


// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Login from './login';
// import Register from './register';
// import Home from './home';
// import Front from './front';

// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Welcome" component={Front}/>
//         <Stack.Screen name="SignUp" component={Register} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Home" component={Home}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default MyStack;