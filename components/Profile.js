import {Text, View, StyleSheet, Pressable, FlatList, Image, TextInput, Button,Alert} from "react-native";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import * as peopleActions from '../store/Actions/peopleActions';
import {useNavigation} from "@react-navigation/native";
import defaultFormUser from "../resourses/defaultFormUser";

const Profile = ({route}) =>{
    const dispatch = useDispatch();
    const navigation = useNavigation()
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
        dispatch(peopleActions.updateContact(translateFormUserToContact(formUser)));
        navigation.navigate('List Screen')
    }

    return  (
        <View>
            <View style={styles.profileContainer}>
                <Image
                    style = {styles.userImage}
                    source={require('../assets/userImage.png')}
                />
            </View>
                <View>
                    <Text style={styles.label}> Name</Text>
                    <TextInput
                        style = {styles.inputField}
                        onChangeText={text =>handleUserInput(text,'name')}
                        value={formUser.name}
                        placeholder="name"
                    >
                    </TextInput>

                    <Text style={styles.label}> Email</Text>
                    <TextInput
                        style = {styles.inputField}
                        onChangeText={text =>handleUserInput(text,'email')}
                        value={formUser.email}
                        placeholder="email"

                    >
                    </TextInput>
                    <Text style={styles.label}> Company</Text>
                    <TextInput
                        style = {styles.inputField}
                        onChangeText={text =>handleUserInput(text,'companyName')}
                        value={formUser.companyName}
                        placeholder="company"
                    >
                    </TextInput>
                    <Text style={styles.label}> Position</Text>
                    <TextInput
                        style = {styles.inputField}
                        onChangeText={text =>handleUserInput(text,'position')}
                        value={formUser.position}
                        placeholder="position"
                    >
                    </TextInput>
                    <Text style={styles.label}> City</Text>
                    <TextInput
                        style = {styles.inputField}
                        onChangeText={text =>handleUserInput(text,'city')}
                        value={formUser.city}
                        placeholder="city"
                    >
                    </TextInput>
                    <Text style={styles.label}> Street</Text>
                    <TextInput
                        style = {styles.inputField}
                        onChangeText={text =>handleUserInput(text,'street')}
                        value={formUser.street}
                        placeholder="street"
                    >
                    </TextInput>
                </View>
                <View style={styles.button}>
                    <Button
                        title='Save'
                        onPress={saveChanges}
                    />
                </View>

        </View>
        )
}

export default Profile;

const styles = StyleSheet.create({
    profileContainer:{
       alignItems:'center',
    },
    userImage:{
       // flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:150,
        height:150,
        margin:16
    },
    label:{
      marginLeft:10
    },
    inputField:{
        height:40,
        margin:5,
        textAlign:'center',
        borderBottomColor:'grey',
        borderBottomWidth:1,
        backgroundColor:'white'

    },
    button:{
        margin:30
    }
})