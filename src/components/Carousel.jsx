import React, { useState } from 'react';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative h-96 rounded-2xl overflow-hidden group">
      {/* Using <img> instead of backgroundImage for testing */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-full object-cover duration-500"
      />
      <button
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={goToPrevious}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={goToNext}
      >
        &#10095;
      </button>
    </div>
  );
}
