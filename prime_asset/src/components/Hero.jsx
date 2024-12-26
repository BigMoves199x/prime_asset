import React from 'react';
import Tree from '../assets/Tree.jpg';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <img
        src={Tree}
        alt="Investment background"
        className="object-cover h-full w-full"
      />
       <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl font-bold leading-snug">
          Where investing your <br /> way is our way.
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Take the first step towards a secure future with us.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
