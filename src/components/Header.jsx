import { useState } from 'react'
import StyledHeader from './styles/Header.styled'

import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import HorizontalLine from '../components/HorizontalLine'
import ThemeToggle from '../components/ThemeToggle'

const Header = ({ toggleTheme }) => {
  const [theme, setTheme] = useState()

  return (
    <StyledHeader>
      <Title text="Social Media Dashboard" />
      <Subtitle text="Total Followers: 23,004" />
      <HorizontalLine />
      <ThemeToggle toggleTheme={toggleTheme}/>
    </StyledHeader>
  )
}

  export default Header
