import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LoginPage from './login'

function MyApp({ Component, pageProps }: AppProps) {
  return <
  LoginPage/
    // Component {...pageProps} /
    >
}

export default MyApp
