import {View, Text, StyleSheet, FlatList, Pressable, Image} from 'react-native';
import Im from '../assets/favorite.png';

const HomeScreen =() =>{
    return(
        <View style = {styles.homeScreenContainer}>
            <Text> Text Home screen</Text>
            <Image source={Im}
                   style={{ height: 50, width: 50 }}/>
        </View>

    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    homeScreenContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})