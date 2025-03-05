import React, { useState } from 'react';
const Features = () => {


    return (
        <div className="features-container">
            <h1>Explore Your Next Destination</h1>
            <div className="destination-info">
                <img 
                    src="https://media4.onsugar.com/files/2014/02/17/838/n/1922441/f0bd144ded7b1bfd_shutterstock_89720368.jpg.xxxlarge_2x.jpg" 
                    alt="Destination" 
                    className="destination-image"
                />
                <div className="destination-details">
                    <h2>Beautiful Destination</h2>
                    <p>This is a wonderful place to visit with lots of attractions and activities to enjoy.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;