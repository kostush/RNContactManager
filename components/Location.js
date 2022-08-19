import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {Text, TextInput, View, StyleSheet} from "react-native";
import * as locationActions from "../store/Actions/locationActions";
import Picker from "react-native-picker-select";
import * as React from "react";


const Location =() => {
    const dispatch = useDispatch();
    const getLocation = () => {

        return useSelector((state)=> state.location);
    }
    console.log('get location', useSelector((state)=> state.location));
    const people = useSelector((state) => state.people);
    const onSetLocation = (location) => {
        dispatch(locationActions.searchLocation(location));
    }


    const items = people.map(user => {
        return {
            label: user.address.city, value: user.address.city
        }
    })


    return (
        <View style={styles.locationInner}>
            <Picker
                selectedValue={useSelector((state)=> state.location)}
                placeholder={{ label: "Anywhere", value: '' }}
                useNativeAndroidPickerStyle={false}
                onValueChange = { itemValue => onSetLocation(itemValue)}
                items={items}
            >
            </Picker>
        </View>
    )
}

export default Location;

const styles = StyleSheet.create({

    locationInner:{
        //marginHorizontal:20,
        marginTop:5,

    },
})