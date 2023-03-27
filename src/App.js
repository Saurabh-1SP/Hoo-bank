import React from 'react'
import { Navbar, Stats } from './component'
import { Billing, Business, Card, Cta, Footer, Header, Testimonials,Brands} from './container'

const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Header/>
        <Stats/>
        <Business/>
        <Billing/>
        <Card/>
        <Testimonials/>
        <Brands/>
        <Cta/>
        <Footer/>
    </div>
  )
}

export default App