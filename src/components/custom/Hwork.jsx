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
      title: "Unleash AI’s Itinerary Wizardry!",
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
    <section className="text-center py-9 bg-white">
      <h2 className="text-3xl font-bold mb-4 mt-5 text-left ml-6">How it works?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:p-8">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center">
            <span className="text-6xl font-bold text-gray-300 ml-6">{step.id}</span>
            <img src={step.image} alt={step.title} className="w-50 h-50 my-4" />
            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
      <button className="mt-8 bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-500">
        Plan Itinerary For Free
      </button>
    </section>
  );
};

export default Hwork;
