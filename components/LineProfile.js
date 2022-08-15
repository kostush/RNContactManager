import {Text, View, StyleSheet, Pressable} from "react-native";

const LineProfile = (props) =>{
    return  (

        <View style={styles.profileContainer}>

            <Text > LineProfile
                {/*{props.user.email}*/}
            </Text>
        </View>


    )


}

export default LineProfile;

const styles = StyleSheet.create({
    profileContainer:{
        borderWidth:2,
        borderRadius:10,
        background:"red",
        margin:3

    }
})