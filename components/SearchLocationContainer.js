import Search from "./Search";
import Location from "./Location";
import React from "react";
import {View} from 'react-native';

const SearchLocationContainer =() =>{
    return (
            <View style={{flexDirection:'row', justifyContent:'space-between',margin:10}} >
                <Search />
                <Location />
            </View>
        )
}

export default SearchLocationContainer;