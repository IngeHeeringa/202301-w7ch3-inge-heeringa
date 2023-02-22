import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GoalsState } from "../../types";

const initialState: GoalsState = [];

export const goalsSlice = createSlice({
  name: "goals",
  initialState: initialState,
  reducers: {
    addMonthlyGoal: (
      currentGoals: GoalsState,
      action: PayloadAction<string>
    ) => [
      ...currentGoals,
      {
        id: currentGoals.length + 1,
        title: action.payload,
        isCompleted: false,
      },
    ],
    toggleComplete: (
      currentGoals: GoalsState,
      action: PayloadAction<number>
    ) => {
      const index = currentGoals.findIndex(
        (goal) => goal.id === action.payload
      );
      currentGoals[index].isCompleted = !currentGoals[index].isCompleted;
    },
    deleteMonthlyGoal: (
      currentGoals: GoalsState,
      action: PayloadAction<number>
    ) => {
      return currentGoals.filter((goal) => goal.id !== action.payload);
    },
  },
});

export const goalsReducer = goalsSlice.reducer;
export const {
  addMonthlyGoal: addMonthlyGoalActionCreator,
  toggleComplete: toggleCompleteActionCreator,
  deleteMonthlyGoal: deleteMonthlyGoalActionCreator,
} = goalsSlice.actions;
