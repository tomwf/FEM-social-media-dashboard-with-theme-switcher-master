import GlobalStyles from '../components/styles/Global'
import { ThemeContextProvider } from '../theme/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp
