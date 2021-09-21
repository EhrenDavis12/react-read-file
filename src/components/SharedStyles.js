import styled from "styled-components";
import { Button as button } from "react-bootstrap";

export const Styled = styled;

export const ComponentBox = Styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 10px, rgba(0, 0, 0, 0.22) 0px 3px 10px;
  padding: 10px;
  margin-top: 10px;
`;

export const ErrorMessage = Styled.div`
  color: red;
`;

export const Button = Styled(button)`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 10px, rgba(0, 0, 0, 0.22) 0px 3px 10px;
  // background-color: lightblue;
`;

export const Ul = Styled.ul`
  -webkit-column-width: 150px;
  -moz-column-width: 150px;
  column-width: 150px;
`;

export const Text = Styled.div`
white-space: pre-line;
word-wrap: break-word;
`;

export const Tab = Styled.div`
margin-left: 30px;
`;
