import React from "react";

const WhyChooseUs = () => {
  return (
    <div>
      {/* first slide */}
      {/* <div className='bg-[#F3ECEC] h-screen'>
        <h2 className='uppercase text-center text-[120px] font-bold'>
          Why <br /> Choose Us
        </h2>
      </div> */}

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
          </div>

          <div>
            <div className='flex items-center gap-8'>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
