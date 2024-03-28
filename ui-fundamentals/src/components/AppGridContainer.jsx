import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${props => props.minwidth || '300px'}, 1fr)); 
    grid-gap: 20px;
    width: 100%;
    margin-top: 1.6rem;
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
`;

function AppGridContainer({ children, width }) {
    return (
        <GridContainer data-testid='Grid-Container' minwidth={width}>
            {children}
        </GridContainer>
    );
}

export default AppGridContainer;
