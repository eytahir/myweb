import React from 'react'
import radiant from "../assets/radiant.png";
import evhan from "../assets/evhan.png";
import ginks from "../assets/ginks.png";

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: radiant,
            href:'https://www.facebook.com/RadiantMindsSolutions'
        },
        {
            id:2,
            src: ginks,
            href:"https://tangerine-cannoli-1ef776.netlify.app"
        },
        {
            id:3,
            src: evhan
        }
    ]



  return (
    <div name="portfolio" className=' bg-zinc- w-full md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline-block border-b-4 border-gray-500'> Portfolio</p>
                <p>Check out some of my portfolio</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0'>


               {
                portfolios.map(({id,src,href}) =>(

                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="www" className='rounded-md duration-200 hover:scale-105' />
                    <div className=" flex items-center justify-center">
                    <a href={href} class=" font-bold text-black hover:scale-125 duration-200 py-4">Demo</a>

                    </div>
                </div>

                ))
               }


               
            </div>
        </div>
    </div>
  )
}

export default Portfolio