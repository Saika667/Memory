import styled from "styled-components";

export const GameTitle = styled.h1`
    text-transform: uppercase;
    text-align: center;
    font-size: 45px;
    padding: 10px 0;
    position: relative;
    z-index: 2;
`

export const PageContainer = styled.div`
    background: ${props => props.theme.background};
    height: 100vh;
`