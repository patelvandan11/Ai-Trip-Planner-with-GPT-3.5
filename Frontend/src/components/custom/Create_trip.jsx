import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../ui/input';
import { Button } from '@/components/ui/button';

function CreateTrip() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    destination: '',
    days: '',
    requirements: '',
    budget: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/feature');
  };

  return (
    <div className='px-5 mt-10 flex-col flex items-center gap-4 sm:px-10 md:px-32 lg:px-56 xl:px-72'>
      <h2 className='font-bold text-3xl flex justify-center text-black-500'>
        Tell us your travel preferences 🏕️🌴
      </h2>
      <p className='mt-3 text-gray-500 text-xl text-center'>
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </p>

      <form onSubmit={handleSubmit} className='w-full'>
        <div className='mt-20 flex flex-col gap-9'>
          <div>
            <h2 className='text-xl my-3 font-medium'>What is your destination?</h2>
            <Input name='destination' value={formData.destination} onChange={handleChange} placeholder='Destination' type='text' required />
          </div>
          <div>
            <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip?</h2>
            <Input name='days' value={formData.days} onChange={handleChange} placeholder='ex 3' type='number' required />
          </div>
          <div>
            <h2 className='text-xl my-3 font-medium'>Your requirements for the trip (<i>Eg. </i>adventure, nature, etc.)</h2>
            <Input name='requirements' value={formData.requirements} onChange={handleChange} placeholder='Eg. Adventure, Nature' type='text' required />
          </div>
          <div>
            <h2 className='text-xl my-3 font-medium'>What is your budget?</h2>
            <Input name='budget' value={formData.budget} onChange={handleChange} placeholder='ex 5000' type='number' required />
          </div>
        </div>
        <div className='mt-6 flex justify-center'>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default CreateTrip;
