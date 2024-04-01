import React from 'react'

export default function community() {
  return (
    <div className=' min-h-screen'>
     <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Grid */}
      <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div>
          <img className="rounded-xl" src="https://img.freepik.com/free-photo/sports-family_1398-4776.jpg?t=st=1710915431~exp=1710919031~hmac=dce6dff13cf51619c5d4407a3112062695ec1953b199f0603b63d749a392d86e&w=996" alt="Image Description" />
        </div>
        {/* End Col */}

        <div className="mt-2 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            {/* Title */}
            <div className="space-y-2 md:space-y-4">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            Social
          </p>
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-200 dark:text-gray-200">
                Join the Cyclist Community
              </h2>
              <p className="text-gray-400">
                Connect with fellow cyclists, share your experiences, and enjoy your free time in this vibrant community dedicated to cycling enthusiasts.
              </p>
            </div>
            {/* End Title */}

            {/* List */}
            <ul role="list" className="space-y-2 sm:space-y-4">
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>

                <span className="text-sm sm:text-base text-gray-400">
                  Like and comment on posts
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>

                <span className="text-sm sm:text-base text-gray-400">
                  Enjoy your free time with like-minded individuals
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>

                <span className="text-sm sm:text-base text-gray-400">
                  Connect with fellow cyclists from around the globe
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>

                <span className="text-sm sm:text-base text-gray-400">
                  Share your feelings and experiences
                </span>
              </li>
              <li>
                {/**button */}
                <button className="py-2 px-8 mt-4 font-bold text-gray-200 hover:text-black border-2 border-[#BDE420]  hover:bg-[#BDE420] hover:bg-[] rounded-full shadow">
                    Join Now
                </button>
                </li>
            </ul>
            {/* End List */}
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
    </div>
  )
}
