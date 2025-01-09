import React from 'react';

export default function CarOverview({ model, year, mileage, price }) {
  return (
    <div className="bg-gray-800/50 p-8 rounded-3xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Key Features
      </h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-900/50 p-6 rounded-2xl">
          <p className="text-gray-400 mb-2">Model</p>
          <p className="text-xl font-semibold">{model}</p>
        </div>
        <div className="bg-gray-900/50 p-6 rounded-2xl">
          <p className="text-gray-400 mb-2">Year</p>
          <p className="text-xl font-semibold">{year}</p>
        </div>
        <div className="bg-gray-900/50 p-6 rounded-2xl">
          <p className="text-gray-400 mb-2">Mileage</p>
          <p className="text-xl font-semibold">{mileage}</p>
        </div>
        <div className="bg-gray-900/50 p-6 rounded-2xl">
          <p className="text-gray-400 mb-2">Price</p>
          <p className="text-xl font-semibold">{price}</p>
        </div>
      </div>
    </div>
  );
}