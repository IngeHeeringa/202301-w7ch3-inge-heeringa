import { GoalsState } from "../../types";
import { addGoalActionCreator, goalsReducer } from "./goalsSlice";

describe("Given a goalsReducer function", () => {
  describe("When it receives an empty list and an addGoal action with a payload of a new goal title 'Finish bootcamp'", () => {
    test("Then it should return a list with one goal named 'Finish bootcamp' and an id of 1", () => {
      const currentGoals: GoalsState = [];

      const newGoal = {
        id: 1,
        title: "Finish bootcamp",
        completed: false,
      };

      const expectedGoals = [
        {
          id: 1,
          title: "Finish bootcamp",
          completed: false,
        },
      ];

      const addGoalAction = addGoalActionCreator(newGoal.title);

      const newGoals = goalsReducer(currentGoals, addGoalAction);

      expect(newGoals).toStrictEqual(expectedGoals);
    });
  });
});
