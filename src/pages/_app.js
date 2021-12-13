import { useState } from 'react'

import GlobalStyles from '../components/styles/Global'
import theme, { lightTheme, darkTheme } from '../theme/theme'
import  { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }) {
  const [isDarkTheme, setDarkTheme] = useState(false)
  const toggleTheme = () => setDarkTheme(!isDarkTheme)

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Component {...pageProps} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
      </ThemeProvider>
    </>
  )
}

export default MyApp
