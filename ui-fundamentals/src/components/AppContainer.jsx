import React from 'react'
import { styled } from 'styled-components';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    width: 100%;
    /* Media query for smaller screens */
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
`;
function AppContainer({ children }) {
    return (<GridContainer>{children}</GridContainer>)
}

export default AppContainer