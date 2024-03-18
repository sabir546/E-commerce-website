import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'
const ProductCard = ({Product}) => {
  const navigate=useNavigate()
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className='  ProductCard 	 w-[13rem] m-3 transition-all cursor-pointer'>
<div className='h-[15rem] w-full  px-2 object-cover overflow-hidden '>
    <img src={Product.imageUrl} alt="" />
</div>
<div className=' textPart bg-white p-3'>  
<div class>
    <p className='  font-bold opacity-60'> {Product.brand } </p>
    <p className='' >{Product.title}</p>
</div>
<div className=' flex items-center space-x-2'>
<p className='font-semibild'>{Product.discountedPrice}</p>
<p className='line-through opacity-50'>{Product.price}</p>
<p className='text-green-600 font-semibold'>{Product.discountPersent }</p>
</div>
</div>
    </div>
  )
}

export default ProductCard