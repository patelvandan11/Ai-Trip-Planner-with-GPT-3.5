import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CreateTrip from './components/custom/Create_trip';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <CreateTrip />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App; 