import FAQ from '@/components/Home/FAQ'
import ProductCategory from '@/components/Products/ProductCategory'
import ProductCustomise from '@/components/Products/ProductCustomise'
import Footer from '@/components/Reusable/Footer'
import NavBar from '@/components/Reusable/NavBar'
import React from 'react'

const page = () => {
  return (
    <div>
        <NavBar /> 
      <div className=" pt-20">
        <ProductCategory />
        <ProductCustomise />
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default page