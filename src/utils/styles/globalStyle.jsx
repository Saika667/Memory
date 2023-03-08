import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Shadows Into Light', sans-serif;
    }
    body {
        margin: 0;
        overflow: hidden;
    }
    h1, h2, p {
        margin: 0;
    }
`

function GlobalStyle() {  
    return <StyledGlobalStyle />
}

export default GlobalStyle