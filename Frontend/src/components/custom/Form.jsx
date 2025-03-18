import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '../ui/button'; // Ensure this import is correct

function Form() {
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState('');
  const [days, setDays] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [transport, setTransport] = useState('');
  const [requirement, setRequirement] = useState('');
  const [child, setChild] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      destination,
      budget,
      days,
      startDate,
      endDate,
      transport,
      requirement,
      child,
    });
  };

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
      <div className="p-5 bg-white shadow-lg rounded-lg">
        <h2 className="font-bold text-3xl mb-5 text-center text-black-600">
          Discover your ideal travel experience! 🌍✈️
        </h2>
        <p className='text-center text-gray-600 mb-8'>
          Share a few details, and our trip planner will craft a personalized itinerary tailored to your preferences.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-xl font-medium mb-2 text-gray-700">Destination (City)</label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-xl font-medium mb-2 text-gray-700">Budget</label>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-xl font-medium mb-2 text-gray-700">Number of Days</label>
            <input
              type="number"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-xl font-medium mb-2 text-gray-700">Time Limit</label>
            <div className="flex flex-col sm:flex-row gap-2">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-xl font-medium mb-2 text-gray-700">Travel Through</label>
            <select
              value={transport}
              onChange={(e) => setTransport(e.target.value)}
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select</option>
              <option value="bus">Bus</option>
              <option value="train">Train</option>
              <option value="flight">Flight</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-xl font-medium mb-2 text-gray-700">User Requirements</label>
            <select
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select</option>
              <option value="luxury">Luxury</option>
              <option value="budget">Budget Friendly</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-xl font-medium mb-2 text-gray-700">Child</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="yes"
                  checked={child === true}
                  onChange={() => setChild(true)}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="no"
                  checked={child === false}
                  onChange={() => setChild(false)}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Button type="submit" className="text-white bg-blue-600 md:text-base px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all hover:scale-105 hover:bg-blue-700">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;