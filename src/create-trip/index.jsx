import React from 'react'
// import Input from '../components/ui/input'
import Input from '../components/ui/input'
import { Button } from '@/components/ui/button';
function CreateTrip() {
  const [place, setPlace] = React.useState();
  return (
    <>
      <div className='px-5 mt-10 flex-col flex items-center gap-4 sm:px-10 md:px-32 lg:px-56 xl:px-72'>
        <h2 className='font-bold text-3xl flex justify-center text-black-500'>
          Tell us your travel preferences 🏕️🌴
        </h2>
        <p className='mt-3 text-gray-500 text-xl text-center'>
          Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
        </p>

        <form action="">
          <div className='mt-20 flex flex-col gap-9'>
            <div>
              <h2 className='text-xl my-3 font-medium'>
                What is your destination?
              </h2>
              <Input placeholder={'Destination'} type='text' />
            </div>
            <div>
              <h2 className='text-xl my-3 font-medium'>
                How many days are you planning your trip?
              </h2>
              <Input placeholder={'ex 3 '} type='number' />
            </div>
            <div>
              <h2 className='text-xl my-3 font-medium'>
                Your requirements for the trip (<i>Eg. </i>adventure, nature, etc.)
              </h2>
              <Input placeholder={''} type='text' />
            </div>
            <div>
              <h2 className='text-xl my-3 font-medium'>
                What is your budget?
              </h2>
              <Input placeholder={'ex 5000'} type='number' />
            </div>
          </div>
        </form>
        <Button>Submit</Button>
      </div>
      
    </>
  )
}

export default CreateTrip