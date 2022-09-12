import type { NextPage } from 'next'
import About from '../src/components/about'
import Contact from '../src/components/contact'
import Footer from '../src/components/footer'
import Products from '../src/components/products'
import Register from '../src/components/register'
import GlobalStyle from '../src/components/styles/globalStyles';

const Home: NextPage = () => {
  return (
    <>
    <GlobalStyle/>
      <Products/>
      <About/>
      <Register/>
      <Contact/> 
      <Footer/>
    </>
  )
}

export default Home
