import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

function Finetune() {
  const location = useLocation();
  const navigate = useNavigate();
  const { itinerary, formData } = location.state || {};

  if (!itinerary || !formData) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg text-gray-700">No itinerary data found. Please submit the form first.</p>
        <Button onClick={() => navigate('/form')} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
          Go Back to Form
        </Button>
      </div>
    );
  }

  // Split itinerary into days
  const days = itinerary.split('\n\n').filter(day => day.trim());

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      {/* Trip Summary Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Trip Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800">Destination</h3>
            <p className="text-gray-700">{formData.destination}</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800">Duration</h3>
            <p className="text-gray-700">{formData.days} days</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-800">Budget</h3>
            <p className="text-gray-700">${formData.budget}</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-semibold text-yellow-800">Transport</h3>
            <p className="text-gray-700 capitalize">{formData.transport}</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <h3 className="font-semibold text-red-800">Style</h3>
            <p className="text-gray-700 capitalize">{formData.requirement}</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <h3 className="font-semibold text-indigo-800">With Children</h3>
            <p className="text-gray-700">{formData.child ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>

      {/* Itinerary Table */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Personalized Itinerary</h2>
        <div className="space-y-6">
          {days.map((day, index) => {
            const [title, ...activities] = day.split('\n');
            return (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="font-bold text-lg">{title}</h3>
                </div>
                <div className="p-4">
                  {activities.map((activity, actIndex) => (
                    <div key={actIndex} className="flex items-start mb-3 last:mb-0">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-semibold">{actIndex + 1}</span>
                      </div>
                      <p className="text-gray-700">{activity}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <Button 
          onClick={() => navigate('/form')} 
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Plan Another Trip
        </Button>
        <Button 
          onClick={() => window.print()} 
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Print Itinerary
        </Button>
      </div>
    </div>
  );
}

export default Finetune;
