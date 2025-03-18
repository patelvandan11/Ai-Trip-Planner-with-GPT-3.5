import React, { useState } from "react";
import axios from "axios";

const CreateTrip = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    setError("");
    setWeather(null);
    setLoading(true);

    if (!city.trim()) {
      setError("Please enter a city name.");
      setLoading(false);
      return;
    }

    try {
      // Make sure the API endpoint matches your FastAPI backend URL
      const response = await axios.get(`http://localhost:8000/weather/${encodeURIComponent(city)}`);
      console.log('API Response:', response.data); // Debug log

      if (response.data.error) {
        throw new Error(response.data.error);
      }

      // Set the weather data from the response
      setWeather({
        city: response.data.city,
        temperature: response.data.temperature,
        description: response.data.description
      });
      
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.response?.data?.error || err.message || "Error fetching weather data.");
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8 w-full">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">
              Weather Lookup
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Enter Your City 🌍
            </h2>
            <p className="text-gray-600 mb-6">
              Get the current weather conditions for any city around the world.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Enter city name..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button 
                type="submit"
                disabled={loading}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
              >
                {loading ? 'Loading...' : 'Get Weather'}
              </button>
            </form>

            {error && (
              <div className="mt-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
                <p>❌ {error}</p>
              </div>
            )}

            {weather && (
              <div className="mt-6 bg-blue-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-800">
                    🌆 {weather.city}
                  </h3>
                  <span className="text-3xl">
                    {weather.description ? getWeatherEmoji(weather.description) : '🌤️'}
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <p className="text-gray-500 text-sm">Temperature</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {weather.temperature}°C
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <p className="text-gray-500 text-sm">Condition</p>
                    <p className="text-lg font-medium text-gray-800 capitalize">
                      {weather.description || 'Unknown'}
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>Plan your trip accordingly based on the weather conditions!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get appropriate emoji based on weather description
function getWeatherEmoji(description) {
  if (!description) return '🌤️';
  
  const desc = description.toLowerCase();
  if (desc.includes('clear')) return '☀️';
  if (desc.includes('cloud')) return '☁️';
  if (desc.includes('rain')) return '🌧️';
  if (desc.includes('snow')) return '❄️';
  if (desc.includes('thunder')) return '⛈️';
  if (desc.includes('fog') || desc.includes('mist')) return '🌫️';
  return '🌤️';
}

export default CreateTrip;
