import Footer from '@/Components/Footer'
import Nav from '@/Components/Nav'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provi
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
    
  )
}