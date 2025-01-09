import React, { useState } from 'react';
import Carousel from './components/Carousel';
import EmiCalculator from './components/EmiCalculator';
import CarOverview from './components/CarOverview';
import View360 from './components/View360';

const carImages = [
  '/placeholder.svg?height=400&width=600&text=Car+Front',
  '/placeholder.svg?height=400&width=600&text=Car+Side',
  '/placeholder.svg?height=400&width=600&text=Car+Back',
];

const carDetails = {
  model: 'Tesla Model S Plaid',
  year: 2023,
  mileage: '0 miles',
  price: '$129,990',
};

export default function CarDetails() {
  const [is360View, setIs360View] = useState(false);

  const toggle360View = () => {
    setIs360View(!is360View);
  };

  return (
    <div className="min-h-screen bg-white text-green-800">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-12 text-center text-green-600">
          {carDetails.model}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-green-50 rounded-3xl p-6 shadow-xl">
            {is360View ? (
              <View360 />
            ) : (
              <Carousel images={carImages} />
            )}
            <div className="mt-6">
              <button
                onClick={toggle360View}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                {is360View ? 'Exit 360° View' : 'View 360°'}
              </button>
            </div>
          </div>
          <div className="space-y-8">
            <CarOverview {...carDetails} />
            <EmiCalculator carPrice={parseInt(carDetails.price.replace(/\D/g, ''))} />
          </div>
        </div>
      </div>
    </div>
  );
}

