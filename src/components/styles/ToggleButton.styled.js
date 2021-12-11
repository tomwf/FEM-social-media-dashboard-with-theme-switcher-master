import styled from 'styled-components'
import theme from '../../theme/theme'

const StyledToggleButton = styled.label`
  position: relative;
  display: inline-block;
  width: 47px;
  height: 24px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${theme.colors.toggleLight};
    border-radius: 2em;
  }

  span:hover {
    background: ${theme.colors.toggleDark};
  }

  span:before {
    content: '';
    height: 18px;
    width: 18px;
    background-color: ${theme.colors.whiteBg};
    border-radius: 50%;
    transform: translateX(-4px);
    transition: .4s;
  }

  input:checked + span {
    background: ${theme.colors.toggleDark};
  }

  input:checked + span:before {
    transform: translateX(-25px);
  }
`

export default StyledToggleButton
