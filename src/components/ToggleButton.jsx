import StyledToggleButton from './styles/ToggleButton.styled'

const ToggleButton = ({ toggleTheme, isDarkTheme }) => (
  <StyledToggleButton
    onClick={toggleTheme}
  >
    <span className={isDarkTheme ? 'dark' : ''}></span>
  </StyledToggleButton>
)

export default ToggleButton
