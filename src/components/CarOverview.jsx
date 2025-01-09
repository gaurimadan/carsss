import React from 'react';

export default function CarOverview({ model, year, mileage, price }) {
  return (
    <div className="bg-teal-50 p-6 rounded-3xl shadow-xl">
      <h2 className="text-3xl font-semibold mb-6 text-teal-800">Car Overview</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-teal-600">Model</p>
          <p className="font-semibold text-xl text-teal-800">{model}</p>
        </div>
        <div>
          <p className="text-teal-600">Year</p>
          <p className="font-semibold text-xl text-teal-800">{year}</p>
        </div>
        <div>
          <p className="text-teal-600">Mileage</p>
          <p className="font-semibold text-xl text-teal-800">{mileage}</p>
        </div>
        <div>
          <p className="text-teal-600">Price</p>
          <p className="font-semibold text-xl text-teal-800">{price}</p>
        </div>
      </div>
    </div>
  );
}

