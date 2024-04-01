// import React,{useState} from 'react';
// import Header from './header';


// export default function hero() {

//   const testers = [
//     {
//         Image: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
//         title: "Founder of meta",
//         para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et."
//     },
//     {
//       Image: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
//       title: "Founder of meta",
//       para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et."
//     },
//     {
//       Image: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
//       title: "Founder of meta",
//       para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et."
//     },
// ]

// const [currentTestimonial, setCurrentTestimonial] = useState(0)




//   return (
//     <>
    
//     <div className=' bg-gray-900 decoration-dark-background min-h-screen'>
//     <section className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
      
//     <div className="flex flex-col justify-between max-w-xl pt-16 px-4 mx-auto lg:flex-row md:px-8 lg:max-w-screen-xl">
//     <div className="pt-16 mb-16 lg:mb-0 lg:pt-48 lg:max-w-lg lg:pr-5">
//       <div className="max-w-xl mb-6">

//       <div class="flex items-center">
//       <div class="inline-flex items-center gap-x-2 bg-white/20 border border-gray-200 text-xs text-gray-300 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400" href="#">
//       <img src="https://i.postimg.cc/d0tDNFMh/logo-cycle.png" alt="logo" className="w-5 h-5" />
//         Explore the Cycling life
//         <span class="flex items-center gap-x-1">
//           <span class="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500">Explore</span>
//           <svg class="flex-shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
//         </span>
//       </div>
//     </div>
   

  



//         <h2 className="max-w-lg mb-6 font-nunito md:text-5xl font-bold tracking-tight text-gray-100 text-4xl sm:leading-none mt-6">
//           The quick, brown fox
//           <br className="hidden md:block" />
//           jumps over{' '}
//           <span className="inline-block text-deep-purple-accent-400">
//             a lazy dog
//           </span>
//         </h2>
//         <p className="text-base text-gray-300 md:text-lg">
//           Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//           accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
//           quae. explicabo.
//         </p>
//       </div>
//       {/* <div className="flex items-center">
//         <a
//           href="/"
//           className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-[#bde420] hover:bg-[#97b618] focus:shadow-outline focus:outline-none"
//         >
//           Get started
//         </a>
//         <a
//           href="/"
//           aria-label=""
//           className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
//         >
//           Learn more
//         </a>
//       </div> */}
//       <div className="flex items-center space-x-5 mt-10">
//             <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
//               <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
//             </a>
//             <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
//               <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
//             </a>
//           </div>
//     </div>

    
//     <div className=''>
//     <img
//           src="https://i.postimg.cc/nr2jdhdw/Group-1-1.png"
//           className="object-cover object-top w-full h-64 mx-auto sm:scale-110 lg:h-[650px] lg:scale-150 xl:mr-16 md:max-w-sm lg:pt-20 shadow-slate-200"
//           alt="app mockup"
//         />
//     </div>
//   </div>
//   </section>
//   </div>
//   </>
//   )
// }

// import React, { useState, useEffect } from 'react';

// export default function Hero() {
//   const testers = [
//     {
//       image: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
//       title: "Founder of Meta",
//       subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       mockup: "https://i.postimg.cc/nr2jdhdw/Group-1-1.png"
//     },
//     {
//       image: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
//       title: "Co-Founder of Meta",
//       subtitle: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       mockup: "https://i.postimg.cc/nr2jdhdw/Group-1-1.png"
//     },
//     {
//       image: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
//       title: "Lead Developer",
//       subtitle: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//       mockup: "https://i.postimg.cc/nr2jdhdw/Group-1-1.png"
//     }
//   ];

//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testers.length);
//     }, 5000); // Change testimonial every 5 seconds

//     return () => clearInterval(intervalId);
//   }, [testers.length]);

