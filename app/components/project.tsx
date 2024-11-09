import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PortfolioImage from '../../public/my_project/origami.jpg';
import ProjectImage  from '../../public/my_project/project-2.jpg';
import NailpolishImage from '../../public/my_project/nailpolish.jpg';


const Project = () => {
  return (
    <div id="Project">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
       My Projects
      </h1>
      
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
      {/* Project Class */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={PortfolioImage}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Origami Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Origami
            </h1>
            <p className="leading-relaxed line-clamp-2">
            Origami originated from China and was popularized in Japan. It is the art of paper
            folding. Paper-folding is a wonderful hobby and a wonderful group activity... and for
            kids it has so many benefits socially and for the developing mind. You get to make
            cool stuff - with only a sheet of paper!
            </p>
            <Link target="_blank" href={"https://origami-project-navy.vercel.app/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
            View Project
            </p>
            </Link>
           
            
          </div>
        </div>
      </div>
      {/* project 2 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={ProjectImage}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Origami Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Moments
            </h1>
            <p className="leading-relaxed line-clamp-2">
            Top priority to innovation &amp; upgradation of technology in the avenues of
            Distribution of All kinds and brands of Digital Camera and their related accessories.
            The customers get the benefit of Undivided Attention, Expert Analysis, Innovative
            Ideas, Commitment and Comprehensive Hardware &amp; Software Solution.
            </p>
            <Link target="_blank" href={"https://vercel.com/shumaila-sohaibs-projects/moement"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
            View Project
            </p>
            </Link>
           
            
          </div>
        </div>
      </div>
      {/* project 3 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={NailpolishImage}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Origami Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              NailPolish
            </h1>
            <p className="leading-relaxed line-clamp-2">
            we are aiming to design a website “NailArt” which will provide an easy way to
            learn nail art with various designs and steps involved.The nail-care industry has been growing like never before ever since the invention of
            modern nail polish.
            </p>
            
            <p className="leading-relaxed text-blue-500 hover:underline">
            View Project
            </p>
            
           
            
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
