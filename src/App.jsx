import React from 'react'
import Navigation from './customer/component/Navigation/Navigation'
import HomePage from './customer/pages/HomePage/HomePage'
import Footer from './customer/component/Footer/Footer'
import Product from './customer/component/product/Product'
const App = () => {
  return (

    <div className=''>
      <Navigation/>
      <div>
        <HomePage/>
        <Product/>
      </div>
      <Footer/>
    </div>
  )
}

export default App