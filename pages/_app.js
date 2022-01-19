import '../styles/globals.css'
import Nav from './api/nav.js'
import Footer from './api/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Nav />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default MyApp
