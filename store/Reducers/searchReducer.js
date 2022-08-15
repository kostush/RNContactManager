import * as searchActionType from '../Actions/searchActionType';

export const searchReducer =( searchWord ='', action) =>{
    switch (action.type){
        case searchActionType.CHANGE_SEARCH_WORD:{
            return  action.payload.searchWord;
        }
        case searchActionType.CHANGE_LOCATION :{
            return action.payload.location;
        }
        default:  return searchWord;
    }
}