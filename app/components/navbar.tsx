import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import PortfolioImage from '../../public/logo/Portfolio.jpg'; // Import the image directly

const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0'>
      <header className="text-blue-900 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image 
              src={PortfolioImage} 
              alt="it-mate" 
              width={100} 
              height={100}
              className="w-[50px] rounded-[50px]"
            />
            <span className="ml-3 text-xl">Shumaila Sohaib</span>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-blue-600">HOME</Link>
            <Link href="#About" className="mr-5 hover:text-blue-600">ABOUT</Link>
            <Link href="#Skill" className="mr-5 hover:text-blue-600">SKILLS</Link>
            <Link href="#Project" className="mr-5 hover:text-blue-600">PROJECT</Link>
            <Link href="#Contect" className="mr-5 hover:text-blue-600">CONTACT US</Link>
          </nav>
          <a href="/CV/mycv.pdf">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Download CV
              <FaCloudDownloadAlt className="text-xl ml-2" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

