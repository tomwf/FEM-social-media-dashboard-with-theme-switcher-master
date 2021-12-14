import { createGlobalStyle } from 'styled-components'
import themes from '../../theme/theme'

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

  a {
    text-decoration: none;
    color: inherit;
  }

  h2 {
    color: ${themes.colors.darkGrayishBlueText};
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  body {
    background-color: ${({theme}) => theme.bodyBg};
    color: ${({theme}) => theme.textColor};
  }

  main {
    padding: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .bg {
    background-color: ${({theme}) => theme.topBgPattern};
    position: absolute;
    top: 0;
    width: 100%;
    height: 314px;
    z-index: -1;
  }

  @media (min-width: 733px) {
    .bg {
      height: 240px;
    }
  }

  .card {
    background-color: ${({theme}) => theme.cardBg};
    transition: .2s;
    width: 100%;
    max-width: 285px;
  }

  .card:hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.cardBgHover}
  }


  .up {
    color: ${themes.colors.limeGreen}
  }

  .down {
    color: ${themes.colors.brightRed};
  }

  .attribution {
    font-size: 11px;
    text-align: ce
    nter;
  }

  .attribution a {
    color: hsl(228, 45%, 44%);
  }

  footer {
    text-align: center;
  }
`

export default GlobalStyles
