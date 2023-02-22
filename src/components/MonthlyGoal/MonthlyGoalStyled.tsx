import styled from "styled-components";

const MonthlyGoalStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  background-color: #fff;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  width: 100%;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  input[type="checkbox"] {
    margin-right: 8px;
  }

  span {
    flex-grow: 1;
  }
`;

export default MonthlyGoalStyled;
