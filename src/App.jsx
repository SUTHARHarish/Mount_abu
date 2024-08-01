// src/App.jsx
import React from 'react';
import HeroSection from './components/HeroSection';
import NaturalBeautySection from './components/NaturalBeautySection';
// import PopularHillStationSection from './components/PopularHillStation';
import TravelHighlightsSection from './components/TravelHighlightsSection';
import StatisticsSection from './components/StatisticsSection';
import ContactDetailsSection from './components/ContactDetailsSection';
import PopularHillStation from './components/PopularHillStation';
// import ReviewSwiper from './components/ReviewSwiper';


function App() {
  return (
    <div className="App">
      <HeroSection />
      <NaturalBeautySection />
      <PopularHillStation/>
      {/* <PopularHillStationSection /> */}
      <TravelHighlightsSection />
      <StatisticsSection />
      {/* <ReviewSwiper /> */}
      <ContactDetailsSection />
    </div>
  );
}

export default App;
