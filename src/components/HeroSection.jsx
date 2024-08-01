// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <img
        src="https://images.pexels.com/photos/846350/pexels-photo-846350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11" // Replace with the actual image path
        alt="Mount Abu"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-10 text-white">
        <h2 className="text-sm uppercase mb-2 text-center">Natural Beauty, and Historical Temples</h2>
        <h1 className="text-5xl font-bold mb-2 text-yellow-500 text-center">Mount Abu.</h1>
        <h3 className="text-2xl mb-4">Hill Station</h3>
        <button className="bg-yellow-500 text-black text-sm uppercase underline hover:bg-yellow-600 p-2 rounded">
          <a href="src/assets/image.jpg" target='_blank'>Read More</a>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
