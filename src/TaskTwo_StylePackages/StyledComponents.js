import React from 'react';
import styled from "styled-components";

const StyledComponents = () => {
    const StyledDiv = styled.div`
    text-align: center;
    margin: 16px;
    padding: 16px;
    display: block;
    background-color: ${props => props.alt ? 'red' : 'purple'};
    
    &:hover{
        background-color: green;
    };

    `
    return (
        <StyledDiv alt={'yes'}>
            This is a styled-comppenents
        </StyledDiv>
    );
}

export default StyledComponents;