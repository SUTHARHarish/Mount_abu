// src/components/StatisticsSection.jsx
import React from 'react';
import CountUp from 'react-countup';
import { SocialIcon } from 'react-social-icons';

const statistics = [
  { number: 107800, label: "Visitors" ,icon:<SocialIcon url="https://instagram.com" />},
  { number: 50200, label: "Tourists",icon:<SocialIcon url="https://x.com" /> },
  { number: 10650, label: "Happy Clients", icon:<SocialIcon url="https://youtube.com" />},
  { number: 1000, label: "Hotels",icon:<SocialIcon url="https://telegram.com" /> },
];

const StatisticsSection = () => { 
  return (
    <div className="p-10 bg-white-100">
      <h2 className="text-3xl font-bold mb-4 text-center">Kimberly Meets the World</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        {statistics.map((stat, index) => (
          <div key={index}>
      <p className='mt-2'>{stat.icon}</p>
            <h3 className="text-4xl font-bold">
              <CountUp end={stat.number} duration={5.5} />
            </h3>
            {/* <p className="text-gray-700">{stat.label}  </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsSection;

