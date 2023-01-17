import React from 'react';
import { Text,View,StyleSheet } from 'react-native';
import People from './nadralist';
import NadraData from './nadradata';

export default function Print(){
    const traverse=(People)=>{
        return(
            <View>
                <NadraData key={People.key}/>
            </View>
        )
    }
    return(
        <View>
                {People.map(traverse)}
        </View>
    )      
}