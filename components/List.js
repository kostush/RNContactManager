import {Button, FlatList, Text, View, StyleSheet, Pressable, Image} from "react-native";
import People from "../resourses/contactDefault.json";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import * as peopleActions from '../store/Actions/peopleActions';
import  Search  from './Search';
import Location from "./Location";
import SearchLocationContainer from "./SearchLocationContainer";


const getSearchLocationList =(list) =>{
    const searchWord = useSelector((state) => state.search);
    const location = useSelector((state) => state.location);
    return list.filter( element => {
        if ((location === '' ||  element.address.city.toUpperCase().indexOf(location.toUpperCase()) !== -1)
        && (searchWord === '' ||  element.name.toUpperCase().indexOf(searchWord.toUpperCase()) !== -1))
        {
            return element;
        }
    });
}

const List =(props) =>{
    const navigation=props.navigation;
    const dispatch = useDispatch();
    const peopleFilteredBySearchAndLocation = getSearchLocationList(props.list);

    return (
        <View style={ styles.listContainer}>
            <SearchLocationContainer />
            <View>
                <FlatList
                    data= {peopleFilteredBySearchAndLocation}
                    renderItem={(itemData) =>{
                        return(
                            <View style={styles.itemContainer}>
                               <Pressable onPress={()=>{
                                   navigation.navigate('Profile screen',{
                                       user:itemData.item}
                                   )
                               }}>
                                   <View style={styles.photoName}>
                                        <Image
                                            style = {styles.userImage}
                                            source={require('../assets/userImage.png')}
                                        />
                                       <Text>
                                            {itemData.item.name}
                                        </Text>
                                   </View>
                               </Pressable>

                                <View style={styles.contactFavouriteContainer}>
                                    <Pressable  onPress={(item)=>{
                                        dispatch(peopleActions.toggleContact(itemData.item))
                                    }}
                                    >
                                        <MaterialCommunityIcons style={styles.contactFavouriteButton} name="account-multiple-check" color={itemData.item.isContact?'green':'gray'} size={30} />
                                    </Pressable>
                                    <Pressable onPress={()=>{
                                        dispatch(peopleActions.toggleFavourite(itemData.item))
                                    }}
                                    >
                                        <MaterialCommunityIcons style={styles.contactFavouriteButton} name="account-heart" color={itemData.item.isFavourite? 'red':'gray'} size={30} />
                                    </Pressable>
                                </View>

                            </View>
                        )
                    }}
                    keyExtractor={(item,index) =>{
                        return item.id}}
                />
            </View>
        </View>
    )
}

export default List;

const styles = StyleSheet.create({
    listContainer:{
        margin :10,
    },
    itemContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:3,
        margin:2,
        borderWidth:2,
        borderRadius:5
    },
    userImage:{
        width:40,
        height:40,
        margin:10
    },
    photoName:{
        flexDirection:'row',
        alignItems:'center'
    },
    contactFavouriteContainer:{
        flexDirection:'row',
        padding:10,
    },
    contactFavouriteButton:{
        padding:5
    },
    searchContainer : {

        flexDirection:'row',
        justifyContent:'space-between',


    },
    search:{
        flex:0.5,
        flexDirection:'row',
        backgroundColor: "beige",
        justifyContent:'flex-start',

    },
    location:{
        padding:10,
        marginHorizontal:20,
        flex:0.2,
        flexDirection:'row',
        backgroundColor:'green',

    },
})
