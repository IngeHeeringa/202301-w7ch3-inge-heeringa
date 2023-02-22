import AddMonthlyGoalForm from "./components/AddMonthlyGoalForm/AddMonthlyGoalForm";
import MonthlyGoals from "./components/MonthlyGoals/MonthlyGoals";

const App = (): JSX.Element => {
  return (
    <>
      <h1>Monthly Goals</h1>
      <MonthlyGoals />
      <AddMonthlyGoalForm />
    </>
  );
};

export default App;
