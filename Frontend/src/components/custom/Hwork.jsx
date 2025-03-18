import React from "react";

const Hwork = () => {
  const steps = [
    {
      id: 1,
      title: "Handpick Your Selection",
      description:
        "From solo travel to workcation, honeymoon to family travel, tell us about your mood, budget & timeline.",
      image: "./1.jpg", // Replace with actual image path
    },
    {
      id: 2,
      title: "Unleash AI's Itinerary Wizardry!",
      description:
        "Get a unique itinerary completely personalized for you, with all bookings in one place.",
      image: "./2.jpg",
    },
    {
      id: 3,
      title: "Easy Bookings with 24x7 Concierge",
      description:
        "From your stays to activities, book-it-all in one click, and enjoy 24x7 assistance while you explore.",
      image: "./3.jpg",
    },
    {
      id: 4,
      title: "No Commissions - Pay for what you get",
      description:
        "No hidden charges during & after bookings. Pay For What You Get.",
      image: "./4.jpg",
    },
  ];

  return (
    <section className="py-6 sm:py-9 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 mt-3 sm:mt-5 text-left">How it works?</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="flex flex-col items-center text-center p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-50 rounded-xl cursor-pointer"
            >
              <span className="text-4xl sm:text-6xl font-bold text-gray-300 transition-colors duration-300 group-hover:text-yellow-400">{step.id}</span>
              <img 
                src={step.image} 
                alt={step.title} 
                className="w-full max-w-[200px] h-auto my-3 sm:my-4 rounded-lg shadow-sm transition-transform duration-300 "
              />
              <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 transition-colors duration-300 hover:text-yellow-500">{step.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6 sm:mt-8">
          <button className="text-black bg-yellow-400 md:text-base px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all hover:scale-105 hover:bg-white">
            Plan Itinerary For Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hwork;
