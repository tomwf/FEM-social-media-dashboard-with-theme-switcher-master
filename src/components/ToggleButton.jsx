import StyledToggleButton from './styles/ToggleButton.styled'
import { useTheme, useThemeUpdate } from '../theme/theme'

const ToggleButton = () => {
  const isDarkTheme = useTheme()
  const toggleTheme = useThemeUpdate()

  return (
    <StyledToggleButton onClick={toggleTheme}>
      <span className={isDarkTheme ? 'dark' : ''}></span>
    </StyledToggleButton>
  )
}

export default ToggleButton
