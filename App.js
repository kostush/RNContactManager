import 'react-native-gesture-handler';

import * as React from 'react';
import {Provider, useSelector} from "react-redux";
import  { store } from './store/store';
import {StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity, ActivityIndicator, Platform} from 'react-native';
import Navigator from './navigation/Navigation';

import { StatusBar } from 'expo-status-bar';


export default function  App()  {
    return (
        <Provider store={store}>
           <View style={styles.appContainer}>
               {/*<View>*/}
               {/*    <Text>skjvhdfubvnodfin</Text>*/}
               {/*</View>*/}
               <View style={styles.navigatorContainer}>
                   <Navigator  />
               </View>
               <StatusBar style='auto'/>
           </View>
        </Provider>
    )
}

// export default function App() {
//     const [courseGoals, setCourseGoals] = useState([]);
//     function addGoalHandler(enteredGoalText) {
//         setCourseGoals((currentCourseGoals) => [
//             ...courseGoals,
//             {text:enteredGoalText, id: Math.random().toString()},
//         ]);
//         console.log(courseGoals);
//     }
//
//     function deleteGoalHandler (id) { console.log('delete',id);
//         setCourseGoals((currentCourseGoals) => {
//             return currentCourseGoals.filter((goal) => goal.id !== id);
//         })
//     }
//   return (
//     <View style={styles.appContainer}>
//      <GoalInput onAddGoal={addGoalHandler}/>
//         <View style={styles.goalsContainer}>
//             <FlatList
//                 data={courseGoals}
//                 renderItem={(itemData) =>{
//                     return <GoalItem text = {itemData.item.text}
//                                      id =  {itemData.item.id}
//                                      onDeleteItem = {deleteGoalHandler}
//                     />
//                 }}
//                 keyExtractor={(item,index) =>{
//                     return item.id
//                 }}
//                 alwaysBounceVertical={false}
//             />
//         </View>
//
//         <StatusBar />
//     </View>
//   );
// }
//
const styles = StyleSheet.create({
    appContainer: {
      flex:1,
    //  backgroundColor:"#5e0acc",
        marginTop:20,
        //alignItems:'center',
      //  justifyContent:'center',
    },


    textHeader:{
      marginTop:30,
        marginHorizontal:100
        // flex:1,
        // justifyContent:'center'

    },



    contactsContainer:{
        // flex:5,
        // backgroundColor:'#5e0acc',
    },
    navigatorContainer:{
        flex:1,
        justifyContent:'center'

    }


 });
