import React from 'react';
import bg from '../assets/images/bg.jpg';

const Header = () => {
  const bgImage = {
    backgroundImage: `url(${bg})`,
    height: '60vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    // backgroundColor: 'rgba(0,0,0,0.65)',
    backgroundColor: 'rgba(19,78,74, 0.6)',
    backgroundBlendMode: 'overlay',
  };

  return (
    <header style={bgImage} className="h-[60vh] ">
      <div className="px-4 py-6 max-w-screen-xl mx-auto h-full">
        <div className="px-6 container mx-auto h-full">
          <div className="grid grid-cols-1 justify-center items-center h-full">
            <div className="grid">
              <h2 className="mb-5 font-sans text-3xl font-bold leading-10 text-white text-center sm:text-4xl ">
                WE HELP YOUR BUSINESS
              </h2>
              <p className="mb-7  text-base text-white text-center md:text-lg md:w-4/5 md:mx-auto lg:w-[70%] lg:mx-auto xl:w-1/2 xl:mx-auto ">
                Our goal is to bring our customers value. We provide that value
                with a well functioning, aesthetically pleasing website, and
                also through driving more organic traffic, which thus increases
                sales.
              </p>

              <a
                href="/"
                className="inline-block justify-self-center py-2.5 px-6 font-semibold tracking-wide text-[#41C19E] bg-white  rounded shadow-md focus:outline-none"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
