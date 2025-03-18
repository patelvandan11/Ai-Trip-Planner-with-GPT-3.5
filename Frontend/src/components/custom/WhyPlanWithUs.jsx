export default function WhyPlanWithUs() {
  const features = [
    { icon: "💰", title: "Early Bird Discounts.", desc: "Book now and save big!"  },
    { icon: "🏝️", title: "Fully Flexible Holidays.", desc: "Customize your plans on the go." },
    { icon: "📞", title: "24x7 Live Concierge Service.", desc: "Always here to assist you." },
    { icon: "💡", title: "Travel Tips, Tricks and recommendations.", desc: "Get expert guidance." },
    { icon: "✨", title: "AI-Powered Itineraries.", desc: "Tailored plans to suit every traveler." },
    { icon: "💵", title: "No Cost EMI.", desc: "Flexible payment options for hassle-free booking." },
    { icon: "🗺️", title: "Unique Experiences.", desc: "Explore new adventures like never before." },
    { icon: "📍", title: "Travel Like a Local (GoLocal).", desc: "Immerse yourself in authentic cultures." }
  ];
  
  return (
    <section className="py-8 md:py-12 px-4 md:px-6 max-w-7xl mx-auto">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-center">Why plan with us?</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {features.map((feature, index) => (
      <div
        key={index}
        className={`p-3 md:p-4 border rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${
        feature.highlight ? "bg-yellow-100 border-yellow-400" : "bg-white"
        }`}
      >
        <span className="text-2xl md:text-3xl block mb-2">{feature.icon}</span>
        <h3 className="font-semibold text-lg md:text-xl">{feature.title}</h3>
        <p className="text-gray-600 text-sm md:text-base mt-1">{feature.desc}</p>
      </div>
      ))}
    </div>
    </section>
  );
  }
