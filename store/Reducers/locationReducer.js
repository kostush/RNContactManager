import * as locationActionsType from "../Actions/locationActionstType";

export const locationReducer =( location ='', action) =>{
    switch (action.type){
        case locationActionsType.SEARCH_LOCATION :{
            return action.payload.location;
        }
        default:  return location;
    }
}