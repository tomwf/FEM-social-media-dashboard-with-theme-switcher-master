import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    font-family: "Inter", sans-serif;
    font-size: 14px;
  }

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  main {
    padding: 1.5em;
  }
`

export default GlobalStyles
