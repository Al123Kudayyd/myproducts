import Footer from '@/Components/Footer'
import Nav from '@/Components/Nav'
import '@/styles/globals.css'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider>
      <Nav />
      <Component {...pageProps} />
      <Footer />
      </Provider>
      
    </>
    
  )
}
