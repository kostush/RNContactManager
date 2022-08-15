import * as formUserActionTypes from '../Actions/formUserActionTypes';

export const formUserReducer = (formUser ={} , action) =>{

    switch (action.type){
        case formUserActionTypes.UPDATE_FORM_USER : {
                let newUser = {
                    ...formUser,
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
        default:
                return formUser;
    }
}