import React from "react";
import {Text,View,StyleSheet,ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Dabba=(props)=>{
    return(
        <View style={[styles.container, {backgroundColor:props.color?props.color:'white'}]}>
            <View style={styles.box}>
                <Text style={styles.boxtext}>ID Card number</Text>
                <Text>                             </Text>
                <Text style={styles.boxtext}>Date/Time</Text>
            </View>
            <View style={styles.box}>
                <Text>{props.cardnum}</Text>
                <Text>                      </Text>
                <Text >{props.time}</Text>
            </View>
        </View>
    )
}
function History(){


    return(
        <ScrollView>
            <View>
                <Text>{'\n'}</Text>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:30}}>
                    Search history
                </Text>
                <Text style={{color:'pink'}}>
                    Here you can look for previously searched data
                </Text>
                <View style={{flexDirection:'row',}}>
                    <Ionicons name="radio-button-off" size={25} color='pink'></Ionicons>
                    <Text style={{fontSize:20,color:'grey'}}>Found   </Text>
                    <Ionicons name="radio-button-on" size={25} color='pink'></Ionicons>
                    <Text style={{fontSize:20,color:'grey'}}>Not Found</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.box}>
                        <Text style={styles.boxtext}>ID Card number</Text>
                        <Text>                             </Text>
                        <Text style={styles.boxtext}>Date/Time</Text>
                    </View>
                    <View style={styles.box}>
                        <Text >35203015658</Text>
                        <Text>                      </Text>
                        <Text >21/09/2022  9:00AM</Text>
                    </View>
                </View>

                <Dabba cardnum='3520109383646' time='21/09/2021 10:AM'/>
                <Dabba cardnum='3520109383646' time='21/09/2021 10:AM' color='pink'/>
                <Dabba cardnum='3520109383646' time='21/09/2021 10:AM'/>
                <Dabba cardnum='3520109383646' time='21/09/2021 10:AM' color='pink'/>
                <Dabba cardnum='3520109383646' time='21/09/2021 10:AM'/>
                <Dabba cardnum='3520109383646' time='21/09/2021 10:AM' color='pink'/>
                <Dabba cardnum='3520109383646' time='21/09/2021 10:AM'/>
                <Dabba cardnum='3520109383646' time='21/09/2021 10:AM' color='pink'/>
            </View>
        </ScrollView>
    )
}

export default History;

const styles=StyleSheet.create({
    container:{
        borderRadius:10,
        textAlign:'right',
        fontWeight:20,
        marginTop:30,
        backgroundColor:'pink',
    },
    box:{
        flexDirection:'row',
        margin:10
    },
    boxtext:{
        fontWeight:'bold'
    }

})