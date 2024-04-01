// import React, { useRef, useEffect, useState } from 'react';
// import { useKeenSlider } from 'keen-slider/react';
// import 'keen-slider/keen-slider.min.css'; // Import keen-slider styles

// export default function testimonials() {
//   const testimonials = [
//     {
//       id: 1,
//       name: 'John Doe',
//       occupation: 'CEO, ABC Company',
//       quote:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       occupation: 'Designer, XYZ Inc.',
//       quote:
//         'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     },
//     {
//       id: 3,
//       name: 'David Johnson',
//       occupation: 'Manager, LMN Corporation',
//       quote:
//         'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//     },
//     {
//       id: 4,
//       name: 'David Johnson',
//       occupation: 'Manager, LMN Corporation',
//       quote:
//         'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//     },
//   ];

//   const [currentTestimonials, setCurrentTestimonials] = useState([testimonials[0], testimonials[1]]);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const sliderContainerRef = useRef(null);
//   const [slider] = useKeenSlider({ slidesPerView: 1 });

//   useEffect(() => {
//     if (slider) {
//       // Set the keen-slider instance to the sliderRef
//       sliderContainerRef.current = slider;
//     }
//   }, [slider]);

//   // Function to update the displayed testimonials every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
//       setCurrentTestimonials([
//         testimonials[currentSlide % testimonials.length],
//         testimonials[(currentSlide + 1) % testimonials.length],
//       ]);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentSlide, testimonials]);

//   const handleSlideChange = (slide) => {
//     slider.moveToSlide(slide);
//   };

//   return (
//     <div>
//       <section className=" bg-transparent p-10 py-20">
//         <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
//           <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
//             <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
//               <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
//                 Don't just take our word for it...
//               </h2>

//               <p className="mt-4 text-gray-400">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo
//                 placeat harum porro optio fugit a culpa sunt id!
//               </p>
//             </div>

//             <div className="-mx-6 lg:col-span-2 lg:mx-0">
//               <div ref={sliderContainerRef} className="keen-slider">
//                 {currentTestimonials.map((testimonial, index) => (
//                   <div key={testimonial.id} className="keen-slider__slide">
//                     <div className={`bg-gray-200 p-6 shadow-md shadow-[#BDE420] border-[#BDE420] border-2 sm:p-8 lg:p-12 ${index === 0 ? 'mb-8' : 'mt-8'}`}>
//                       <p className="text-gray-800 mb-4">{testimonial.quote}</p>
//                       <div className="text-center lg:text-left">
//                         <p className="text-lg font-semibold">{testimonial.name}</p>
//                         <p className="text-gray-600">{testimonial.occupation}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-center mt-8">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-3 h-3 mx-2 rounded-full border-2 border-gray-500 focus:outline-none focus:border-gray-900 ${
//                   index === currentSlide % testimonials.length ? 'bg-gray-600' : 'bg-gray-200'
//                 }`}
//                 onClick={() => handleSlideChange(index)}
//               ></button>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import React, { useRef, useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css'; // Import keen-slider styles

export default function testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      occupation: 'CEO, ABC Company',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageSrc: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?t=st=1710915517~exp=1710919117~hmac=16550a0d6cda706b52d6068541978c92826e295f691bf92290c5995d68e8fe8a&w=740',
    },
    {
      id: 2,
      name: 'Jane Smith',
      occupation: 'Designer, XYZ Inc.',
      quote:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageSrc: 'https://img.freepik.com/free-photo/handsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg?size=626&ext=jpg&ga=GA1.1.711103432.1703697197&semt=ais',
    },
    {
      id: 3,
      name: 'David Johnson',
      occupation: 'Manager, LMN Corporation',
      quote:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imageSrc:'https://img.freepik.com/free-photo/beautiful-young-man-student-businessman-jacket-holds-his-arms-crossed-isolated-light-grey-wall_231208-6135.jpg?w=1060&t=st=1710915579~exp=1710916179~hmac=afa06da85736c557e10642bbe5f7700b9bb9a12ea768941d9f3164da6b992238'
    },
    {
      id: 4,
      name: 'joana legan',
      occupation: 'Manager, LMN Corporation',
      quote:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imageSrc:'https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?t=st=1710915684~exp=1710919284~hmac=88998e49c6d1fe9d7ff2701fe7032f3f4747fa06be3c045e12e5f4b6532e9f22&w=360'
    },
  ];

  const [currentTestimonials, setCurrentTestimonials] = useState([testimonials[0], testimonials[1]]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const sliderContainerRef = useRef(null);
  const [slider] = useKeenSlider({ slidesPerView: 1 });

  useEffect(() => {
    if (slider) {
      // Set the keen-slider instance to the sliderRef
      sliderContainerRef.current = slider;
    }
  }, [slider]);

  // Function to update the displayed testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
      setCurrentTestimonials([
        testimonials[currentSlide % testimonials.length],
        testimonials[(currentSlide + 1) % testimonials.length],
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, testimonials]);

  // Check screen width and set isSmallScreen state
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
    };
    handleResize(); // Call once to set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSlideChange = (slide) => {
    slider.moveToSlide(slide);
  };

  return (
    <div>
      <section className="bg-transparent p-10 py-20">
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <p className="text-base font-semibold leading-6 text-teal-500 uppercase">Feedbacks</p>
              <h2 className="md:text-5xl font-bold tracking-tight text-gray-200 sm:text-4xl">
                What people are talking about.
              </h2>

              <p className="mt-4 text-gray-400">
              Voice of the Customer: Your Feedback Matters!
              </p>
            </div>

            <div className="-mx-6 lg:col-span-2 lg:mx-0">
              <div ref={sliderContainerRef} className="keen-slider">
                {currentTestimonials.slice(0, isSmallScreen ? 1 : 2).map((testimonial, index) => (
                  <div key={testimonial.id} className="keen-slider__slide">
                    <div className={`bg-gray-200 p-6 shadow-md shadow-[#BDE420] border-[#BDE420] border-2 sm:p-8 lg:p-12 ${index === 0 ? 'mb-8' : 'mt-8'}`}>
                      <p className="text-gray-800 mb-4">{testimonial.quote}</p>
                      <div className="flex flex-col items-center">
                        <img src={testimonial.imageSrc} alt="Testimonial" className="w-16 h-16 rounded-full mb-2" />
                        <div className="text-center">
                          <p className="text-lg font-semibold">{testimonial.name}</p>
                          <p className="text-gray-600">{testimonial.occupation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-2 rounded-full border-2 border-gray-500 focus:outline-none focus:border-gray-900 ${
                  index === currentSlide % testimonials.length ? 'bg-gray-600' : 'bg-gray-200'
                }`}
                onClick={() => handleSlideChange(index)}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

