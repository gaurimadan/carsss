import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel({ images, show3DView }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
  };

  if (show3DView) return null;

  return (
    <div className="relative w-full h-full">
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`View ${currentIndex + 1}`}
          className="w-full h-full object-contain md:object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-between px-2 md:px-4 pointer-events-none">
          <button
            onClick={goToPrevious}
            className="pointer-events-auto z-10 bg-white/10 hover:bg-white/20 p-2 md:p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 touch-manipulation"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </button>

          <button
            onClick={goToNext}
            className="pointer-events-auto z-10 bg-white/10 hover:bg-white/20 p-2 md:p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 touch-manipulation"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </button>
        </div>

        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`transition-all duration-300 rounded-full touch-manipulation
                ${currentIndex === index 
                  ? 'bg-white w-6 md:w-4 h-2 md:h-2' 
                  : 'bg-white/50 hover:bg-white/75 w-2 md:w-2 h-2 md:h-2'
                }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}