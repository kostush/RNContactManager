import Users from './contactDefault.json';
import { useDispatch } from "react-redux";
import {useEffect, useState} from "react";
import {peopleReducer} from "../store/Reducers/peopleReducer";

// const dispatch = useDispatch();
// const [data, setData]= useState(null);
// const [error, setError]= useState(null);
// const [loading, setLoading]= useState(true);
//
// useEffect(()=>{
//     const fetchData = async () => {
//         try{
//             const response = await fetch('./contactDefault.json');
//             if (!response.ok) {
//                 throw new Error('This is HTTP error, error status= ${response.status} ');
//             }
//             const people = await response.json();
//             setData(people);
//             setError(null);
//             dispatch(peopleReducer(people));
//         }catch(error){
//             setError(error.message);
//             setData(null);
//         }finally{
//             setLoading(false);
//         }
//     }
//      fetchData()
//          .catch(console.error);
// },[])
