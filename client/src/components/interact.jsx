// import React from 'react'

// export default function interact() {
//   return (
//     <div>
//         <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20 rounded-3xl ">
//       <div className="relative">
//         <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
//           <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
//             <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
//               Interactive
//             </p>
//             <h4 className="mt-2 text-2xl font-extrabold leading-8 text-white sm:text-3xl sm:leading-9">
//               Interactivity between team members is the key of the success.
//             </h4>
//             <p className="mt-4 text-lg leading-6 text-gray-300">
//               Build a simply and powered collaborative space for all your team. Track, share, measure, you have a fully control, it's never be simply and efficient.
//             </p>
//             <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
//               <li className="mt-6 lg:mt-0">
//                 <div className="flex">
//                   <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-500 bg-transparent">
//                     <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
//                     </svg>
//                   </span>
//                   <span className="ml-4 text-base font-medium leading-6 text-gray-200">
//                     Live modifications
//                   </span>
//                 </div>
//               </li>
//               <li className="mt-6 lg:mt-0">
//                 <div className="flex">
//                   <span className="flex items-center justify-center flex-shrink-0 w-6 h-6  rounded-full text-green-500 bg-transparent">
//                     <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
//                     </svg>
//                   </span>
//                   <span className="ml-4 text-base font-medium leading-6  text-gray-200">
//                     Data tracker
//                   </span>
//                 </div>
//               </li>
//               <li className="mt-6 lg:mt-0">
//                 <div className="flex">
//                   <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full text-green-500 bg-transparent">
//                     <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
//                     </svg>
//                   </span>
//                   <span className="ml-4 text-base font-medium leading-6 text-gray-200">
//                     24/24 support
//                   </span>
//                 </div>
//               </li>
//               <li className="mt-6 lg:mt-0">
//                 <div className="flex">
//                   <span className="flex items-center justify-center flex-shrink-0 w-6 h-6  rounded-full text-green-500 bg-transparent">
//                     <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
//                     </svg>
//                   </span>
//                   <span className="ml-4 text-base font-medium leading-6 text-gray-200">
//                     Free tips to improve work time
//                   </span>
//                 </div>
//               </li>
//             </ul>
//           </div>
//           <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
//             <div className="relative space-y-4">
//               <div className="flex items-end justify-center space-x-4 lg:justify-start">
//                 <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src="https://i.postimg.cc/wMw9Fj3k/sign.png" alt="1"/>
//                 <img className="w-40 rounded-lg shadow-lg md:w-64" width="260" src="https://i.postimg.cc/wMw9Fj3k/sign.png" alt="2"/>
//               </div>
//               <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
//                 <img className="w-24 rounded-lg shadow-lg md:w-40" width="170" src="https://i.postimg.cc/wMw9Fj3k/sign.png" alt="3"/>
//                 <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src="https://i.postimg.cc/wMw9Fj3k/sign.png" alt="4"/>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
      
//     </div>
//   )
// }


import { useState } from 'react';

