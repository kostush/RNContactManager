import * as locationActionType from './locationActionstType';

export const searchLocation = (location) => {
    return {
        type:locationActionType.SEARCH_LOCATION,
        payload:{
            location:location
        }
    }
}
