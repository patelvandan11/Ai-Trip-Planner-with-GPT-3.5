import React from 'react';

const Features = () => {
    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Explore Your Next Destination</h1>
            <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                    src="https://media4.onsugar.com/files/2014/02/17/838/n/1922441/f0bd144ded7b1bfd_shutterstock_89720368.jpg.xxxlarge_2x.jpg" 
                    alt="Destination" 
                    className="w-full md:w-1/2 h-64 md:h-auto object-cover"
                />
                <div className="p-6 md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-3">Beautiful Destination</h2>
                    <p className="text-gray-700">This is a wonderful place to visit with lots of attractions and activities to enjoy.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;
