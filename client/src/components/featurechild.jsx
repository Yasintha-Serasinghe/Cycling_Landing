import React, { useState ,useEffect } from 'react';

export default function features() {
    const [activeTab, setActiveTab] = useState(1);

  const content = [
    {
      id: 1,
      image: "https://i.postimg.cc/g2635BQr/how.png",
      title: "On-demand Bicycle repair",
      description: "Book services effortlessly through our app, simplifying the scheduling process with just a few taps."
    },
    {
      id: 2,
      image: "https://i.postimg.cc/7h8L5mXt/how2.png",
      title: "Service provider gets the booking & confirm",
      description: "Our service providers swiftly confirm bookings upon receipt, ensuring efficient communication and preparation for the scheduled service."
    },
    {
      id: 3,
      image: "https://i.postimg.cc/R0J9wwWk/how5.png",
      title: "Fix the bicycle at customer’s location ",
      description: "Our expert technicians promptly arrive at the customer's location to repair bicycles onsite, delivering convenience and quality service directly to you."
    },
    // {
    //     id: 4,
    //     image: "https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80",
    //     title: "Bike Rental Service",
    //     description: "Easily rent bikes for various durations directly from your mobile device."
    //   },
      // {
      //   id: 5,
      //   image: "https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80",
      //   title: "Buy and Sell Used Bikes",
      //   description: "Browse listings of quality used bikes or list your own for sale within the app."
      // },
      // {
      //   id: 6,
      //   image: "https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80",
      //   title: "Online Store for Bike Parts",
      //   description: "Access a wide range of bike parts and accessories through the app's integrated store."
      // }

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prevTab => (prevTab === content.length ? 1 : prevTab + 1));
    }, 8000); 

    return () => clearInterval(interval);
  }, [content.length]);
  

  return (
    <div className='bg-gray-900 bg'>
      <div className="max-w-[75rem] px-4 py-6 sm:px-6 lg:px-8 lg:py-6 mx-auto">
      <div className="relative p-6 md:p-16">
        {/* Grid */}
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl  font-bold sm:text-3xl text-gray-200">
              We provide several features that can make it easier for you
            </h2>

            {/* Tab Navs */}
            <nav className="grid  gap-4 mt-5 md:mt-10 w-full" aria-label="Tabs" role="tablist">
              {content.map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  className={`hs-tab-active:bg-white shadow-md hs-tab-active:hover:border-transparent text-start  p-4 md:p-5 rounded-xl hs-tab-active:bg-slate-900 hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-600 ${activeTab === tab.id ? 'hs-tab-active:text-blue-600' : 'text-gray-200'}`}
                  onClick={() => setActiveTab(tab.id)}
                  id={`tabs-with-card-item-${tab.id}`}
                  data-hs-tab={`#tabs-with-card-${tab.id}`}
                  aria-controls={`tabs-with-card-${tab.id}`}
                  role="tab"
                >
                  <span className="flex">
                   
                    <span className="grow ms-6">
                      <span className={`block text-lg font-semibold ${activeTab === tab.id ? 'text-[#BDE420]' : ' text-gray-200'}`}>{tab.title}</span>
                      <span className="block mt-1  text-gray-200">{tab.description}</span>
                    </span>
                  </span>
                </button>
              ))}

              {/**button */}
              <button className="py-2 px-4 float-right mt-4 font-bold text-gray-200 hover:text-black border-2 border-[#BDE420]  hover:bg-[#BDE420] hover:bg-[] rounded-full shadow">
                    See More
                </button>
            </nav>
            {/* End Tab Navs */}
          </div>
          {/* End Col */}

          <div className="lg:col-span-6">
            <div className="relative">
              {/* Tab Content */}
              <div>
                {content.map(tab => (
                  <div key={tab.id} id={`tabs-with-card-${tab.id}`} className={`tab-content ${activeTab === tab.id ? '' : 'hidden'}`} role="tabpanel" aria-labelledby={`tabs-with-card-item-${tab.id}`}>
                    <img className="shadow-xl  rounded-xl shadow-gray-500/[.2]" src={tab.image} alt="Image Description" />
                  </div>
                ))}
              </div>
              {/* End Tab Content */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}

        {/* Background Color */}
        <div className="absolute inset-0 grid grid-cols-12 size-full">
          <div className="col-span-full lg:col-span-7 lg:col-start-6  w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full  bg-white/[.075]"></div>
        </div>
        {/* End Background Color */}
      </div>
    </div>
    </div>
  );
}
