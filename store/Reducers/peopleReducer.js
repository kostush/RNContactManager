import * as peopleActionType from '../Actions/peopleActionType';
import contactsDefault from '../../resourses/contactDefault.json';
//import {getUsers, setUsers} from "../../providers/services/firestore/firebase";
//import {useDispatch} from "react-redux";


let lastId = 0;
export const peopleReducer = (contacts = [], action) => {

    switch (action.type) {
        case peopleActionType.ADD_NEW_FORM_USER:{
            let contact = action.payload.contact;
            contact.id = contacts.length+1;
            let newContacts = [...contacts];
            newContacts.push(contact);
            return newContacts ;
        }
        case peopleActionType.INITIATE_CONTACTS:{
            console.log("INITIATE_CONTACTS", action.payload.contact);
            return action.payload.contact;
        }
        case peopleActionType.UPDATE_CONTACT : {
            console.log("update contact dispatch", action.payload.contact);
            return contacts.map(contact => contact.id !== action.payload.contact.id ? contact : action.payload.contact

            )
        }
        case peopleActionType.ADD_TO_CONTACTS : {
            console.log("action people", action.payload.contact);
            return contacts.map(contact => contact.id !== action.payload.contact.id ? contact :
                {
                    ...contact,
                    isContact: action.payload.contact.isContact,
                }
            )
        }
        case peopleActionType.ADD_TO_FAVOURITES : {
            console.log("action people", action.payload.contact);
            return contacts.map(contact => contact.id !== action.payload.contact.id ? contact :
                {
                    ...contact,
                    isFavourite: action.payload.contact.isFavourite,
                }
            )
        }
        case peopleActionType.DELETE_FROM_CONTACTS : {
            return contacts.map(contact => contact.id !== action.payload.contact.id ? contact :
                {
                    ...contact,
                    isContact: action.payload.contact.isContact,
                }
            )
        }
        case peopleActionType.DELETE_FROM_FAVOURITES : {
            return contacts.map(contact => contact.id !== action.payload.contact.id ? contact :
                {
                    ...contact,
                    isFavourite: action.payload.contact.isFavourite,
                }
            )
        }
        case peopleActionType.TOGGLE_FAVOURITE : {
            return contacts.map(contact => contact.id !== action.payload.contact.id ? contact :
                {
                    ...contact,
                    isFavourite: !action.payload.contact.isFavourite,
                }
            )
        }
        case peopleActionType.TOGGLE_CONTACT : {
            return contacts.map(contact => contact.id !== action.payload.contact.id ? contact :
                {
                    ...contact,
                    isContact: !action.payload.contact.isContact,
                }
            )
        }
        default :
            return contacts;
    }
}

