import * as searchActionType from './searchActionType';

export const searchContact =  ( searchWord ) => {
    console.log('searchContact action searchWord',searchWord);
    return {
        type:searchActionType.CHANGE_SEARCH_WORD,
        payload:{
            searchWord:searchWord,
        }
    }
}