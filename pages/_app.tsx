import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CarProvider } from '../context/CarProvider'
CarProvider

export default function App({ Component, pageProps }: AppProps) {

  return (
    <CarProvider>
        <Component {...pageProps}/>
    </CarProvider>
  ) 
}
