import React,{useState} from 'react'

export default function faq() {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (accordionId) => {
      setActiveAccordion(accordionId === activeAccordion ? null : accordionId);
    };
  
    return (
        <div className=' min-h-screen bg-transparent relative'>
           <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-3xl" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <p className="text-base font-semibold leading-6 text-teal-500 uppercase">Discover</p>
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">Some frequently asked questions</h2>
          <p className="mt-1 text-gray-400">Answers to the most frequently asked questions.</p>
        </div>
        {/* End Title */}
  
        <div className="max-w-2xl mx-auto">
          {/* Accordion */}
          <div className="hs-accordion-group">
            <div className={` rounded-xl p-6 hs-accordion-active:bg-white/[.05] ${activeAccordion === 1 && 'active'}`}>
              <button
                onClick={() => toggleAccordion(1)}
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start  rounded-lg transition text-gray-200 hover:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                aria-expanded={activeAccordion === 1 ? 'true' : 'false'}
              >
                Can I cancel at anytime?
                <svg className={`hs-accordion-active:hidden block flex-shrink-0 size-5  ${activeAccordion === 1 && 'group-hover:text-gray-500 text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className={`hs-accordion-active:block hidden flex-shrink-0 size-5 ${activeAccordion === 1 && 'group-hover:text-gray-500 text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${activeAccordion === 1 ? 'block' : 'hidden'}`} aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                <p className="text-gray-200">
                  Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.
                </p>
              </div>
            </div>
  
            <div className={` rounded-xl p-6 hs-accordion-active:bg-white/[.05] ${activeAccordion === 2 && 'active'}`}>
              <button
                onClick={() => toggleAccordion(2)}
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start  rounded-lg transition text-gray-200 hover:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                aria-expanded={activeAccordion === 2 ? 'true' : 'false'}
              >
                My team has credits. How do we use them?
                <svg className={`hs-accordion-active:hidden block flex-shrink-0 size-5  ${activeAccordion === 2 && 'group-hover:text-gray-500 text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className={`hs-accordion-active:block hidden flex-shrink-0 size-5  ${activeAccordion === 2 && 'group-hover:text-gray-500 text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${activeAccordion === 2 ? 'block' : 'hidden'}`} aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                <p className="text-gray-200">
                  Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.
                </p>
              </div>
            </div>
  
            {/* Additional Accordion Items */}
            
            <div className={` rounded-xl p-6 hs-accordion-active:bg-white/[.05] ${activeAccordion === 3 && 'active'}`}>
              <button
                onClick={() => toggleAccordion(3)}
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start rounded-lg transition text-gray-200 hover:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                aria-expanded={activeAccordion === 3 ? 'true' : 'false'}
              >
                How does cycling life's pricing work?
                <svg className={`hs-accordion-active:hidden block flex-shrink-0 size-5  ${activeAccordion === 3 && 'group-hover:text-gray-500 text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className={`hs-accordion-active:block hidden flex-shrink-0 size-5  ${activeAccordion === 3 && 'group-hover:text-gray-500 text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${activeAccordion === 3 ? 'block' : 'hidden'}`} aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                <p className="text-gray-200">
                  Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.
                </p>
              </div>
            </div>
  
            <div className={` rounded-xl p-6 hs-accordion-active:bg-white/[.05] ${activeAccordion === 4 && 'active'}`}>
              <button
                onClick={() => toggleAccordion(4)}
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start rounded-lg transition  text-gray-200 hover:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
                aria-expanded={activeAccordion === 4 ? 'true' : 'false'}
              >
                How secure is cycling life app?
                <svg className={`hs-accordion-active:hidden block flex-shrink-0 size-5  ${activeAccordion === 4 && 'group-hover:text-gray-500 text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className={`hs-accordion-active:block hidden flex-shrink-0 size-5  ${activeAccordion === 4 && 'group-hover:text-gray-500 text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${activeAccordion === 4 ? 'block' : 'hidden'}`} aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                <p className=" text-gray-200">
                  Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.
                </p>
              </div>
            </div>
  
            <div className={` rounded-xl p-6 hs-accordion-active:bg-white/[.05] ${activeAccordion === 5 && 'active'}`}>
              <button
                onClick={() => toggleAccordion(5)}
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start  rounded-lg transition  text-gray-200 hover:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
                aria-expanded={activeAccordion === 5 ? 'true' : 'false'}
              >
                How do I get access to a theme I purchased?
                <svg className={`hs-accordion-active:hidden block flex-shrink-0 size-5  ${activeAccordion === 5 && 'group-hover:text-gray-500 text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className={`hs-accordion-active:block hidden flex-shrink-0 size-5  ${activeAccordion === 5 && 'group-hover:text-gray-500 text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${activeAccordion === 5 ? 'block' : 'hidden'}`} aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                <p className="text-gray-200">
                  If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.
                </p>
              </div>
            </div>
  
            <div className={` rounded-xl p-6 hs-accordion-active:bg-white/[.05] ${activeAccordion === 6 && 'active'}`}>
              <button
                onClick={() => toggleAccordion(6)}
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start rounded-lg transition  text-gray-200 hover:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
                aria-expanded={activeAccordion === 6 ? 'true' : 'false'}
              >
                Upgrade License Type
                <svg className={`hs-accordion-active:hidden block flex-shrink-0 size-5  ${activeAccordion === 6 && 'group-hover:text-gray-500 text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className={`hs-accordion-active:block hidden flex-shrink-0 size-5  ${activeAccordion === 6 && 'group-hover:text-gray-500 text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${activeAccordion === 6 ? 'block' : 'hidden'}`} aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                <p className="text-gray-200">
                  There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.
                </p>
              </div>
            </div>
  
            {/* Additional Accordion Items */}
          </div>
          {/* End Accordion */}
        </div>
      </div>
      </div>
  )
}
