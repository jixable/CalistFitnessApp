import React, { useState } from "react";
const AppContext = React.createContext();

const AppContextProvider = (props) => {
  const [isAddingExercise, setIsAddingExercise] = useState(false); // whether to show the add exercise modal or not
  const [workoutHistory, setWorkoutHistory] = useState([]); 

  const value = {
    isAddingExercise,
    setIsAddingExercise,
    workoutHistory,
    setWorkoutHistory,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };