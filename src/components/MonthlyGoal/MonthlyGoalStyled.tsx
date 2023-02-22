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
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 2px solid var(--primary-color);
    width: 18px;
    height: 18px;
    margin-right: 8px;
    position: relative;
    vertical-align: middle;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  input[type="checkbox"]:checked::before {
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: var(--primary-color);
    transition: all 0.3s ease;
  }

  span {
    flex-grow: 1;
  }

  .completed {
    text-decoration: line-through;
  }
`;

export default MonthlyGoalStyled;
