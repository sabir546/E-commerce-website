import React from 'react'
import MainCrosel from '../../component/HomeCarosel/MainCrosel'
import HomeSectionCarosel from '../../component/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../Data/MensKurta'
import {lehngacholiPage2} from '../../Data/WomenSharee'
import {Mens_Shirt} from '../../Data/MensShirt'
import{Mens_Shoes} from '../../Data/MensShoes'
import {Women_Dress} from '../../Data/WomensDress'
const HomePage = () => {
  return (
    <div className=''>
        <MainCrosel/>

        <div className=' space-y-10 py-20  flex flex-col justify-center px-5 lg:px10'>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarosel data={Mens_Shirt}sectionName={"Men's Shirt"}/>
        <HomeSectionCarosel data={Mens_Shoes}sectionName={"Men's Shoes"}/>
       <HomeSectionCarosel data={lehngacholiPage2}sectionName={"Women's Sharee"}/>
       <HomeSectionCarosel data={Women_Dress}sectionName={"Women's Dress"}/>

           

        </div>
    </div>
  )
}

export default HomePage