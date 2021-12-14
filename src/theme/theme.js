import React, { useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export const useTheme = () => useContext(ThemeContext)

export const useThemeUpdate = () => useContext(ThemeUpdateContext)

export const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => setDarkTheme(!isDarkTheme)

  return(
    <ThemeContext.Provider value={isDarkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        <ThemeProvider theme={isDarkTheme ? themes.dark : themes.light}>
          {children}
        </ThemeProvider>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}

const themes = {
  isDarkTheme: false,
  colors: {
    limeGreen: 'hsl(163, 72%, 41%)',
    brightRed: 'hsl(356, 69%, 56%)',
    facebook: 'hsl(208, 92%, 53%)',
    twitter: 'hsl(203, 89%, 53%)',
    instagram: 'linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
    youtube: 'hsl(348, 97%, 39%)',
    whiteBg: 'hsl(0, 0%, 100%)',
    black: 'hsl(0, 0%, 0%)',
  },
  light: {
    titleColor: 'hsl(0, 0%, 0%)',
    bodyBg: 'hsl(0, 100%, 100%)',
    topBgPattern: 'hsl(225, 100%, 98%)',
    cardBg: 'hsl(227, 47%, 96%)',
    cardBgHover: 'rgb(225, 227, 240)',
    textColor: 'hsl(228, 12%, 44%)',
    toggleBtnColor: 'hsl(230, 22%, 74%)',
  },
  dark: {
    titleColor: 'hsl(0, 100%, 100%)',
    bodyBg: 'hsl(230, 17%, 14%)',
    topBgPattern: 'hsl(232, 19%, 15%)',
    cardBg: 'hsl(228, 28%, 20%)',
    cardBgHover: 'rgb(51, 59, 85)',
    textColor: 'hsl(228, 34%, 66%)',
    toggleBtnColor: 'linear-gradient(hsl(209, 78%, 56%), hsl(146, 68%, 55%))',
  }
}

export default themes
