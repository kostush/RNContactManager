import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from "react-redux";
import List from "./List";

function  FafouriteScreen({navigation}) {
    const people = useSelector((state)=> state.people);
    const favourites = people.filter((user) => {
        return user.isFavourite === true
    });

    return (
        <List
            list = {favourites}
            navigation = {navigation}
        />
    )

}
export default FafouriteScreen;

const styles = StyleSheet.create({
    favouriteContainer:{
        backgroundColor:"red",
        margin : 40
    }
})