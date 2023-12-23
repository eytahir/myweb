import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    const links = [
        {
            id:1,
            child:(
                <>LinkedIn<FaLinkedin size={30}/></>
            ),
            href:'https://www.linkedin.com/in/rhey-rhey-de-mesa-a438892a4/',
            style:'flex justify-between items-center w-40 h-14 px-4 bg-black rounded-tr-md ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 hover:bg-amber-500'
            


        },
        {
            id:2,
            child:(
                <>Github<FaGithub size={30}/></>
            ),
            href:'https://github.com',
            style:'flex justify-between items-center w-40 h-14 px-4 bg-black ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 hover:bg-amber-500'
            
        },
        {
            id:3,
            child:(
                <>Email<HiOutlineMail size={30}/></>
            ),
            href:'mailto:rheyaaron802@gmail.com',
            style:'flex justify-between items-center w-40 h-14 px-4 bg-black ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 hover:bg-amber-500'
           

        },
        {
            id:4,
            child:(
                <>Resume<BsFillPersonLinesFill size={30}/></>
            ),
            href:'/DEMESA_RESUME.pdf',
            style:'flex justify-between items-center w-40 h-14 px-4 bg-black rounded-br ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 hover:bg-amber-500',
            download:true,

        }
    ]



  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map(({id,child,href,style,download}) => (

                 <li key={id} className={style}>
                <a href={href} className='flex justify-between items-center w-full text-white'
                download={download}
                target="_blank"
                rel="noreferrer"
                >
                   
                    {child}
                </a>
            </li>


            ))}


           
        </ul>

    </div>
  )
}

export default SocialLinks