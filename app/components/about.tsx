import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PortfolioImage from '../../public/logo/Portfolio.jpg';

const About = () => {
  return (
    <div id="About">
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded-[24px] mx-auto"
        alt="hero"
        src={PortfolioImage}
        width={300}
        height={500}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
     
      </h1>
      <p className="mb-5 leading-relaxed">
      I am enthusiastic and diligent software technology. Having worked on a Varity of projects around various domain equips me with the ability to adapt, enhance and optimize towards quality solution delivery. Eager to learn and solve real world challenges.
</p>
<br></br>
     <p> As a full-stack developer, I specialize in both front-end and back-end technologies, allowing  to create seamless, robust, and scalable applications from start to finish. My expertise spans across the full development lifecycle, from designing interactive user interfaces to managing databases and server-side logic. With your well-rounded skill set, you can handle complex projects and ensure that all parts of a system work together smoothly to deliver a cohesive user experience.
      </p>
      <div className="flex justify-center">
        <Link target="_blank" href={"/CV/mycv.pdf"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 mt-5 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          View CV
        </button>
        </Link>
       
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About