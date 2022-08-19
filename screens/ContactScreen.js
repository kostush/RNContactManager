import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import Profile from "../components/Profile";
import {useDispatch, useSelector} from "react-redux";
import List from "../components/List";
import {useLayoutEffect} from "react";
import SearchLocationContainer from "../components/SearchLocationContainer";


function  ContactScreen({navigation}) {
    const people = useSelector((state)=> state.people);
    const peopleFilteredByContact = people.filter((user) => {
        return user.isContact === true
    });
    return (
        <>
            {/*<SearchLocationContainer/>*/}
            <List
                list = {peopleFilteredByContact}
                navigation = {navigation}
            />
        </>

    )
}
export default ContactScreen;

const styles = StyleSheet.create({
    favouriteContainer:{
        //backgroundColor:"red",
        margin : 40
    }
})