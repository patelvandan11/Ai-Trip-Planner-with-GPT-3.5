import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import Hwork from './Hwork'
import Indestination from './Indestination'
import Wtrip from './Wtrip'
import WhyPlanWithUs from './WhyPlanWithUs'
import Footer from './Footer'
// import Chatbot from './Chatbot'
function Hero() {

  return (
    <div className='flex flex-col items-center w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56 gap-6 md:gap-9' >
      <div className='text-center w-full mt-8 md:mt-16'>
        <h1 className='font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[50px]'>
          <span className='text-[#f56551]'>Discover Your Next Adventure with AI:</span>
          <p className='mt-2 md:mt-4'>
            Personalized Itineraries at Your Fingertips
          </p>
        </h1>
        <p className='text-sm md:text-base lg:text-xl text-gray-500 mt-4 max-w-3xl mx-auto'>
          Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
        </p>
        <Link to={'/create-trip'} className='mt-6 md:mt-8 inline-block'>
          <Button className='text-black bg-yellow-400 md:text-base px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all hover:scale-105'>Get started, It's Free</Button>
        </Link>
      </div>

      <div className='w-full'>
        <Hwork />
        <Indestination />
        <Wtrip />
        <WhyPlanWithUs />
        <Footer />
      </div>
      {/* <Chatbot /> */}
    </div>
  )
}

export default Hero