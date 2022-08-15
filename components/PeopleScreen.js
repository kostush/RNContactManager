import List from "./List";
import {  useSelector } from 'react-redux';


function  PeopleScreen({navigation}) {
   const people = useSelector((state)=> state.people);
    return (
            <List
                list = {people}
                navigation = {navigation}
            />
    )
}
export default PeopleScreen;
