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
    <div className='flex flex-col items-center mx-56 gap-9' >
      <h1 className='font-extrabold text-[50px] text-center mt-16 '>
        <span className='text-[#f56551]'>Discover Your Next Adventure with AI:
        </span>
        <p>
          Personalized Itineraries at Your Fingertips
        </p>
        <p className='text-xl text-gray-500 text-center'>
          Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
        </p>
        <Link to={'/create-trip'}>
          <Button>Get started, It's Free</Button>
        </Link>
      </h1>

      <Hwork></Hwork>
      <Indestination></Indestination>
      <Wtrip></Wtrip>
      <WhyPlanWithUs></WhyPlanWithUs>
      <Footer></Footer>
      {/* <Chatbot></Chatbot> */}
      
    </div>
  )
}

export default Hero