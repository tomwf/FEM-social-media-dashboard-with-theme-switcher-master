import styled from 'styled-components'

const StyledHorizontalLine = styled.hr`
  border: none;
  height: 1px;
  background-color: ${props => props.theme.textColor};
  margin: 1.75em 0;
`

export default StyledHorizontalLine
