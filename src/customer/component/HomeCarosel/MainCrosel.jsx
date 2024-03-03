import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCaroselData } from './MainCaroselData';
import AliceCarousel from 'react-alice-carousel';
const MainCrosel = () => {
   const items = MainCaroselData.map((item)=> <img className='  cursor-pointer  '
    role='presentation' src={item.image} alt=""/>)

  return (
    <AliceCarousel items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    
    infinite
    />
  )
}

export default MainCrosel