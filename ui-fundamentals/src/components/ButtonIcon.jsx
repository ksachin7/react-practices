import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledButtonIcon = styled.button`
  background: none;
  border: none;
  padding: ${({ size }) => {
    switch (size) {
      case 'sm':
        return '0.4rem';
      case 'lg':
        return '0.8rem';
      default:
        return '0.6rem';
    }
  }};
  display: flex;
  align-items: center;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  &:hover, &:focus {
    background-color: transparent;
    outline: none;
  }

  & svg {
  width: ${({ size }) => {
    switch (size) {
      case 'sm':
        return '1.6rem';
      case 'lg':
        return '2.8rem';
      default:
        return '2.2rem';
    }
  }
  };
  height: auto;
  color: ${({ color }) => color || 'darkGrey'};
}
`;

function ButtonIcon({ color, size, children, ...otherProps }) {
  return (
    <StyledButtonIcon data-testid='Styled-Button-Icon' color={color} size={size} {...otherProps}>{children}</StyledButtonIcon>
  )
}

ButtonIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.node.isRequired,
};

ButtonIcon.defaultProps = {
  color: 'darkGrey',
  size: 'md',
};

export default ButtonIcon;
