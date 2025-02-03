import React from 'react';
import styled from 'styled-components';

const StyledJumbotron = styled.div`
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: 0.3rem;
`;

const Jumbotron = ({ children }) => {
  return <StyledJumbotron>{children}</StyledJumbotron>;
};

export default Jumbotron; 