import styled from "styled-components";

const AddMonthlyGoalFormStyled = styled.form`
  display: flex;
  margin-bottom: 16px;

  input[type="text"] {
    margin-right: 8px;
    padding: 8px;
    border-radius: 4px;
    border: none;
    font-size: 16px;
  }

  button {
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    font-size: 16px;
    background-color: var(--primary-color);
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--secondary-color);
    }
  }
`;

export default AddMonthlyGoalFormStyled;
