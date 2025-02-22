import React from "react";

const destinations = [
  { name: "Europe", tagline: "Diverse Europe.", image: "Europe.jpg", large: true },
  { name: "Greece", tagline: "Island Paradise", image: "Greece.jpg" },
  { name: "United Kingdom", tagline: "Cultural Capital", image: "uk.jpg" },
  { name: "Spain", tagline: "Vibrant Peninsula", image: "spain.jpg" },
  { name: "Norway", tagline: "Majestic Northern Lights", image: "norway.jpg" },
  { name: "Germany", tagline: "Diverse Deutschland.", image: "germany.jpg" },
  { name: "Italy", tagline: "Cultural Haven", image: "italy.jpg" },
];

const Wtrip = () => {
  return (
    <div className="w-full mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Plan your trip anywhere in the world
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 ${
              destination.large ? "md:col-span-2 md:row-span-3" : ""
            }`}
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-bold">{destination.name}</h3>
              <p className="text-white text-sm">{destination.tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wtrip;
