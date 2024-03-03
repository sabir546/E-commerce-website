import React from 'react'
import MainCrosel from '../../component/HomeCarosel/MainCrosel'
import HomeSectionCarosel from '../../component/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../Data/MensKurta'

const HomePage = () => {
  return (
    <div className=''>
        <MainCrosel/>

        <div className=' space-y-10 py-20  flex flex-col justify-center px-5 lg:px10'>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarosel data={mens_kurta}sectionName={"Men's Shirt"}/>
        <HomeSectionCarosel data={mens_kurta}sectionName={"Men's Shoes"}/>
       <HomeSectionCarosel data={mens_kurta}sectionName={"Women's Sharee"}/>
       <HomeSectionCarosel data={mens_kurta}sectionName={"Women's Dress"}/>

           

        </div>
    </div>
  )
}

export default HomePage