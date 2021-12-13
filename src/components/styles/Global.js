import { createGlobalStyle } from 'styled-components'
import theme from '../../theme/theme'

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
    color: ${theme.colors.darkGrayishBlueText};
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  body {
    background-color: ${props => props.theme.bodyBg};
    color: ${props => props.theme.textColor};
  }

  main {
    padding: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .bg {
    background-color: ${props => props.theme.topBgPattern};
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
    background-color: ${props => props.theme.cardBg};
    transition: .2s;
  }

  .card:hover {
    cursor: pointer;
    background-color: ${props => props.theme.cardBgHover}
  }


  .up {
    color: ${theme.colors.limeGreen}
  }

  .down {
    color: ${theme.colors.brightRed};
  }

  .attribution {
    font-size: 11px;
    text-align: center;
  }

  .attribution a {
    color: hsl(228, 45%, 44%);
  }

  footer {
    text-align: center;
  }
`

export default GlobalStyles
