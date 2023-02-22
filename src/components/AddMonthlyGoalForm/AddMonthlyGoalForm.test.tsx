import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { goalsReducer } from "../../store/features/goalsSlice";
import AddMonthlyGoalForm from "./AddMonthlyGoalForm";

const store = configureStore({
  reducer: goalsReducer,
});

describe("Given an AddMonthlyGoalForm component", () => {
  describe("When rendered", () => {
    test("Then it should show an input field for a monthly goal", () => {
      render(
        <Provider store={store}>
          <AddMonthlyGoalForm />
        </Provider>
      );
      const inputField = screen.getByRole("textbox");

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show an 'Add Goal' button to submit the form", () => {
      const buttonText = "Add Goal";

      render(
        <Provider store={store}>
          <AddMonthlyGoalForm />
        </Provider>
      );
      const addButton = screen.getByRole("button", { name: buttonText });

      expect(addButton).toBeInTheDocument();
    });
  });
});
