import { Goal } from "../../types";
import MonthlyGoalStyled from "./MonthlyGoalStyled";

interface MonthlyGoalProps {
  goal: Goal;
}
const MonthlyGoal = ({ goal }: MonthlyGoalProps): JSX.Element => {
  return (
    <MonthlyGoalStyled>
      <input type="checkbox" checked={goal.isCompleted} />
      <span>{goal.title}</span>
    </MonthlyGoalStyled>
  );
};

export default MonthlyGoal;
