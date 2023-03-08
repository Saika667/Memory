import styled from "styled-components";

export const GameTitle = styled.h1`
    text-transform: uppercase;
    text-align: center;
    font-size: 50px;
    padding: 20px 0;
`

export const PageContainer = styled.div`
    background-color: ${props => props.theme.primary};
    min-height: 100vh;
`