//   return (
//     <div className='bg-gray-900 decoration-dark-background min-h-screen'>
//       <section className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
//         <div className="flex flex-col justify-between max-w-xl pt-16 px-4 mx-auto lg:flex-row md:px-8 lg:max-w-screen-xl">
//           <div className="pt-16 mb-16 lg:mb-0 lg:pt-48 lg:max-w-lg lg:pr-5">
//             <div className="max-w-xl mb-6">
//               <div className="flex items-center">
//                 <div className="inline-flex items-center gap-x-2 bg-white/20 border border-gray-200 text-xs text-gray-300 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400" href="#">
//                   <img src="https://i.postimg.cc/d0tDNFMh/logo-cycle.png" alt="logo" className="w-5 h-5" />
//                   Explore the Cycling life
//                   <span className="flex items-center gap-x-1">
//                     <span className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500">Explore</span>
//                     <svg className="flex-shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
//                   </span>
//                 </div>
//               </div>
//               <h2 className="max-w-lg mb-6 font-nunito md:text-5xl font-bold tracking-tight text-gray-100 text-4xl sm:leading-none mt-6">
//                 {testers[currentTestimonial].title}
//                 <br className="hidden md:block" />
//                 <span className="inline-block text-deep-purple-accent-400">
//                   {testers[currentTestimonial].subtitle}
//                 </span>
//               </h2>
//               <p className="text-base text-gray-300 md:text-lg">
//                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//                 accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
//                 quae. explicabo.
//               </p>
//             </div>
//             <div className="flex items-center space-x-5 mt-10">
//               <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
//                 <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
//               </a>
//               <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
//                 <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
//               </a>
//             </div>
//           </div>
//           <div>
//             <img
//               src={testers[currentTestimonial].mockup}
//               className="object-cover object-top w-full h-64 mx-auto sm:scale-110 lg:h-[650px] lg:scale-150 xl:mr-16 md:max-w-sm lg:pt-20 shadow-slate-200"
//               alt="app mockup"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



import React,{useState} from 'react';
import Header from './header';


export default function hero() {

  const [state, setState] = useState(false)



  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
    { title: "Guides", path: "javascript:void(0)" },
    { title: "Partners", path: "javascript:void(0)" }
]

  return (
    <div className='min-h-screen'>
     
{/* 
      <nav className="  w-full border-b md:border-0 md:sticky rounded-2xl">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
              <div className="flex items-center justify-between py-2 md:block">
              <a href="javascript:void(0)" className="flex items-center gap-3">
    <img
        src="https://i.postimg.cc/d0tDNFMh/logo-cycle.png"
        className="w-8 h-8 md:w-12 md:h-12"
        alt="Cycling Life logo"
    />
    <span className="text-black font-bold text-2xl md:text-xl ml-2">Cycling Life</span>
</a>

                  <div className="md:hidden">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <li key={idx} className="text-gray-600 hover:text-indigo-600">
                                    <a href={item.path}>
                                        { item.title }
                                    </a>
                                </li>
                              )
                          })
                      }
                  </ul>
              </div>
              <div className="hidden md:inline-block">
                <a href="javascript:void(0)" className="py-2 px-5 font-bold text-black bg-[#BDE420] hover:bg-[] rounded-full shadow">
                    download app
                </a>
              </div>
          </div>
      </nav> */}





      {/** hero content */}
      <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
     
      <div className="relative bg-gray-900 bg-opacity-75">

      {/** navigation */}
      <div className=' md:py-5 z-50'>
      <Header/></div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <div className="flex items-center">
                <div className="inline-flex items-center gap-x-2 bg-white/20 border border-gray-200 text-xs text-gray-300 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400" href="#">
                   <img src="https://i.postimg.cc/d0tDNFMh/logo-cycle.png" alt="logo" className="w-5 h-5" />
                   Explore the Cycling life
                   <span className="flex items-center gap-x-1">
                     <span className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500">Explore</span>
                    <svg className="flex-shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                   </span>
                 </div>
               </div>
              <h2 className="max-w-lg mb-6 font-nunito md:text-7xl font-bold tracking-tight text-gray-100 text-4xl sm:leading-none mt-6">
              Two Wheels,  

 <br className="hidden md:block" />
 One Earth,
                <span className="text-teal-400">Ride for Change.</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Connect with fellow riders in our vibrant cycling community
              </p>

              {/**button */}
              <div className=" flex gap-2 md:gap-8 mt-3">
                <a href="javascript:void(0)" className="py-2 px-5 font-bold text-gray-200 hover:text-black border-2 border-[#BDE420]  hover:bg-[#BDE420] hover:bg-[] rounded-full shadow">
                    Watch Demo
                </a>
              
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-lg tracking-wider transition-colors duration-200 text-[#BDE420] hover:underline"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
              </div>

              <div className="flex items-center space-x-5 mt-10">
               <a href="/" className=" w-44 transition duration-300 hover:shadow-lg">
                 <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
              </a>
               <a href="/" className=" w-44 transition duration-300 hover:shadow-lg">
                 <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
               </a>
             </div>

            </div>
            {/* <div className="w-full max-w-xl xl:px-8 xl:w-5/12"> */}
            <img src='https://i.postimg.cc/2yGLyCPW/new.png' alt='mockup' className=' h-auto top-1 shadow-[#BDE420]' />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
   
    </div>
  )
}
