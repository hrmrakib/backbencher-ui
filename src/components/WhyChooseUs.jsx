import React from "react";

const WhyChooseUs = () => {
  return (
    <div>
      {/* first slide */}
      <div className='bg-[#F3ECEC] h-screen flex items-center justify-center'>
        <h2 className='uppercase text-center text-[120px] font-bold'>
          Why <br /> Choose Us
        </h2>
      </div>

      {/* second slide */}
      <div className='bg-[#fffaf0] h-screen'>
        <div className='w-[86%] mx-auto py-20 grid grid-cols-2 gap-10'>
          <div>
            <h3 className='text-lg font-semibold'>
              Why <br /> Choose Us
            </h3>
            <h2 className='text-6xl text-[#121212] uppercase my-16 font-semibold'>
              Keword,Research Strategy, Survey, & Analytics
            </h2>
            <p className='max-w-[340px] ml-32 text-[#636262] text-[17px]'>
              Attention, we take out our round glasses and our sweater with
              elbow patches to go back to the origins of the user experience:
              the first mention of the user and its importance was born in the
            </p>

            <div className='space-x-2 mt-8'>
              <button className='border-2 border-gray-700 rounded-2xl px-3 py-1 uppercase text-sm font-medium'>
                Google
              </button>
              <button className='border-2 border-gray-700 rounded-2xl px-3 py-1 uppercase text-sm font-medium'>
                Printerest
              </button>
              <button className='border-2 border-gray-700 rounded-2xl px-3 py-1 uppercase text-sm font-medium'>
                Instragram
              </button>
            </div>
          </div>

          <div className='space-y-5'>
            <div className='ml-24 flex items-center gap-8'>
              <div>
                <button className='size-48 border-[3px] border-gray-900 rounded-full text-5xl font-semibold text-gray-800 flex items-center justify-center'>
                  60%
                </button>
              </div>
              <div>
                <h2 className='text-4xl font-medium text-[#121212]'>
                  Strategy
                </h2>
                <p className='max-w-[270px] mt-4 text-[#121212e4]'>
                  Your marketing strategy optimizing performances doesn’t have
                  to be a guessing game.
                </p>
              </div>
            </div>
            <div className='flex items-center gap-8'>
              <div>
                <button className='size-48 border-[3px] border-gray-900 rounded-full text-5xl font-semibold text-gray-800 flex items-center justify-center'>
                  95%
                </button>
              </div>
              <div>
                <h2 className='text-4xl font-medium text-[#121212]'>
                  Audience
                </h2>
                <p className='max-w-[270px] mt-4 text-[#121212e4]'>
                  Your marketing strategy optimizing performances doesn’t have
                  to be a guessing game.
                </p>
              </div>
            </div>
            <div className='ml-24 flex items-center gap-8'>
              <div>
                <button className='size-48 border-[3px] border-gray-900 rounded-full text-5xl font-semibold text-gray-800 flex items-center justify-center'>
                  70%
                </button>
              </div>
              <div>
                <h2 className='text-4xl font-medium text-[#121212]'>Keyword</h2>
                <p className='max-w-[270px] mt-4 text-[#121212e4]'>
                  Your marketing strategy optimizing performances doesn’t have
                  to be a guessing game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third slide #FFFAF0 */}
      <div className='bg-[#a5833f] h-screen'>
        <div className='w-[86%] mx-auto'>
          <h3 className='pt-10 text-lg font-semibold'>
            Why <br /> Choose Us
          </h3>
          <div className='grid grid-cols-2 gap-10'>
            <div className='mx-20 mt-12 min-h-full relative flex justify-between'>
              <div>
                <h2 className='text-[100px]'>25k</h2>
                <p className='text-xl text-[#555555]'>
                  Project <br />
                  completed
                </p>
              </div>
              <div>
                <h2 className='text-[100px]'>8k</h2>
                <p className='text-xl text-[#555555]'>
                  Happy <br />
                  Customers
                </p>
              </div>

              <div className=' flex justify-between'>
                <h2 className='text-[100px]'>15</h2>

                <h2 className='text-[100px]'>98</h2>
              </div>
            </div>

            <div className=''>
              <img className='' src='/counter-3.webp' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
