import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import MonthlyGoal from "./MonthlyGoal";
import { goalsReducer } from "../../store/features/goalsSlice";

const store = configureStore({
  reducer: goalsReducer,
});

describe("Given a MonthlyGoal component", () => {
  describe("When rendered with monthly goal 'Finish bootcamp'", () => {
    test("Then it should show the monthly goal's name 'Finish bootcamp'", () => {
      const goal = {
        id: 1,
        title: "Finish bootcamp",
        isCompleted: false,
        weeklyGoals: [],
      };
      const expectedName = "Finish bootcamp";

      render(
        <Provider store={store}>
          <MonthlyGoal goal={goal} />
        </Provider>
      );
      const monthlyGoalName = screen.getByText(expectedName);

      expect(monthlyGoalName).toBeInTheDocument();
    });
  });
});
