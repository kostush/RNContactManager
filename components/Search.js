import {useDispatch,useSelector} from "react-redux";
import * as searchActions from "../store/Actions/searchActions";
import {Text, TextInput, View, StyleSheet} from "react-native";

const Search = (props) =>{
    const dispatch = useDispatch();
    const getSearchWord =  useSelector((state) =>state.search);

    const onSetSearch = (text) =>{
        dispatch(searchActions.searchContact(text));
    }

    return (
        <View style={styles.search}>
            <TextInput
                value = {getSearchWord}
                onChangeText={text=> onSetSearch(text) }
                placeholder='search'
            >
            </TextInput>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    search:{
        marginHorizontal:5,
    },

})