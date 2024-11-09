"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import PortfolioImage from '../../public/logo/Portfolio.jpg'; // import the image directly
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
  
    <section className="text-gray-600 body-font bg-fix bg-cover bg-center custom-image" >
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am 
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Web Developer', 'Data Analysist',"Digital Marketer"],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className='w-[100px] h-[2px] bg-blue-700'></div>
      <p className="mb-8 leading-relaxed">
      "As a full-stack developer with a solid foundation in digital marketing, data science, and machine learning, I bring a unique blend of technical expertise and analytical insight to build data-driven, user-focused solutions. My comprehensive skill set enables me to craft dynamic applications, leverage data for strategic decision-making, and optimize digital reach effectively."
      </p>
      <div className="flex justify-center">
        <Link href = {"#Contect"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
         Contect Us
        </button>
        </Link>
      
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  ">
      <Image
        className="object-cover object-center mx-auto  W-[20rem]"
        alt="Profile_Img"
        src={PortfolioImage}
        width={350}
        height={350}
      />
    </div>
  </div>
</section>

   
  )
}

export default Hero
