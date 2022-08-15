import * as peopleActionType from './peopleActionType';



export const initiateContacts =(contacts)=>{
    return {
        type: peopleActionType.INITIATE_CONTACTS,
        payload:{
            contact:contacts
        }
    }

}

export const addNewFormUser = (contact) =>{
    return {
        type:peopleActionType.ADD_NEW_FORM_USER,
        payload:{
            contact:contact
        }
    }
}

export const updateContact =(contact)=>{
    return {
        type: peopleActionType.UPDATE_CONTACT,
        payload:{
            contact:contact
        }
    }

}


export const addToContacts =(contact)=>{
    return {
        type: peopleActionType.ADD_TO_CONTACTS,
        payload:{
            contact:contact
        }
    }

}

export const addToFavourite =(contact)=>{
    return {
        type: peopleActionType.ADD_TO_FAVOURITES,
        payload:{
            contact:contact
        }
    }

}

export const deleteFromContacts =(contact)=>{
    return {
        type: peopleActionType.DELETE_FROM_CONTACTS,
        payload:{
            contact:contact
        }
    }

}

export const deleteFromFavourites =(contact)=>{
    return {
        type: peopleActionType.DELETE_FROM_FAVOURITES,
        payload:{
            contact:contact
        }
    }

}

export const toggleContact =(contact)=>{
    return {
        type:peopleActionType.TOGGLE_CONTACT,
        payload:{
            contact:contact
        }
    }
}
export const toggleFavourite =(contact)=>{
    return {
        type:peopleActionType.TOGGLE_FAVOURITE,
        payload:{
            contact:contact
        }
    }
}