import React, { useState } from 'react';
import Carousel from './components/Carousel';
import CarOverview from './components/CarOverview';
import View360 from './components/View360';
import EmiCalculator from './components/EmiCalculator';

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
      "/thartharrearview.jpeg"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="relative">
        <Carousel 
          images={carData.images} 
          show3DView={show3DView} 
        />
        <View360 
          show3DView={show3DView} 
          onToggle3D={() => setShow3DView(!show3DView)} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent">
          <div className="absolute bottom-10 left-10 right-10">
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              {carData.model}
            </h1>
            <p className="text-2xl text-gray-300">{carData.year} • {carData.mileage}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CarOverview 
            model={carData.model}
            year={carData.year}
            mileage={carData.mileage}
            price={carData.price}
          />
          <div className="bg-gray-800/50 p-8 rounded-3xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Specifications
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-900/50 p-6 rounded-2xl">
                <p className="text-gray-400 mb-2">Performance</p>
                <p className="text-xl font-semibold">Dual Motor All-Wheel Drive</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-2xl">
                <p className="text-gray-400 mb-2">Range</p>
                <p className="text-xl font-semibold">358 miles (EPA est.)</p>
              </div>
            </div>
          </div>
        </div>
        <EmiCalculator carPrice={parseInt(carData.price.replace(/,/g, ''))} />
      </div>
    </div>
  );
}