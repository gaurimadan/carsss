import React from 'react';
import CarDetails from './CarDetails';

function App() {
  return (
    <div className="App">
      <header className="bg-green-600 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Car Showcase</h1>
        </div>
      </header>
      <main>
        <CarDetails />
      </main>
      <footer className="bg-green-100 text-green-800 py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Car Showcase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

