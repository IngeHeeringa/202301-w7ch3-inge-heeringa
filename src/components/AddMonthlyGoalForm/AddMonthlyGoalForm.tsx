import { useState } from "react";
import { addGoalActionCreator } from "../../store/features/goalsSlice";
import { useAppDispatch } from "../../store/hooks";
import AddMonthlyGoalFormStyled from "./AddMonthlyGoalFormStyled";

const AddMonthlyGoalForm = (): JSX.Element => {
  const [newGoalTitle, setNewGoalTitle] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addGoalActionCreator(newGoalTitle));
    setNewGoalTitle("");
  };

  return (
    <AddMonthlyGoalFormStyled
      className="add-monthly-goal-form"
      onSubmit={handleSubmit}
    >
      <input
        className="add-monthly-goal-form__input"
        type="text"
        value={newGoalTitle}
        onChange={(event) => setNewGoalTitle(event.target.value)}
        required
      />
      <button className="add-monthly-goal-form__button">Add Goal</button>
    </AddMonthlyGoalFormStyled>
  );
};

export default AddMonthlyGoalForm;
