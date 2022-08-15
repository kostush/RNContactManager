import {Text, View, StyleSheet, Pressable, FlatList, Image, TextInput, Button,Alert} from "react-native";
import React, {useState} from "react";
import {attachNativeEvent} from "react-native-web/dist/vendor/react-native/Animated/AnimatedEvent";
import {useDispatch} from "react-redux";
import {peopleReducer} from "../store/Reducers/peopleReducer";
import * as peopleActions from '../store/Actions/peopleActions';

const Profile = ({route}) =>{
    const dispatch = useDispatch();
    const getDataFromContact = (contact)=>{
    //console.log('getDataFromContact',contact);
        return  {
            id: contact.id,
            name: contact.name,
            username:contact.username,
            phone: contact.phone,
            email: contact.email,

            city: contact.address.city,
            street: contact.address.street,
            suite: contact.address.suite,

            companyName:contact.company.name,
            position:contact.company.position,
            isContact : contact.isContact,
            isFafourite: contact.isFafourite,
        }
    }
    const translateFormUserToContact = (formUser)=>{
        let newUser ={...formUser,
            company: {
                'name': formUser.companyName,
                'position': formUser.position
            },
            address: {
                'street': formUser.street,
                'city': formUser.city,
                'suite': formUser.suite
            },
        }
        delete newUser.street;
        delete newUser.city;
        delete newUser.suite;
        delete newUser.companyName;
        delete newUser.position;

        return newUser;
    }

    const {user} = route.params;
    const [formUser, setFormUser] = useState(getDataFromContact(user));

    const handleUserInput = (text,name) =>{
        let newFormUser = {...formUser};
        newFormUser[name] = text;
        setFormUser(newFormUser);
    }

    const saveChanges= () =>{
        //dispatch(peopleActions.updateContact(translateFormUserToContact(formUser)));
    }



    return  (
            <View style={styles.profileContainer}>
                <Image
                    style = {styles.userImage}
                    source={require('../assets/userImage.png')}
                />

                    <TextInput
                        style = {styles.inputField}
                        onChangeText={text =>handleUserInput(text,'name')}
                        value={formUser.name}
                        placeholder="name"
                    >
                    </TextInput>


                <TextInput
                    style = {styles.inputField}
                    onChangeText={text =>handleUserInput(text,'email')}
                    value={formUser.email}
                    placeholder="email"
                >
                </TextInput>
                <TextInput
                    style = {styles.inputField}
                    onChangeText={text =>handleUserInput(text,'companyName')}
                    value={formUser.companyName}
                    placeholder="company"
                >
                </TextInput>
                <TextInput
                    style = {styles.inputField}
                    onChangeText={text =>handleUserInput(text,'position')}
                    value={formUser.position}
                    placeholder="position"
                >
                </TextInput>
                <TextInput
                    style = {styles.inputField}
                    onChangeText={text =>handleUserInput(text,'city')}
                    value={formUser.city}
                    placeholder="city"
                >
                </TextInput>
                <TextInput
                    style = {styles.inputField}
                    onChangeText={text =>handleUserInput(text,'street')}
                    value={formUser.street}
                    placeholder="street"
                >
                </TextInput>
                <Button
                    style={styles.button}
                    title='Save'
                    onPress={saveChanges}
                />
            </View>
        )
}

export default Profile;

const styles = StyleSheet.create({
    profileContainer:{
        flex:1,
        //justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderRadius:10,
        background:"red",
        margin:3

    },
    userImage:{
        width:150,
        height:150,
        margin:16
    },
    inputField:{

        width:200,
        margin:5,
        borderWidth:1,
        borderRadius:3,
        textAlign:'center',


    },
    button:{
        marginVertical:50
    }
})