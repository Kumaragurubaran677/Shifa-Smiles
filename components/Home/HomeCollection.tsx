import React from 'react'
import Link from 'next/link'
import { ArrowRight } from '@/components/Reusable/Icons';
import Products from '@/data/Products';
import Image from 'next/image';
import { slugify } from '@/utils/Slugify';

const HomeCollection = () => {
    return (
        <div className='flex flex-col items-center justify-between w-full p-4 md:p-10 bg-[#fef4f6]' >
            <div className='flex flex-col md:flex-row justify-between items-start gap-4 md:gap-0 px-4 md:px-10 w-full'>
                <h1 className='text-2xl md:text-4xl font-bold text-center md:text-left'>Trending <span className='text-[#E82A4C]'>Collection</span></h1>
                <Link
                    href="/products"
                    className="bg-[#E82A4C]  items-center gap-2 text-white px-6 py-3 rounded-xl hover:bg-[#d1263f] transition-colors duration-300 text-center hidden md:flex"
                >
                    Explore All
                    <ArrowRight />
                </Link>
            </div>

            <div className='w-full'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 w-full p-4 md:p-10'>
                    {Object.entries(Products)
                        .slice(0, 3) // Limit to the first 3 categories
                        .map(([key, category]) => (
                            <Link
                                href={`/products/${slugify(category.categoryName)}`}
                                key={key}
                                className="flex flex-col items-center justify-center gap-3 w-full md:w-1/3"
                            >
                                <Image
                                    src={category.categoryImage} // Use the category image
                                    alt={category.categoryName}
                                    className="w-full h-auto"
                                />
                                <h3 className="text-xl md:text-2xl font-medium">{category.categoryName}</h3>
                            </Link>
                        ))}

                </div>
                <div className='flex justify-center items-center'>
                    <Link
                        href="/products"
                        className="bg-[#E82A4C]  items-center gap-2 text-white px-6 py-3 rounded-xl hover:bg-[#d1263f] transition-colors duration-300 text-center flex md:hidden"
                    >
                        Explore All
                        <ArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeCollection