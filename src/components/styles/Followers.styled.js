import styled from 'styled-components'
import theme from '../../theme/theme'

const StyledFollowers = styled.div`
  border-radius: .35em;
  overflow: hidden;
  background: ${props => theme.colors[props.color]};
  padding-top: 4px;
  width: 100%;
  max-width: 333px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em;
    //background-color: ${theme.colors.lightGrayishBlueCardBg};
    padding: 2em;
  }

  div > div:first-child {
    display: flex;
    flex-direction: row;
    gap: .5em;
  }

  div > div:first-child > a {
    font-weight: 700;
    color: ${theme.colors.darkGrayishBlueText};
  }

  div > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div > div:nth-child(2) > span:first-child {
    font-size: 4rem;
    font-weight: 700;
  }

  div > div:nth-child(2) > span:last-child {
    letter-spacing: 4px;
    color: ${theme.colors.desaturatedBlueText};
  }

  div > div:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .25em;
  }

  p {
    font-weight: 700;
  }

  .up {
    color: ${theme.colors.limeGreen}
  }

  .down {
    color: ${theme.colors.brightRed};
  }
`

export default StyledFollowers
