import { useAppSelector } from "../../store/hooks";
import { Goal } from "../../types";
import MonthlyGoal from "../MonthlyGoal/MonthlyGoal";

const MonthlyGoals = (): JSX.Element => {
  const goals = useAppSelector((state) => {
    return state.goals;
  });

  return (
    <ul className="monthly-goals">
      {goals.map((goal: Goal) => (
        <li key={goal.id}>
          <MonthlyGoal goal={goal} />
        </li>
      ))}
    </ul>
  );
};

export default MonthlyGoals;
