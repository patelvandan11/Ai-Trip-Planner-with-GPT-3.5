import React from 'react';

const OurStory = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Story
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            How we're revolutionizing travel planning with AI
          </p>
        </div>

        <div className="mt-16 space-y-12">
          <div className="relative">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  Our Mission
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  We believe that travel planning should be effortless and personalized. Our AI-powered platform helps you create the perfect itinerary tailored to your preferences, saving you time and ensuring you make the most of your journey.
                </p>
              </div>
              <div className="mt-10 -mx-4 relative lg:mt-0">
                <div className="relative space-y-6 lg:space-y-8">
                  <div className="relative">
                    <div className="relative flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
                          <span className="text-white text-sm font-medium">1</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">Smart Planning</h4>
                        <p className="mt-1 text-gray-500">Our AI analyzes your preferences and creates personalized itineraries</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="relative flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
                          <span className="text-white text-sm font-medium">2</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">Local Insights</h4>
                        <p className="mt-1 text-gray-500">Get recommendations from local experts and travelers</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="relative flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
                          <span className="text-white text-sm font-medium">3</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">Seamless Experience</h4>
                        <p className="mt-1 text-gray-500">From planning to booking, we've got you covered</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory; 