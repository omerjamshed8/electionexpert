import React, { useContext, useEffect,useState } from 'react';
import { ActivityIndicator,Text,View,TextInput,StyleSheet } from 'react-native';
// import { Searchbar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HookEffect from './flatlist';
import Buttons, { Data } from './likebutton';
import { printToFileAsync } from '../node_modules/expo-print/build/Print.js';
import {shareAsync} from 'expo-sharing';
import {AsyncStorage} from 'react-native';

function Test({onChange,navigation}){
  const [searchQuery, setSearchQuery] = React.useState('');
  const [myUserData,setMyUserData]=useState();
  const [isLoading,setIsLoading]=useState(true);

  const onChangeSearch = (query) =>{
    setIsLoading(true);
    setSearchQuery(query); 
  }

const storeData=async(details)=>{
  try {
    await AsyncStorage.setItem(
      data,details
      );
      Alert.alert('Data saved successfully in async storage')
  } catch (error) {
    // Error saving data
    Alert.alert('Unexpected error')
  }
}

  const getUserData=async(searchQuery)=>{
    const query=searchQuery;
    try{
        const response=await fetch(
            `https://7gxwzm6f2vdpe5562dvm7bg7re0aqtsh.lambda-url.eu-west-1.on.aws/search?cnic=${query}`
        );
        // console.log(await response.text())
        const myData=await response.json();
        if(!myData.error) {
            setMyUserData(myData);
            // console.log("my data= ",myData.response);
            setIsLoading(false);
            storeData(myData)
            //sector,block_code,cnic,family_no
            onChange(myData?.response?.sector,myData?.response?.block_code,myData?.response?.cnic,myData?.response?.silsila_no)
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

  const onSearch=()=>{
    console.log("cnic= ",searchQuery);
    // navigation.navigate('HookEffect',{
    //   query:searchQuery
    // })
   
    // console.log("param= ",route.params.query);
      getUserData(searchQuery);
      console.log(">?>>>>>>>>>>>>>>>>>>>>>>>",myUserData);
    //   navigation.navigate('Sourcedata',{
    //     source:myUserData.response,
    // })
  }

  const data = useContext(Data)
  const [isFavorite, setIsFavorite] = useState(false)

const generatePdf = async () => {
  console.log("in generate pdf function")
  const file = await printToFileAsync({
      html: html,
      base64: false,
  });
  await shareAsync(file.uri);
}

  return(
    <View>
      <View style={[styles.input,{flexDirection:'row'}]}>
          <TextInput
          placeholderTextColor={'black'}
          placeholder='Search'
          style={styles.inputStyle}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Ionicons name="search" size={25} style={{marginRight:15,marginTop:10}} onPress={onSearch}></Ionicons>
    </View>

    {/* {console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!",myUserData)} */}
        {
           <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:20}}>
           { isLoading ? <ActivityIndicator size={"large"} color="green"/> :
               <View style={{flex:1,backgroundColor:'silver',alignItems:'center',flexDirection:'column',width:'100%',borderWidth:2,borderRadius:20,borderColor:'green',paddingTop:20,paddingBottom:40}}>
                       <View style={styles.innercard}>
                          <Text style={styles.innercardlefttext}>Address:</Text>
                          <Text style={styles.innercardrighttext}>{myUserData.response.address}</Text>
                       </View>
                       <View style={styles.innercard}>
                          <Text style={styles.innercardlefttext}>Age:</Text>
                          <Text style={styles.innercardrighttext}>{myUserData.response.age}</Text>
                       </View>
                       <View style={styles.innercard}>
                          <Text style={styles.innercardlefttext}>Block_code:</Text>
                          <Text style={styles.innercardrighttext}>{myUserData.response.block_code}</Text>
                       </View>
                       <View style={styles.innercard}>
                          <Text style={styles.innercardlefttext}>Cnic:</Text>
                          <Text style={styles.innercardrighttext}>{myUserData.response.cnic}</Text>
                       </View>
                       <View style={styles.innercard}>
                          <Text style={styles.innercardlefttext}>Gender:</Text>
                          <Text style={styles.innercardrighttext}>{myUserData.response.gender}</Text>
                       </View>
                       <View style={styles.innercard}>
                          <Text style={styles.innercardlefttext}>Gharana_no:</Text>
                          <Text style={styles.innercardrighttext}>{myUserData.response.gharana_no}</Text>
                       </View>
                       <View style={styles.innercard}>
                          <Text style={styles.innercardlefttext}>Name:</Text>
                          <Text style={styles.innercardrighttext}>{myUserData.response.name}</Text>
                       </View>
                       <View style={styles.innercard}>
                          <Text style={styles.innercardlefttext}>Sector:</Text>
                          <Text style={styles.innercardrighttext}>{myUserData.response.sector}</Text>
                       </View>
                       <View style={styles.innercard}>
                          <Text style={styles.innercardlefttext}>Silsila_no:</Text>
                          <Text style={styles.innercardrighttext}>{myUserData.response.silsila_no}</Text>
                       </View>
                       <View style={{flex:1,position:'absolute',left:0,bottom:0}}>
                          <Buttons 
                            isFavorite={isFavorite}
                            // setIsFavorite={setIsFavorite}
                            cnic={myUserData.response.cnic}
                            onFavorite={e => {
                              console.log(data.favorites)
                              console.log(myUserData.response.cnic)
                              if(data.favorites && data.favorites.find(item => item.cnic === myUserData.response.cnic)) {
                                setIsFavorite(false)
                                data.removeFavorite(myUserData.response)
                              } else {
                                setIsFavorite(true)
                                data.addFavorite(myUserData.response)
                              }
                            }}
                            onDownload={async() => {
                                console.log("in generate pdf function",myUserData)
                                  const html = `
                                  <!DOCTYPE html>
                                  <html>
                                  <head>
                                  </head>
                                  <style>
                                  h1 {text-align: center;}
                                  p {text-align: center;}
                                  div {text-align: center;}
                                  </style>
                                  <body>
  									<div style=" padding-left: 25px;padding-right: 25px;padding-top: 100px;">
                                      <div style="height: 100px;width: 28.2%;position: absolute;justify-content: center;display: flex;">
                                        <img style="width: 100px;height: 100px;" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Pakistan_Tehreek-e-Insaf_logo.svg/1200px-Pakistan_Tehreek-e-Insaf_logo.svg.png" />
                                      </div>
                                      <div style=" position: relative;">
                                        <div style="border: 1px solid black;width: 70%;height: 50px;font-size: large;/* padding-left: 2px; */text-align:right;padding-right: 16px;margin-left: auto;">نام</div>
                                        <div style="border: 1px solid black;width: 70%;height: 50px;font-size: large;/* padding-left: 2px; */text-align: right;padding-right: 16px;margin-left: auto;">پتہ</div>
                                        <div style="width: 72.2%;  grid-template-columns: 25% 25% 25% 25%;border: 1px solid black;width: 100%;height: 50px; display: grid;">
                                          <div style=" border: 1px solid black;text-align: right;font-size: large;">وارڈ نمبر</div>
                                          <div style=" border: 1px solid black;text-align: right;font-size: large;">بوتھ نمبر</div>
                                          <div style=" border: 1px solid black;text-align: right;font-size: large;">گھرانہ نمبر</div>
                                          <div style=" border: 1px solid black;text-align: right;font-size: large;">سلسلہ نمبر</div>
                                        </div>
                                      </div>
                                      <div style="border: 1px solid black;width: 100%;height: 50px; display: grid;grid-template-columns: 40% 35% 25%;">
                                        <div style=" border: 1px solid black;text-align: right;font-size: large;font: bold;padding-right: 16px">موبائل نمبر</div>
                                        <div style="border: 1px solid black;text-align: right;font-size: large;font: bold;padding-right: 16px">شناختی کارڈ نمبر</div>
                                        <div style="border: 1px solid black;text-align: right;font-size: large;font: bold;padding-right: 16px">شماریاتی کوڈ نمبر</div>
                                      </div>
                                      <div style="border: 1px solid black;text-align: right;font-size: large;font: bold;padding-right: 16px">پولنگ اسٹیشن نمبر</div>
                                    </div>

                                  </body>
                                  </html>
                                  `;
                                const file = await printToFileAsync({
                                    html: html,
                                    base64: false,
                                });
                                await shareAsync(file.uri);
                            }}
                          />
                       </View>
               </View>
           }
       </View>
        }
      </View>
  )
}

export default Test;

const styles=StyleSheet.create({
  innercard:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center'
  },
  innercardlefttext:{
    flex:1,textAlign:'left',fontWeight:'bold',paddingLeft:20,
  },
  innercardrighttext:{
    flex:1,textAlign:'left'
  },
  input:{
  paddingLeft:30,
  borderColor:'black',
  borderWidth:0.5, 
  fontSize:16, 
  marginTop:20, 
  width:300,
  borderRadius:20,
  height:50,
  backgroundColor:'#FAF3F3'
  },
  inputStyle:{
    flex:1
  }
})


// const Test = () => {
//   const [searchQuery, setSearchQuery] = React.useState('');

//   const onChangeSearch = query => setSearchQuery(query);

//   return (
//     <Searchbar style={{borderRadius:20 ,width:300,marginTop:15}}
//       placeholder="Search"
//       onChangeText={onChangeSearch}
//       value={searchQuery}
//     />
//   );
// };

// export default Test;