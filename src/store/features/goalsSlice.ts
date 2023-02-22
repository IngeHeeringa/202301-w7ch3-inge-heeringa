import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GoalsState } from "../../types";

const initialState: GoalsState = [];

export const goalsSlice = createSlice({
  name: "goals",
  initialState: initialState,
  reducers: {
    addGoal: (currentGoals: GoalsState, action: PayloadAction<string>) => [
      ...currentGoals,
      {
        id: currentGoals.length + 1,
        title: action.payload,
        isCompleted: false,
      },
    ],
  },
});

export const goalsReducer = goalsSlice.reducer;
export const { addGoal: addGoalActionCreator } = goalsSlice.actions;
