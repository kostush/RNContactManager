import {useDispatch,useSelector} from "react-redux";
import * as searchActions from "../store/Actions/searchActions";
import {Text, TextInput, View, StyleSheet} from "react-native";

const Search = ({navigation}) =>{
    const dispatch = useDispatch();
    const getSearchWord =  useSelector((state) =>state.search);

    const onSetSearch = (text) =>{
        dispatch(searchActions.searchContact(text));
    }

    return (
        <View style={styles.searchInner}>
            <Text>Search by name</Text>
            <TextInput
                value = {getSearchWord}
                onChangeText={text=> onSetSearch(text) }
                placeholder='input search name'
            >
            </TextInput>
        </View>

    )
}

export default Search

const styles = StyleSheet.create({

    searchInner:{
        marginHorizontal:20,
        alignItems:'flex-start'
    },
})