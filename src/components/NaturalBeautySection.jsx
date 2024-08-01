// src/components/NaturalBeauty.js
import React from "react";
import image from "../assets/image.jpg"; // adjust the path according to your project structure

const NaturalBeauty = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
          <div className="p-6 md:w-1/2 mt-10">
            <h2 className="text-3xl font-bold mb-4">Natural Beauty <span className="text-yellow-500">(Mount Abu.)</span></h2>
            <p className="text-gray-700">
              Mount Abu, the only hill station in Rajasthan, is a remarkable
              oasis amidst the arid deserts of the state. Known for its lush
              green forests, Mount Abu offers a refreshing escape with its cool
              climate and scenic landscapes. The region is rich in biodiversity,
              housing numerous species of flora and fauna. The dense forests,
              serene lakes, and majestic mountains create a tranquil
              environment, perfect for nature lovers and those seeking a
              peaceful retreat. Highlights of Mount Abu include the famous Nakki
              Lake, the Dilwara Temples, and the stunning viewpoints like Sunset
              Point and Honeymoon Point, which offer breathtaking views of the
              surrounding area. The abundant greenery and the refreshing
              atmosphere make Mount Abu a unique and beautiful destination in
              Rajasthan
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={image}
              alt="Mount Abu"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NaturalBeauty;
