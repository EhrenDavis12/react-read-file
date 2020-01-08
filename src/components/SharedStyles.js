import styled from "styled-components";
import { Button as button } from "react-bootstrap";

export const Styled = styled;

export const ComponentBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 10px, rgba(0, 0, 0, 0.22) 0px 3px 10px;
  padding: 10px;
  margin-top: 10px;
`;

export const ErrorMessage = styled.div`
  color: red;
`;

export const Button = styled(button)`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 10px, rgba(0, 0, 0, 0.22) 0px 3px 10px;
  // background-color: lightblue;
`;

export const Ul = styled.ul`
  -webkit-column-width: 150px;
  -moz-column-width: 150px;
  column-width: 150px;
`;
