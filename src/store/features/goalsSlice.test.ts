import { GoalsState } from "../../types";
import {
  addMonthlyGoalActionCreator,
  deleteMonthlyGoalActionCreator,
  goalsReducer,
  toggleCompleteActionCreator,
} from "./goalsSlice";

describe("Given a goalsReducer function", () => {
  describe("When it receives an empty list and an addGoal action with a payload of a new goal title 'Finish bootcamp'", () => {
    test("Then it should return a list with one goal named 'Finish bootcamp' and an id of 1", () => {
      const currentGoals: GoalsState = [];

      const newGoal = {
        id: 1,
        title: "Finish bootcamp",
        isCompleted: false,
      };

      const expectedGoals = [
        {
          id: 1,
          title: "Finish bootcamp",
          isCompleted: false,
        },
      ];

      const addGoalAction = addMonthlyGoalActionCreator(newGoal.title);

      const newGoals = goalsReducer(currentGoals, addGoalAction);

      expect(newGoals).toStrictEqual(expectedGoals);
    });
  });

  describe("When it receives a list with one goal named 'Finish bootcamp' and a toggleComplete action with a payload of the id of that goal", () => {
    test("Then it should return a list with one goal named 'Finish bootcamp' and a positive complete status", () => {
      const currentGoals = [
        {
          id: 1,
          title: "Finish bootcamp",
          isCompleted: false,
        },
      ];

      const expectedGoals = [
        {
          id: 1,
          title: "Finish bootcamp",
          isCompleted: true,
        },
      ];

      const toggleCompleteAction = toggleCompleteActionCreator(
        currentGoals[0].id
      );

      const newGoals = goalsReducer(currentGoals, toggleCompleteAction);

      expect(newGoals).toStrictEqual(expectedGoals);
    });
  });

  describe("When it receives a list with one goal named 'Finish bootcamp' and a deleteMonthlyGoal action with a payload of the id of that goal", () => {
    test("Then it should return an empty list", () => {
      const currentGoals: GoalsState = [
        {
          id: 1,
          title: "Finish bootcamp",
          isCompleted: false,
        },
      ];

      const expectedGoals: GoalsState = [];

      const deleteMonthlyGoalAction = deleteMonthlyGoalActionCreator(
        currentGoals[0].id
      );

      const newGoals = goalsReducer(currentGoals, deleteMonthlyGoalAction);

      expect(newGoals).toStrictEqual(expectedGoals);
    });
  });
});
