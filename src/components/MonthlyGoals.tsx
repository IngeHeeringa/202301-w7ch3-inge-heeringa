import { useState } from "react";
import { addGoalActionCreator } from "../store/features/goalsSlice";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Goal } from "../types";

const MonthlyGoals = (): JSX.Element => {
  const [newGoalTitle, setNewGoalTitle] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addGoalActionCreator(newGoalTitle));
    setNewGoalTitle("");
  };

  const goals = useAppSelector((state) => {
    return state.goals;
  });

  return (
    <div>
      <h1>Goals</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newGoalTitle}
          onChange={(e) => setNewGoalTitle(e.target.value)}
        />
        <button>Add Goal</button>
      </form>
      <ul>
        {goals.map((goal: Goal) => (
          <li key={goal.id}>
            <input type="checkbox" checked={goal.completed} />
            <span>{goal.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonthlyGoals;
