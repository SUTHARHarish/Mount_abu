// src/components/PopularHillStation.jsx
import React from 'react';

const PopularHillStation = () => {
  const places = [
    {
      name: 'Nakki Lake',
      description: 'This is a famous lake where visitors can enjoy boating. Surrounded by hills and lush greenery, Nakki Lake is a picturesque spot.',
      image: 'public/nakkiLake.jpeg', // Image in the public folder
    },
    {
      name: 'Guru Shikhar',
      description: "This is the highest peak in the Aravalli Range and offers panoramic views of the surrounding area. There's also a temple dedicated to Dattatreya at the summit.",
      image: 'public/guruShikhar.jpeg', // Image in the public folder
    },
    {
      name: 'Dilwara Temples',
      description: 'These are a group of remarkable Jain temples known for their stunning marble architecture and intricate carvings.',
      image: 'public/dilwaraTemples.jpeg', // Image in the public folder
    },
    {
      name: 'Achalgarh Fort',
      description: 'A historic fort known for its ancient architecture and scenic surroundings. Inside the fort, there are several temples, including the Achaleshwar Mahadev Temple.',
      image: 'public/achalgarhFort.jpeg', // Image in the public folder
    },
    {
      name: 'Mount Abu Wildlife Sanctuary',
      description: 'Spread over a large area, this sanctuary is home to various flora and fauna, making it a great spot for nature lovers and wildlife enthusiasts.',
      image: 'public/wildlifeSanctuary.jpeg', // Image in the public folder
    },
    {
      name: 'Sunset Point',
      description: 'A popular spot to watch the sunset, offering breathtaking views of the surrounding landscape as the sun sets over the hills.',
      image: 'public/sunsetPoint.jpeg', // Image in the public folder
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="bg-white rounded-lg overflow-hidden w-full max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-8">Popular Hill <span className='text-yellow-500'> Station Located </span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {places.map((place, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <img src={place.image} alt={place.name} className="w-full md:w-48 h-40 object-cover" />
              <div className="p-4 md:flex-grow">
                <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                <p className="text-gray-700">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularHillStation;
