import NavBar from '@/components/Reusable/NavBar'
import Footer from '@/components/Reusable/Footer'
import React from 'react'
import AboutHero from '@/components/About/AboutHero'
import FAQ from '@/components/Home/FAQ'
import HowWeWork from '@/components/About/HowWeWork'
import WhyUs from '@/components/About/WhyUs'

const page = () => {
  return (
    <div style={{ backgroundColor: "rgba(232, 42, 76, 0.05)" }}>
      <NavBar />
      <div className=' pt-20'>
        <AboutHero />
        <WhyUs />
        <HowWeWork />
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default page