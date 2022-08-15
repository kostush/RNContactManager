import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { peopleReducer } from "./Reducers/peopleReducer";
import { searchReducer } from "./Reducers/searchReducer";
import { locationReducer } from "./Reducers/locationReducer";
import { formUserReducer } from "./Reducers/formUserReducer";


export const store = configureStore({
    reducer:{
         people: peopleReducer,
         formUser: formUserReducer,
         search: searchReducer,
         location: locationReducer

    }
});


