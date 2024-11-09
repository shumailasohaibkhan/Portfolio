import React from 'react';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Image from 'next/image';
import PortfolioImage from '../../public/logo/Portfolio.jpg'; // import the image directly

const Footer = () => {
  return (
    <div className='bg-blue-100'>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image 
              src={PortfolioImage}
              alt="it-mate" 
              width={50} 
              height={100}
              className="w-[50px] rounded-[100px]"
            />
            <span className="ml-3 text-xl">Shumaila Sohaib</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2020 CoderSK —
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link 
              target="_blank"
              href="https://github.com/shumailakhan4810"
              className="ml-3 text-gray-500"
            >
              <BsGithub className='text-3xl hover:text-[#121111]' />
            </Link>
            <Link 
              target="_blank"
              href="https://www.linkedin.com/in/shumaila-sohaib-b83b63300/"
              className="ml-3 text-gray-500"
            >
              <BsLinkedin className='text-3xl hover:text-[#7272cb] ml-4' />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
