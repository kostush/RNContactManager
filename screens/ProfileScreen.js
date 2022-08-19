import {useSelector} from "react-redux";
import Profile from "../components/Profile";
import defaultFormUser from "../resourses/defaultFormUser";
import * as ProfileChangeMode from '../constants/profileChangeMode'

function  ProfileScreen({route}) {
    const user =  (typeof route.params !=='undefined') ? route.params.user : defaultFormUser;
    const type = (typeof route.params !=='undefined') ? ProfileChangeMode.EDIT_MODE : ProfileChangeMode.ADD_MODE
    return (
        <Profile
            user = {user}
            route = {route}
            type = {type}
        />
    )
}
export default ProfileScreen;