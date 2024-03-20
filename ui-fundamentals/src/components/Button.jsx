import React from 'react';
import { styled, css } from 'styled-components';

const variations = {
  contained: css`
    color: #fff;
    background-color: ${props => getColor(props.color)};
    border: none;
    &:hover {
      background-color: ${props => getHoverColor(props.color)};
    }
  `,
  outlined: css`
    color: ${props => getColor(props.color)};
    background-color: transparent;
    border: 1px solid ${props => getColor(props.color)};
    &:hover {
      border-color: ${props => getHoverColor(props.color)};
      color: ${props => getHoverColor(props.color)};
    }
  `
};

const sizes = {
  sm: css`
    font-size: 14px;
    padding: 6px 12px;
  `,
  md: css`
    font-size: 16px;
    padding: 10px 20px;
  `,
  lg: css`
    font-size: 18px;
    padding: 14px 28px;
  `,
};

const colors = {
  primary: 'var(--color-blue-600)',
  secondary: 'var(--color-grey-600)',
  info: 'var(--color-sky-500)',
  success: 'var(--color-green-500)',
  warning: 'var(--color-yellow-500)',
  danger: 'var(--color-red-700)',
};

const getColor = (color) => {
  return colors[color] || colors.primary;
};

const getHoverColor = (color) => {
  switch (color) {
    case 'primary':
      return 'var(--color-blue-700)';
    case 'secondary':
      return 'var(--color-grey-700)';
    case 'info':
      return 'var(--color-sky-700)';
    case 'success':
      return 'var(--color-green-700)';
    case 'warning':
      return 'var(--color-yellow-700)';
    case 'danger':
      return 'var(--color-red-800)';
    default:
      return 'var(--color-blue-700)';
  }
};

const StyledButton = styled.button`
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  ${props => variations[props.variant]}
  ${props => sizes[props.size]}
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'}; 
`;

function Button({ children, variant, color, size, ...otherProps }) {
  return (
    <StyledButton variant={variant} color={color} size={size} {...otherProps}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  variant: 'contained',
  color: 'primary',
  size: 'md',
  uppercase: false, // Default to not uppercase
};

export default Button;
