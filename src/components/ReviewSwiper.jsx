// src/components/ReviewSwiper.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Correct CSS import for Swiper
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Swiper modules
import { Pagination, Navigation } from 'swiper';

const reviews = [
  {
    name: 'John Doe',
    review: 'This is an amazing place! Highly recommend visiting.',
    image: '/johnDoe.jpg', // Make sure to place your images in the public folder
  },
  {
    name: 'Jane Smith',
    review: 'A wonderful experience, the scenery is breathtaking!',
    image: '/janeSmith.jpg',
  },
  {
    name: 'Alice Johnson',
    review: 'Great hospitality and beautiful views.',
    image: '/aliceJohnson.jpg',
  },
  // Add more reviews as needed
];

const ReviewSwiper = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-8">Visitor Reviews</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md p-4">
                <img src={review.image} alt={review.name} className="w-24 h-24 rounded-full object-cover mb-4" />
                <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
                <p className="text-gray-700 text-center">{review.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ReviewSwiper;
