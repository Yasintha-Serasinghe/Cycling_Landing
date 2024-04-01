import React from 'react'

export default function Vbanner() {
  return (
    <div className=' bg-gray-900 mb-14 min-h-screen' >
        
        
       <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:p-24  mx-auto">
      <div className="min-h-[35vh] z-10 bg-opacity-50 bg-[url('https://i.postimg.cc/90QqmxM3/handsome-hipster-style-bearded-man-with-backpack-wearing-denim-shirt-cap-traveling-with-bicycle-morn.jpg')] bg-center bg-cover bg-no-repeat relative rounded-xl md:min-h-[75vh]">
        <div className="absolute bottom-0 start-0 end-0 max-w-xs text-center mx-auto p-6 md:start-auto md:text-start md:mx-0">
          {/* Card */}
          <div className="px-5 py-4 inline-block bg-white rounded-lg md:p-7 dark:bg-gray-800 z-10">
            <div className="hidden md:block">
              <h3 className="text-lg font-bold text-gray-800 sm:text-2xl dark:text-gray-200">How does Cycling Life work?</h3>
              <p className="mt-2 text-gray-800 dark:text-gray-200">Learn more about CyclingLife.</p>
            </div>

            <div className="md:mt-16">
              <a className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-500 dark:text-white dark:hover:text-gray-400" href="#">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Watch our story
              </a>
            </div>
          </div>
          {/* End Card */}
        </div>
        
      </div>
    </div>
    {/* <div className='absolute inset-0  blur-[138px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div> */}
    </div>
  )
}
