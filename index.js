/**
 * @format
 */

 import * as React from "react";
 import { AppRegistry } from "react-native";
 import { DefaultTheme } from "@react-navigation/native";
 import { Provider as PaperProvider } from "react-native-paper";
 import App from "./App";
 import { name as appName } from "./app.json";
 
 const theme = {
   ...DefaultTheme,
   dark: true,
   roundness: 10,
   colors: {
     ...DefaultTheme.colors,
     text: "#32a7ef",
     background: "#F4F5F9",
     gray: "#858585",
     white: "#fff",
     default: "#f2f2f2",
   },
   fonts: {
     ...DefaultTheme.fonts,
     small: 15,
     regular: 16,
     big: 20,
     icon: 30,
   },
 };
 
 export default function Main() {
   return (
     <PaperProvider theme={theme}>
       <App />
     </PaperProvider>
   );
 }

 export const getExercises = () => {
    return client
      .query(q.Paginate(q.Match(q.Ref('indexes/exercises_index'))))
      .then(response => {
        const exercises_ref = response.data;
        const getAllDataQuery = exercises_ref.map(ref => {
          return q.Get(ref);
        });
        return client.query(getAllDataQuery).then(data => data);
      })
      .catch(error => console.error('Error: ', error.message));
  };


  export const saveExercise = (name, category, primary_muscle) => {
    return client
      .query(
        q.Create(q.Collection('exercises'), {
          data: {
            name,
            category,
            primary_muscle,
          },
        }),
      )
      .then(ret => ret)
      .catch(error => console.error('Error: ', error.message));
  };

  export const getWorkoutsByExercise = exercise_id => {
    return client
      .query(
        q.Paginate(
          q.Match(q.Ref('indexes/workouts_by_exercise_id_index'), exercise_id),
        ),
      )
      .then(response => {
        const workouts_ref = response.data;
        const getAllDataQuery = workouts_ref.map(ref => {
          return q.Get(ref);
        });
        return client.query(getAllDataQuery).then(data => data);
      })
      .catch(error => console.error('Error: ', error.message));
  };


  export const saveWorkout = (exercise_id, weight, reps) => {
    const time_created = Math.round(new Date().getTime() / 1000);
    return client
      .query(
        q.Create(q.Collection('workouts'), {
          data: {
            exercise_id,
            weight,
            reps,
            time_created,
          },
        }),
      )
      .then(ret => console.log('created workout: ', ret))
      .catch(error => console.error('Error: ', error.message));
  };


  export const updateWorkout = (id, weight, reps) => {
    return client
      .query(
        q.Update(q.Ref(q.Collection('workouts'), id), {
          data: {
            weight,
            reps,
          },
        }),
      )
      .then(ret => console.log('updated workout: ', ret))
      .catch(error => console.error('Error: ', error.message));
  };

  export const deleteWorkout = id => {
    return client
      .query(q.Delete(q.Ref(q.Collection('workouts'), id)))
      .then(ret => console.log('deleted workout'))
      .catch(err => console.error('Error: %s', err));
  };
 
 AppRegistry.registerComponent(appName, () => Main);