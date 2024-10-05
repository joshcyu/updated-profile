import React, { useState } from 'react';

const ImageSlider = (props) => {
  const {contentItems} = props

  console.log(contentItems)


  const [currentIndex, setCurrentIndex] = useState(0);
  if (contentItems === null) {
  return
  }
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === contentItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? contentItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='flex flex-col ml-[0%] sm:ml-[100px] items-center gap-4 '  >
      <div className='self-start text-copyprimary text-3xl mt-7 sm:mt-14 mb-0 sm:mb-7 ml-10'>
        <h1>Present Website/Application Projects</h1>
      </div>
      <div className='w-[100%] h-dvh '>
        <div className="relative w-full h-[100%] sm:h-full overflow-hidden">
          <div
            className="flex h-dvh w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {contentItems.map((image, index) => (
              <img
                key={index}
                src={image.photoUrl}
                alt={`Slide ${index}`}
                className="w-screen h-screen flex-shrink-0 "
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-500 bg-opacity-50 text-white"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-500 bg-opacity-50 text-white"
          >
            Next
          </button>
        </div>
        </div>
        
      </div>
    );
};

export default ImageSlider;
