import React, {useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from "react-native-vector-icons/Octicons";

import {NavigationContainer, useNavigation} from "@react-navigation/native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import FavouriteScreen from "../screens/FavouriteScreen";
import PeopleScreen from "../screens/PeopleScreen";
import ContactScreen from "../screens/ContactScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import contactsDefault from '../resourses/contactDefault.json';
import { useDispatch } from "react-redux";
import * as peopleActions from '../store/Actions/peopleActions';
import {Pressable, Text, View} from "react-native";
import Search from '../components/Search';
import Location from "../components/Location";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function BottomTabs  () {
    const navi = useNavigation();
    const onPressAddUserBack=()=>{
        navi.navigate('People screen');
    }

    return (
        <Tabs.Navigator
            screenOptions={({route})=>({
               // headerShown:false,
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerTitleAlign: 'center',
                headerLeft:()=>(
                    <View style={{
                        flexDirection:'row',
                        width:100 ,
                        marginLeft:5,
                        marginTop:5,
                        borderRadius:10,
                    }}>
                        <Octicons name={'search'} size={22} color={'grey'} style={{
                            marginLeft:5,
                            marginTop:3
                        }} />
                        <Search />
                    </View>
                ),
                headerRight:()=>(
                    <View style={{flexDirection:'row', width:130 ,
                        justifyContent:'space-between',
                        marginLeft:50
                    }}>
                        <Location />
                        <MaterialIcons name={'location-on'} size ={26} color={'grey'} style={{
                            marginRight:5,
                            marginTop:3
                        }}/>
                    </View>
                )
            })}
        >
            <Tabs.Screen
                name='Home screen'
                component = {HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                     tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name='People screen'
                component={PeopleScreen}
                options={{
                    title:'People',
                    tabBarLabel: 'People',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-group" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name='Contacts screen'
                component={ContactScreen}
                options={{
                    title:'Contacts',
                    tabBarLabel: 'Contacts',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-multiple-check" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name='Favourites screen'
                component={FavouriteScreen}
                options={{
                    title:'Favourites',
                    tabBarLabel: 'Favourites',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-heart" color={color} size={size} />
                    ),
                }}
            /><Tabs.Screen
                name='Add user screen'
                component={ProfileScreen}
                options={{
                    headerShown:true,
                    title:'Add user',
                    tabBarLabel: 'Add user',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-plus-outline" color={color} size={size} />
                    ),
                    headerLeft:()=>(
                        <Pressable onPress={onPressAddUserBack}>
                            <View style={{
                                flexDirection:'row',
                                width:100 ,
                                marginLeft:5,
                                marginTop:5,
                                borderRadius:10,
                            }}>
                                <MaterialIcons name={'arrow-back'} size={22} color={'grey'} style={{
                                    marginLeft:5,
                                    marginTop:3
                                }} />
                            </View>
                        </Pressable>
                    ),
                    headerRight:()=>(
                        <View></View>
                    )
                }}
            />
        </Tabs.Navigator>
        )

}

function fireBaseSetState (){
    const [data, setData]= useState(null);
    const [error, setError]= useState(null);
    const [loading, setLoading]= useState(true);
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch('./contactDefault.json');
                if (!response.ok) {
                    throw new Error('This is HTTP error, error status= ${response.status} ');
                }
                const people = await response.json();
                setData(people);
                setError(null);
                dispatch(peopleActions.initiateContacts(contactsDefault));
            }catch(error){
                setError(error.message);
                setData(null);
            }finally{
                setLoading(false);
            }
        }
        fetchData()
            .catch(console.error);
    },[])

    dispatch(peopleActions.initiateContacts(contactsDefault));

}

function jsonSetState(){
    const dispatch = useDispatch();
    dispatch(peopleActions.initiateContacts(contactsDefault));
}

export default function Navigator(){
    //fireBaseSetState();
    jsonSetState();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false,
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                }}
            >
                <Stack.Screen
                    name='List Screen'
                    component = {BottomTabs}
                    options={{
                        title:'LIST ',
                        headerShown:false,
                    }}
                />
                <Stack.Screen
                    name='Profile screen'
                    component={ProfileScreen}
                    options={{
                        title:'User profile',
                        headerShown:true,
                        headerRight:()=>(
                            <View style={{flexDirection:'row', width:30 ,
                                justifyContent:'space-between',
                                marginRight:10
                            }}>
                            </View>
                        )

                    }}
                />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

