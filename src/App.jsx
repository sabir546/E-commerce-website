import React from 'react'
import Navigation from './customer/component/Navigation/Navigation'
import HomePage from './customer/pages/HomePage/HomePage'
import HomeSectionCard from './customer/component/HomeSectionCard/HomeSectionCard'
const App = () => {
  return (

    <div className=' ' >
      hello
      <Navigation/>
      <div>
        <HomePage/>
      </div>
      <div>
        <HomeSectionCard/>
      </div>
    </div>
  )
}

export default App