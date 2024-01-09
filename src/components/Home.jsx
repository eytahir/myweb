import React from 'react'
import HeroImage from '../assets/HeroImage.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-white via-gray-100 to-gray-100">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pr-5 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-7xl sn:text-7xl font-bold text-black">
                    I'm Rhey Rhey De Mesa
                </h2>
                <p className='text-gray-500 py-8 pr-5'> 
                As a recent graduate and aspiring front-end developer, combining my love for graphic design with coding for websites. I'm excited to use my design skills to make websites that look good and are easy to use.
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-amber-400 to-orange-600'>
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                        <MdKeyboardArrowRight size={25} className="first-letter:ml-1" />
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full cursor-pointer'/>

            </div>

        </div>
    </div>
  )
}

export default Home