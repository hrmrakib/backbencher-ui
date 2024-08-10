import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className='my-20 pt-40 pb-[320px] relative'>
      <div className='w-[600px] mx-auto navigation-wrapper'>
        <div ref={sliderRef} className='keen-slider'>
          <div className='keen-slider__slide number-slide1'>
            <img className='w-15 h-16' src='/quatation.png' alt='' />
            <p className='text-center text-xl my-8'>
              When we talk about Alts, we do not mean a typical business
              partner, but rather a team that collaborates with us daily, always
              there for us when we encounter difficulties and celebrate
              achievements. We see in Alts our best ally for success!
            </p>
            <h2 className='uppercase text-3xl font-semibold mb-2'>
              Marid D. Halk
            </h2>
            <p>Managing Director</p>
          </div>
          <div className='keen-slider__slide number-slide1'>
            <img className='w-15 h-16' src='/quatation.png' alt='' />
            <p className='text-center text-xl my-8'>
              When we talk about Alts, we do not mean a typical business
              partner, but rather a team that collaborates with us daily, always
              there for us when we encounter difficulties and celebrate
              achievements. We see in Alts our best ally for success!
            </p>
            <h2 className='uppercase text-3xl font-semibold mb-2'>
              Marid D. Halk
            </h2>
            <p>Managing Director</p>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>

      {/* review section - images */}

      <img className='absolute top-0 left-1/4' src='/r1.webp' alt='' />
      <img className='absolute top-12 right-1/4' src='/r2.webp' alt='' />
      <img className='absolute top-1/4 left-8' src='/r3.webp' alt='' />
      <img className='absolute top-1/3 right-40' src='/r4.webp' alt='' />
      <img className='absolute top-1/2 right-80' src='/r5.webp' alt='' />
      <img className='absolute bottom-0 left-12' src='/r6.webp' alt='' />
    </div>
  );
};
function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";

  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      {props.left && (
        <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
      )}
      {!props.left && (
        <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
      )}
    </svg>
  );
}

export default Review;
