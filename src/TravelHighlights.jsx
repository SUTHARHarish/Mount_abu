// src/TravelHighlights.jsx
import React from 'react';

const travelHighlights = [
  {
    title: "Ambaji Temple (Ambaji, Gujarat)",
    description: "Ambaji Temple is considered one of the 51 Shakti Peethas, which are sacred abodes of Goddess Shakti. According to Hindu mythology, the heart of Goddess Sati fell here, making it a significant site for Shakti worship.",
    image: "/ambaji-temple.jpg", // Replace with actual image path
  },
  {
    title: "Ranakpur Jain Temple (Ranakpur, Rajasthan)",
    description: "The Ranakpur Jain Temple was commissioned in the 15th century by a Jain businessman named Dharna Shah.",
    image: "/ranakpur-temple.jpg", // Replace with actual image path
  },
  {
    title: "Kumbhalgarh Fort (Kumbhalgarh, Rajasthan)",
    description: "The current structure of Kumbhalgarh Fort was built during the 15th century by Rana Kumbha, the ruler of Mewar. Construction began in 1443 and took over a decade to complete.",
    image: "/kumbhalgarh-fort.jpg", // Replace with actual image path
  },
];

const TravelHighlights = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Travel Highlights Near Mount Abu</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {travelHighlights.map((highlight, index) => (
          <div 
            key={index} 
            className="border rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img src={highlight.image} alt={highlight.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{highlight.title}</h2>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelHighlights;