export default function interact() {
    const [activeTab, setActiveTab] = useState(1);

    // Define tab data containing title, description, and image path for each feature
    const tabData = [
      {
        title: "On-demand",
        description: "Get your bike repaired on-demand with our efficient service.",
        image: "https://i.postimg.cc/brWXZrqy/test.png"
      },
      {
        title: "Maintenance",
        description: "Subscribe to our maintenance plans and keep your bike in top condition.",
        image: "https://i.postimg.cc/9fV6RvH7/main.png"
      },
      {
        title: "Community",
        description: "Engage with our community of biking enthusiasts and experts.",
        image: "https://i.postimg.cc/85f9qDhx/community.png"
      },
      {
        title: "Bike rental ",
        description: "Rent a bike for your adventures, hassle-free.",
        image: "https://i.postimg.cc/tCZSzDqC/rent.png"
      },
      {
        title: "Buy and sell",
        description: "Buy or sell used bikes from our extensive marketplace.",
        image: "https://i.postimg.cc/pL9HzK7D/buy.png"
      },
      {
        title: "An online store ",
        description: "Find the bike parts you need in our comprehensive online store.",
        image: "https://i.postimg.cc/cJbtT740/dem.png"
      }
    ];
  
    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };
  
    return (
        <div className='relative  max-w-screen-xl p-4 px-4 m-auto bg-gray-900 sm:px-6 lg:px-8 py-26 lg:mt-20 rounded-3xl'>
            
             <div className="absolute inset-5 max-w-xs mx-auto h-44 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
            <div className=' text-center  mt-7 p-10'>
            <p className="text-base font-semibold leading-6 text-teal-500 uppercase">
               Interactive
             </p>
             <h4 className="mt-2 md:text-4xl font-extrabold leading-8 text-white sm:text-3xl sm:leading-9">
             Main services of Cycling Life
            </h4>
            <p className="mt-4 text-lg leading-6 text-gray-300">
            Cycling Life provides on-demand bike repairs, maintenance subscriptions, community engagement, bike rentals, used bike trading, and an online parts store.
             </p>
            </div>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <nav className="max-w-6xl mx-auto grid sm:flex gap-y-px sm:gap-y-0 sm:gap-x-4" aria-label="Tabs" role="tablist">
          {tabData.map((tab, index) => (
            <button
              key={index}
              type="button"
              className={`${activeTab === index + 1 ? 'bg-white/[.05] border-white text-[#BDE420]' : ''} hs-tab-active:hover:border-transparent w-full flex flex-col text-start dark:hover:bg-gray-100 p-3 md:p-5 rounded-xl hs-tab-active:bg-white/[.05] hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-600 ${activeTab === index + 1 ? 'text-[#BDE420]' : ''}`}
              id={`tabs-with-card-item-${index + 1}`}
              data-hs-tab={`#tabs-with-card-${index + 1}`}
              aria-controls={`tabs-with-card-${index + 1}`}
              role="tab"
              onClick={() => handleTabClick(index + 1)}
            >
              <span className="m-auto block font-semibold dark:text-gray-800 text-gray-200  text-center">
                {tab.title}
              </span>
            </button>
          ))}
        </nav>
  
        <div className="mt-12 md:mt-16">
          {tabData.map((tab, index) => (
            <div key={index} id={`tabs-with-card-${index + 1}`} className={`${activeTab === index + 1 ? '' : 'hidden'}`} role="tabpanel" aria-labelledby={`tabs-with-card-item-${index + 1}`}>
              <div className="max-w-[1140px] lg:pb-32 relative">
                <figure className=" hidden absolute bottom-0 start-0 z-[2] max-w-full w-60 h-60  mb-20 ms-20 lg:block">
                  <div className="p-1.5  rounded-3xl ">
                    <img className="max-w-full h-64 m-auto rounded-[1.25rem]" src={tab.image} alt="Image Description" />
                  </div>
                </figure>
                {/* dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] bg-gray-700 shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)] */}
                
                {/* End Mobile Device */}
  
                {/* Browser Device */}
                <figure className="ms-auto me-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
                  <div className="relative flex items-center justify-center max-w-[50rem] bg-gray-600 border-b border-gray-700 rounded-t-lg py-2 px-24">
                    <div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
                      <span className="size-2  rounded-full bg-gray-700"></span>
                      <span className="size-2  rounded-full bg-gray-700"></span>
                      <span className="size-2  rounded-full bg-gray-700"></span>
                    </div>
                    <div className="flex justify-center items-center size-full  text-[.25rem]  rounded-sm sm:text-[.5rem] bg-gray-700 text-gray-200">www.cycling Life.com</div>
                  </div>
                    
                  <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent rounded-b-2xl flex flex-col items-center">
                    
                    <img className="max-w-full h-96 rounded-b-lg" src={tab.image} alt="Image Description" />
                    {/* Description */}
                    <p className=" mx-auto mt-1 m-5 text-gray-200 font-serif font-bold text-center text-xl mb-4">{tab.description}</p>
                  </div>
                </figure>
                {/* End Browser Device */}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
}
