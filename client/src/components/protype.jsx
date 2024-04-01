import React, { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const images = [
  { url: "https://i.postimg.cc/28Rc2hVQ/add.png", title: "Image 1" },
  { url: "https://i.postimg.cc/cJbtT740/dem.png", title: "Image 2" },
  { url: "https://i.postimg.cc/GhK2qPqV/log.png", title: "Image 3" },
  { url: "https://i.postimg.cc/26njvn1H/reg.png", title: "Image 4" },
  { url: "https://i.postimg.cc/pL9HzK7D/buy.png", title: "Image 5" },
  { url: "https://i.postimg.cc/dtpXMpHy/rent2.png", title: "Image 6" },
  { url: "https://i.postimg.cc/tCZSzDqC/rent.png", title: "Image 7" },
  { url: "https://i.postimg.cc/85cBzPsP/fix.png", title: "Image 8" },
  { url: "https://i.postimg.cc/Z0trH8HC/com.png", title: "Image 9" },
];

export default function prototype() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [setCurrentSlide, images.length]);

   

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className="relative  max-w-screen-xl p-4 px-4 m-auto bg-gray-900 sm:px-6 lg:px-8 py-26 lg:mt-20 rounded-3xl">
      <div className=' text-center  mt-7 p-10'>
            <p className="text-base font-semibold leading-6 text-teal-500 uppercase">
               Interactive
             </p>
             <h4 className="mt-2 md:text-4xl font-extrabold leading-8 text-white sm:text-3xl sm:leading-9">
             Have a look at what’s inside the app
            </h4>
            <p className="mt-4 text-lg leading-6 text-gray-300">
            Take a peek inside the app and uncover a world of innovative features waiting to elevate your experience.
             </p>
            </div>
    <div className="container mx-auto">
      <div className="flex items-center justify-center w-full h-full sm:py-8 px-4">
        <CarouselProvider
          className="lg:block"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={images.length}
          visibleSlides={4}
          step={1}
          infinite={true}
          currentSlide={currentSlide}
        >
          <div className="w-full relative">
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                {images.map((image, index) => (
                  <Slide key={index} index={index} style={{ marginRight: "1rem" }}>
                    <div
                      className={`flex flex-shrink-0 relative w-full sm:w-auto image-container ${
                        index === currentSlide ? "active" : ""
                      }`}
                    >
                      <img src={image.url} alt={image.title} className="object-cover object-center w-full" />
                      <div className=" hidden  absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
                        {image.title}
                      </div>
                    </div>
                  </Slide>
                ))}
              </Slider>
            </div>
            {/* <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 bottom-0 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              onClick={prevSlide}
            >
              Back
            </ButtonBack>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 bottom-0 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              onClick={nextSlide}
            >
              Next
            </ButtonNext> */}
          </div>
        </CarouselProvider>
      </div>
    </div>
    </div>
  );
}

