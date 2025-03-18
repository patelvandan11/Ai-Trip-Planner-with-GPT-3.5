import React from 'react';

function Testimonials() {
  const testimonials = [
    { name: 'John Doe', feedback: 'Amazing experience!' },
    { name: 'Jane Smith', feedback: 'Loved every moment!' },
    { name: 'Sam Wilson', feedback: 'Highly recommend!' },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-600 mb-4">"{testimonial.feedback}"</p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials; 