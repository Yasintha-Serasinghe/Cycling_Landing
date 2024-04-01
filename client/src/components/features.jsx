import React from 'react';
import Featurechild from './featurechild';


export default function features() {
  return (
    <div className=' bg-gray-900 bg-blend-screen min-h-screen'>
              <div className="max-w-xl md:mx-auto text-center lg:max-w-2xl py-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            Features
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-200 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="#BDE420"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="27df4f81-c854-45de-942a-fe90f7a300f9"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">How Works Using Cycling Life</span>
          </span>
         
        </h2>
        
      </div>
     
       
    <Featurechild/>
   
    </div>
  )
}
