import { useState } from 'react'

import StyledThemeToggle from './styles/ThemeToggle.styled'
import Subtitle from './Subtitle'
import theme from '../theme/theme'
import ToggleButton from './ToggleButton'

const ThemeToggle = ({ toggleTheme, isDarkTheme }) => {
  const [state, setState] = useState({ value: false });

  return (
    <StyledThemeToggle>
      <Subtitle text='Dark Mode' />
      <ToggleButton
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
      />
    </StyledThemeToggle>
  )
}

/*
<ToggleButton
  value={state.value}
  inactiveLabel={''}
  activeLabel={''}
  colors={{
    activeThumb: {
    },
    inactiveThumb: {
    },
    active: {
      base: theme.toRgb('toggleDark')
    },
    inactive: {
      base: theme.toRgb('toggleLight')
    }
  }}
  trackStyle={{
    backgroundColor: 'red',
    width: '47px',
    height: '23px'
  }}
  thumbStyle={{
    color: 'red',
    backgroundColor: 'red',
    border: `1px solid ${theme.toRgb('lightGrayishBlueCardBg')}`
  }}
  thumbAnimateRange={[26, 3]}
  onToggle={(value) => {
    setState({
      value: !value
    })
  }}
/>
*/
export default ThemeToggle
