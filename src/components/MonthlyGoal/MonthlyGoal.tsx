import {
  deleteMonthlyGoalActionCreator,
  toggleCompleteActionCreator,
} from "../../store/features/goalsSlice";
import { useAppDispatch } from "../../store/hooks";
import { Goal } from "../../types";
import MonthlyGoalStyled from "./MonthlyGoalStyled";

interface MonthlyGoalProps {
  goal: Goal;
}
const MonthlyGoal = ({ goal }: MonthlyGoalProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleToggleComplete = () => {
    dispatch(toggleCompleteActionCreator(goal.id));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteMonthlyGoalActionCreator(id));
  };

  return (
    <MonthlyGoalStyled>
      <input
        type="checkbox"
        checked={goal.isCompleted}
        onChange={() => handleToggleComplete()}
      />
      <span className={goal.isCompleted ? "completed" : ""}>{goal.title}</span>
      <button onClick={() => handleDelete(goal.id)}>Delete</button>
    </MonthlyGoalStyled>
  );
};

export default MonthlyGoal;
