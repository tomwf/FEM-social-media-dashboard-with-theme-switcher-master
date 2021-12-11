import ToggleButton from 'react-toggle-button'
import { useState } from 'react'

import StyledThemeToggle from './styles/ThemeToggle.styled'
import Subtitle from './Subtitle'
import theme from '../theme/theme'

const ThemeToggle = () => {
  const [state, setState] = useState({ value: false });

  return (
    <StyledThemeToggle>
      <Subtitle text='Dark Mode' />
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
    </StyledThemeToggle>
  )
}

export default ThemeToggle
