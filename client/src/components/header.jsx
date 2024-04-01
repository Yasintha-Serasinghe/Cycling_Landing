// import React, { useState } from 'react';

// export default function header() {

//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };


//   return (
//     <div className=' bg-transparent'>
//       <header className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-2 text-blue-900 md:mx-auto md:flex-row md:items-center rounded-xl">
//         <a href="#" className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black text-black">
//           <span className="mr-2 text-4xl">
//             <img src='https://i.postimg.cc/d0tDNFMh/logo-cycle.png' alt='logo' className=' w-8 h-8 md:w-20 md:h-15'/>
//           </span>
//           Cycling Life
//         </a>
//         <input type="checkbox" className="peer hidden" id="navbar-open" checked={isNavOpen} onChange={toggleNav} />
//         <label className="absolute top-4 right-7 cursor-pointer md:hidden text-black" htmlFor="navbar-open">
//           <span className="sr-only">Toggle Navigation</span>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </label>
//         <nav aria-label="Header Navigation" className={`peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start ${isNavOpen ? 'max-h-screen' : ''}`}>
//           <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
//             <li className="font-bold text-gray-800 md:mr-12"><a href="#">Pricing</a></li>
//             <li className="text-gray-800 md:mr-12"><a href="#">Features</a></li>
//             <li className="text-gray-800 md:mr-12"><a href="#">Support</a></li>
//             <li className="md:mr-12">
//               <button className="rounded-full border-2 border-white px-6 py-1 font-medium text-black transition-colors hover:bg-white hover:text-gray-700">Login</button>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     </div>
//   )
// }


import React,{useState} from 'react'

export default function header() {
  const [state, setState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "About", path: "javascript:void(0)" },
      { title: "Features", path: "javascript:void(0)" },
      { title: "Pricing", path: "javascript:void(0)" },
      { title: "Contact", path: "javascript:void(0)" }
  ]

  return (
    <div className=''>
      <nav className=" bg-transparent  md:bg-transparent w-auto  md:border-0 md:sticky rounded shadow-xl md:shadow-sm rounded-r-2xl rounded-l-2xl">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
              <div className="flex items-center justify-between py-2 md:block">
              <a href="javascript:void(0)" className="flex items-center gap-3">
    <img
        src="https://i.postimg.cc/d0tDNFMh/logo-cycle.png"
        className="w-8 h-8 md:w-12 md:h-12"
        alt="Cycling Life logo"
    />
    <span className="text-gray-200 md:text-white font-bold text-2xl md:text-xl ml-2">Cycling Life</span>
</a>

                  <div className="md:hidden">
                      <button className="text-gray-300 md:text-gray-300 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
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
                                <li key={idx} className="text-gray-400 md:text-gray-300 hover:text-teal-600">
                                    <a href={item.path}>
                                        { item.title }
                                    </a>
                                    
                                </li>
                                
                              )
                          })
                      }
                       <div className=" md:hidden">
                <a href="javascript:void(0)" className="py-2 px-5 font-bold text-black bg-[#BDE420] hover:bg-[] rounded-full shadow">
                    Download app
                </a>
              </div>
                  </ul>
              </div>
              <div className="hidden md:inline-block">
                <a href="javascript:void(0)" className="py-2 px-5 font-bold text-black bg-[#BDE420] hover:bg-[] rounded-full shadow">
                    Download app
                </a>
              </div>
          </div>
      </nav>
      </div>
  )
}
