import React, { useState } from "react";
import Carousel from "./components/Carousel";
import CarOverview from "./components/CarOverview";
import View360 from "./components/View360";
import EmiCalculator from "./components/EmiCalculator";

export default function App() {
  const [show3DView, setShow3DView] = useState(false);

  const carData = {
    model: "Tesla Model 3",
    year: "2024",
    mileage: "12,500 miles",
    price: "39,999",
    images: [
      "/thartharleftrearthreequarter.jpeg",
      "thartharfrontview.jpeg",
      "/thartharrearview.jpeg",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
     
      <div className="relative">
        <Carousel images={carData.images} show3DView={show3DView} />
        <View360
          show3DView={show3DView}
          onToggle3D={() => setShow3DView(!show3DView)}
        />
        
       
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent">
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 right-4 sm:right-6 md:right-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 leading-tight">
              {carData.model}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              {carData.year} • {carData.mileage}
            </p>
          </div>
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-12 md:space-y-16">
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        
          <CarOverview
            model={carData.model}
            year={carData.year}
            mileage={carData.mileage}
            price={carData.price}
          />

        
          <div className="bg-gray-800/50 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Specifications
            </h2>
            <div className="space-y-3 sm:space-y-4">
              
              <div className="bg-gray-900/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                <p className="text-sm sm:text-base text-gray-400 mb-1 sm:mb-2">
                  Performance
                </p>
                <p className="text-base sm:text-lg md:text-xl font-semibold">
                  Dual Motor All-Wheel Drive
                </p>
              </div>
             
              <div className="bg-gray-900/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                <p className="text-sm sm:text-base text-gray-400 mb-1 sm:mb-2">
                  Range
                </p>
                <p className="text-base sm:text-lg md:text-xl font-semibold">
                  358 miles (EPA est.)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <EmiCalculator 
            carPrice={parseInt(carData.price.replace(/,/g, ""))} 
          />
        </div>
      </div>
    </div>
  );
}