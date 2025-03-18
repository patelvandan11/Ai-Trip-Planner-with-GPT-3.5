import React from 'react';

function Services() {
  const services = [
    { icon: '🌍', title: 'Global Travel', description: 'Explore the world with us.' },
    { icon: '🏖️', title: 'Beach Holidays', description: 'Relax on the best beaches.' },
    { icon: '🏔️', title: 'Mountain Adventures', description: 'Conquer new heights.' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services; 