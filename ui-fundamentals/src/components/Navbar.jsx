import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: ${props => props.backgroundColor || 'var(--color-grey-100)'};
  color: var(--color-grey-900);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarBrand = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

// Define the keyframes animation
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const BrandImage = styled.img`
  width: 40px; 
  height: auto;
  margin-right: 10px; 
  animation: ${rotateAnimation} 2s linear infinite;
`;

const BrandText = styled.span`
  font-weight: bold;
`;

const NavbarMenu = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarMenuItem = styled.div`
  margin-left: 1rem; /* Add margin between menu items */
`;

const Navbar = ({ logo, title, color, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer backgroundColor={color}>
      <NavbarBrand>
        {logo && <BrandImage src={logo} alt="Brand Logo" />}
        {title && <BrandText>{title}</BrandText>}
      </NavbarBrand>
      {children}
    </NavbarContainer>
  );
};

export default Navbar;
