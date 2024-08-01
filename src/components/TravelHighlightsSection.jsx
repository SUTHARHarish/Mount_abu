 //src/components/TravelHighlightsSection.jsx
import React from 'react';

const travelHighlights = [
  {
   
    title: "Ambaji Temple (Ambaji, Gujarat)",
    description: "Ambaji Temple is considered one of the 51 Shakti Peethas, which are sacred abodes of Goddess Shakti. According to Hindu mythology, the heart of Goddess Sati fell here, making it a significant site for Shakti worship",
    image: "public/TEMPLE OF GUJARAT - AMBAJI PHOTO.jpeg",  //Replace with actual image path
    href:'https://ambajitemple.in/',
  },
  {
    title: "Ranakpur Jain Temple (Ranakpur, Rajasthan)",
    description: "The Ranakpur Jain Temple was commissioned in the 15th century by a Jain businessman named Dharna Shah.",
    image: "public/The World’s Most Beautiful Temples.jpeg", // Replace with actual image path
    href:'https://en.wikipedia.org/wiki/Ranakpur_Jain_temple',
  },
  {
    title: "Jawai Leopard Conservation Reserve (Jawai, Rajasthan)",
    description: "The Jawai region has a long history that dates back to ancient times. It is believed that early human settlements existed in the area due to the availability of water from the Jawai River and the fertile lands surrounding it",
    image: "public/Jawai leopard camp, rajasthan, india.jpeg",  //Replace with actual image path
    href:'https://www.thournatureresorts.com/blog/jawai-bandh-leopard-conservation-reserve/',
  },
  {
    title: "Polo Forest (Vijaynagar, Gujarat)",
    description: "Polo Forest, located near Vijaynagar in Gujarat, is steeped in history dating back to the 10th century. Once a thriving settlement under the Parihar rulers, it later came under the reign of the Solanki dynasty",
    image: "public/download (2).jpeg",  //Replace with actual image path
    href:'https://www.gujarattourism.com/north-zone/sabarkantha/polo-forest.html',
  },
  {
    title: "Udaipur",
    description: "Udaipur, often called the City of Lakes is a picturesque city in the Indian state of Rajasthan, founded in 1559 by Maharana Udai Singh II. Renowned for its stunning lakes, majestic palaces, and vibrant culture,",
    image: "public/Udaipur Palace Photo Ideas.jpeg", // Replace with actual image path
    href:'https://en.wikipedia.org/wiki/Udaipur',
  },
  {
    title: "Kumbhalgarh Fort (Kumbhalgarh, Rajasthan)",
    description: "The current structure of Kumbhalgarh Fort was built during the 15th century by Rana Kumbha, the ruler of Mewar. Construction began in 1443 and took over a decade to complete.",
    image: "public/Ancient India - Second Largest Wall in the World _ The Story of Kumbhalgarh Fort.jpeg",  //Replace with actual image path
    href:'https://en.wikipedia.org/wiki/Kumbhalgarh',
  },
];


const TravelHighlightsSection = () => {

   return (
     <div className="p-10">
       <h2 className="text-3xl font-bold mb-4 text-center">Travel Highlights in Near Mount Abu</h2>
       <div className="grid md:grid-cols-3 gap-6">
         {travelHighlights.map((highlight, index) => (
           <div key={index} className="border rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
             <img src={highlight.image} alt={highlight.title} className="w-full h-80 object-cover"/>
             <div className="p-4">
               <h2 className="text-xl font-semibold mb-2">{highlight.title}</h2>
               <p className="text-gray-600">{highlight.description}</p>
                <a href={highlight.href} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600" target='_blank'>
                Find out more
                <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                  &rarr;
                </span>
              </a>
             </div>
           </div>
         ))}
       </div>
     </div>
   );
};

export default TravelHighlightsSection;
