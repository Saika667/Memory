import styled from "styled-components";

export const GameTitle = styled.h1`
    text-transform: uppercase;
    text-align: center;
    font-size: 2.813rem;
    text-shadow: 0px 0px 10px white;
    padding: 10px 0;
    position: relative;
    z-index: 2;
    color: ${props => props.theme.primary};
`

export const PageContainer = styled.div`
    background: ${props => props.theme.background};
    height: 100vh;
`