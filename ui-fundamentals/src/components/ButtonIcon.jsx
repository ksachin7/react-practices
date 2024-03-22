import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover, &:focus {
    background-color: transparent;
    outline: none;
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-yellow-500);
  }
`;

export default ButtonIcon;
