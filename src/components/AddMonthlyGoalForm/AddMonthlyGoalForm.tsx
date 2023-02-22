import { useState } from "react";
import { addMonthlyGoalActionCreator } from "../../store/features/goalsSlice";
import { useAppDispatch } from "../../store/hooks";
import AddMonthlyGoalFormStyled from "./AddMonthlyGoalFormStyled";

const AddMonthlyGoalForm = (): JSX.Element => {
  const [newMonthlyGoalTitle, setNewMonthlyGoalTitle] = useState("");
  const dispatch = useAppDispatch();

  const handleMonthlyGoalSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addMonthlyGoalActionCreator(newMonthlyGoalTitle));
    setNewMonthlyGoalTitle("");
  };

  return (
    <AddMonthlyGoalFormStyled
      className="add-monthly-goal-form"
      onSubmit={handleMonthlyGoalSubmit}
    >
      <input
        className="add-monthly-goal-form__input"
        type="text"
        value={newMonthlyGoalTitle}
        onChange={(event) => setNewMonthlyGoalTitle(event.target.value)}
        required
      />
      <button className="add-monthly-goal-form__button">Add Goal</button>
    </AddMonthlyGoalFormStyled>
  );
};

export default AddMonthlyGoalForm;
