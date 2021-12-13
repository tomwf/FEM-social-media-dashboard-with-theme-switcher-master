import styled from 'styled-components'
import theme from '../../theme/theme'

const StyledDetails = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  width: 100%;
  max-width: 333px;
  border-radius: .35em;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div:last-child {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  div:last-child > span:first-child {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${props => props.theme.titleColor};
  }

  div:last-child > div {
    display: flex;
    align-items: center;
    gap: .25em;
  }

  div:last-child > div > span {
    font-weight: 700;
  }
`

export default StyledDetails
