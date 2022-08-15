import * as formUserActionTypes from './formUserActionTypes';

export const updateFormUser = (formUser) => {
    return {
        type:formUserActionTypes.UPDATE_FORM_USER,
        payload:{
            formUser:formUser
        }
    }
}