import styled from 'styled-components'
import theme, { darkTheme } from '../../theme/theme'

const StyledToggleButton = styled.button`
  background-color: ${theme.colors.toggleLight};
  background: ${props => props.theme.toggleBtnColor}};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 47px;
  height: 24px;
  border-radius: 2em;

  :hover {
    background: ${darkTheme.toggleBtnColor};
  }

  span.dark {
    transform: translateX(-25px);
  }

  span {
    display: block;
    height: 18px;
    width: 18px;
    background-color: ${theme.colors.whiteBg};
    border-radius: 50%;
    transform: translateX(-4px);
    transition: .4s;
  }
`

export default StyledToggleButton
