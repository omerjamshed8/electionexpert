import React, { useContext,useState } from "react";
import { Text,View,StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import NadraData from './nadradata';
import Buttons, {Data} from './likebutton';
// import {printToFileAsync} from 'expo-print';
// import {shareAsync} from 'expo-sharing';

function Favorites(){
  const [isFavorite, setIsFavorite] = useState(false)
    const data = useContext(Data)
    console.log(data.favourites)

    return(
        <View style={{flex:1,justifyContent:'center',margin:30}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                { data.favorites && data.favorites.map((item, index) => (
                    <View style={{flex:1,backgroundColor:'silver',alignItems:'center',flexDirection:'column',width:'100%',borderWidth:2,borderRadius:20,borderColor:'green',paddingTop:20,paddingBottom:40}}>
                        <View style={styles.innercard}>
                          <Text style={styles.innercardlefttext}>Address:</Text>
                          <Text style={styles.innercardrighttext}>{item.address}</Text>
                       </View>
                       <View style={styles.innercard}>
                          <Text style={styles.innercardlefttext}>name:</Text>
                          <Text style={styles.innercardrighttext}>{item.name}</Text>
                       </View>
                       <View style={styles.innercard}>
                          <Text style={styles.innercardlefttext}>age:</Text>
                          <Text style={styles.innercardrighttext}>{item.age}</Text>
                       </View>
                       <View style={styles.innercard}>
                          <Text style={styles.innercardlefttext}>silsila_no:</Text>
                          <Text style={styles.innercardrighttext}>{item.silsila_no}</Text>
                       </View>
                       <View style={styles.innercard}>
                          <Text style={styles.innercardlefttext}>gharana_no:</Text>
                          <Text style={styles.innercardrighttext}>{item.gharana_no}</Text>
                       </View>
                       <View style={styles.innercard}>
                          <Text style={styles.innercardlefttext}>age:</Text>
                          <Text style={styles.innercardrighttext}>{item.age}</Text>
                       </View>
                       <View style={styles.innercard}>
                          <Text style={styles.innercardlefttext}>gender:</Text>
                          <Text style={styles.innercardrighttext}>{item.gender}</Text>
                       </View>
                       <View style={styles.innercard}>
                          <Text style={styles.innercardlefttext}>block_code:</Text>
                          <Text style={styles.innercardrighttext}>{item.block_code}</Text>
                       </View>
                        {/* <Text key={index}>{item.name}</Text> */}
                        <View style={{flex:1,position:'absolute',left:0,bottom:0}}>
                            <Buttons 
                                isFavorite={isFavorite}
                                onFavorite={e => {
                                    setIsFavorite(false)
                                    data.removeFavorite(item)
                                }}
                            />
                        </View>
                    </View>
                    
                )) }
            {/* <NadraData/>
            <NadraData/> */}
            <Data.Consumer>
            {(props)=>{
                console.log("in favorites",props);
                // return(
                //     <View style={{flex:1,alignItems:'center'}}>
                //         <Text style={{color:'black'}}>Hello World my latitude is {latitude} and my longtitude is {longitude}</Text>
                //     </View>
                // )
            }}
            </Data.Consumer>
            </ScrollView>
        </View>
    )
}
export default Favorites;

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
})