import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

// Styled components
const AccordionContainer = styled.div`
  border: 1px solid ${props => (props.color || '#eee')};
  margin-bottom: ${props => (props.disableGutters ? '0' : '10px')};
`;

const AccordionHeader = styled.div`
  padding: 10px 21px;
  user-select: none; 
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${props => (props.disabled ? 'rgba(0, 0, 0, 0.3)' : 'rgb(50, 50, 50)')};
  background-color: ${props => (props.disabled ? 'var(--color-grey-200)' : props.color || '#f9f9f9')};
  display: flex;
  align-items: center;
`;

const AccordionContent = styled.div`
  padding: 10px 21px;
  color: var(--color-grey-500);
  background-color: ${props => (props.color || '#f9f9f9')};
  /* display: ${props => (props.isOpen ? 'block' : 'none')}; */
  opacity: 97%;
`;

const ArrowIcon = styled.span`
  margin-left: auto;
  /* transform: rotate(${props => (props.isOpen ? '90deg' : '0deg')}); */
  transition: all 0.3s ease;
`;

const Subtitle= styled.span`
  margin-left: auto;
  padding-left: 10px;
  color: var(--color-grey-500);
`;

// Accordion component
const Accordion = ({ title, subtitle, children, color, defaultExpanded, disabled, disableGutters, ...otherProps }) => {
  const [isOpen, setIsOpen] = useState(defaultExpanded);

  const toggleAccordion = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <AccordionContainer color={color} disableGutters={disableGutters} {...otherProps}>
      <AccordionHeader onClick={toggleAccordion} color={color} disabled={disabled}>
        <b>{title}</b> <Subtitle>{subtitle}</Subtitle>
        {isOpen ? (<ArrowIcon><MdKeyboardArrowUp /></ArrowIcon>) : (<ArrowIcon><MdKeyboardArrowDown /></ArrowIcon>)}
      </AccordionHeader>
      {isOpen ? (
        <AccordionContent>
          {children}
        </AccordionContent>
      ) : null}
    </AccordionContainer>
  );
};

Accordion.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  defaultExpanded: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  isOpen: PropTypes.bool,
  disableGutters: PropTypes.bool,
};

Accordion.defaultProps = {
  defaultExpanded: false,
  disabled: false,
  disableGutters: false,
  color: '#f9f9f9'
};

export default Accordion;
