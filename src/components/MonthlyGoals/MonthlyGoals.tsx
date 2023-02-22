import { useAppSelector } from "../../store/hooks";
import { Goal } from "../../types";

const MonthlyGoals = (): JSX.Element => {
  const goals = useAppSelector((state) => {
    return state.goals;
  });

  return (
    <ul>
      {goals.map((goal: Goal) => (
        <li key={goal.id}>
          <input type="checkbox" checked={goal.completed} />
          <span>{goal.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default MonthlyGoals;
