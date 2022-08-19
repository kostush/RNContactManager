import 'react-native-gesture-handler';

import * as React from 'react';
import {Provider, useSelector} from "react-redux";
import  { store } from './store/store';
import {StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity, ActivityIndicator, Platform} from 'react-native';
import Navigator from './navigation/Navigation';

import { StatusBar } from 'expo-status-bar';


export default function  App()  {
    return (
        <Provider store={store}>
           <View style={styles.appContainer}>
               <View style={styles.navigatorContainer}>
                   <Navigator  />
               </View>
               <StatusBar style='auto'/>
           </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    appContainer: {
      flex:1,
        marginTop:20,
    },
    textHeader:{
        marginTop:30,
        marginHorizontal:100
    },
    contactsContainer:{
    },
    navigatorContainer:{
        flex:1,
        justifyContent:'center'
    }
 });
