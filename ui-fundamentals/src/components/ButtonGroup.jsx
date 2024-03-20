import React from 'react';
import styled from 'styled-components';

const StyledButtonGroup = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  /*
  // Apply space between buttons 
  & > * {
    margin-right: 8px; 
  }

  // Remove margin from last button to avoid extra space 
  & > *:last-child {
    margin-right: 0;
  }
  */
`;

function ButtonGroup({ children, ...otherProps }) {
  return <StyledButtonGroup {...otherProps}>{children}</StyledButtonGroup>;
}

export default ButtonGroup;
