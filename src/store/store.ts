import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { goalsSlice } from "./features/goalsSlice";

export const store = configureStore({
  reducer: {
    goals: goalsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
