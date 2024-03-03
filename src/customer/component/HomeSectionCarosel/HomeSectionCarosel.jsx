import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

const HomeSectionCarosel = ({data,sectionName}) => {
  const [activeIndex, setactiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        450: { items: 3 },
        1000: { items: 4 },
    };
const sliderPrev=()=>setactiveIndex(activeIndex-1)
const sliderNext=()=>setactiveIndex(activeIndex+1)

const syncActiveIndex=({item})=>setactiveIndex(item)
     
const items=data.slice(0,10).map((item)=><HomeSectionCard product={item}/>)

  return (
    <div className=' border'>
      <h2 className=' text-2xl font-extrabold text-gray-800 py-5 px-2'>{sectionName}</h2>
      <div className='relative p-5 '>
         <AliceCarousel 
         items={items}
    disableButtonsControls
    onSlideChange={syncActiveIndex}
    activeIndex={activeIndex}
    disableDotsControls
    responsive={responsive}
    />
{activeIndex !==0 &&
    <Button onClick={sliderPrev} variant="contained"  className=' z-50  '  sx={{position:"absolute",  top:'8rem',
     left:"-3rem" ,transform:"translateX(50%) rotate(90deg)", bgcolor:'white' }}  aria-label='next'>
<KeyboardArrowLeftIcon sx={{ transform:"rotate(-90deg)" , color:'black'}}/>
    </Button>
    }

   {activeIndex !== items.length-4 &&
    <Button onClick={sliderNext} variant="contained"  className='z-50'  sx={{position:"absolute", top:'8rem',
     right:"0rem" ,transform:"translateX(50%) rotate(90deg)",bgcolor:'white' }}  aria-label='next'>
<KeyboardArrowLeftIcon sx={{ transform:"rotate(90deg)", color:'black'}}/>
    </Button> }
    </div>
    </div>
  )
}

export default HomeSectionCarosel