'use client'
import React from 'react';
import ReviewsData from './ReviewsData';
import { usePathname } from 'next/navigation';
import { Star } from '../Reusable/Icons';

const Reviews = () => {
  const pathname = usePathname();
  const reviewsToShow = pathname === '/' || pathname.startsWith('/products/') ? ReviewsData.slice(0, 3) : ReviewsData;

  return (
    <div className='p-4 md:p-10'>
        <div>
            <h1 className='text-2xl md:text-3xl font-bold px-4 md:px-10'>Customer <span className='text-[#E82A4C]'>Reviews</span></h1>
        </div>
        <div className='flex flex-col md:flex-row flex-wrap justify-center gap-4 p-4 md:p-10'>
          {reviewsToShow.map((review, idx) => (
            <div key={idx} className='w-full md:w-[calc(33.33%-1rem)] p-6 md:p-8 text-center bg-white rounded-lg shadow-md'>
              <h1 className='text-lg md:text-xl font-bold text-center'>{review.name}</h1>
              <div className="flex gap-1 my-2 items-center justify-center">
                {[...Array(review.rating)].map((_, index) => (
                  <Star key={index} className="text-yellow-400" />
                ))}
              </div>
              <p className='text-sm md:text-base'>{review.review}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Reviews