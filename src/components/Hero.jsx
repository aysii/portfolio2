import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import profilepic from '../assets/profilepicB.png'
import notebookL from '../assets/6.png'
import notebookM from '../assets/5.png'

const Hero = () => {
  return (
    <div className="relative pt-16 pb-10 sm:pt-16 sm:pb-16 overflow-hidden h-[92vh]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-xl mx-auto text-center">
                <h1 className="text-4xl font-bold sm:text-6xl gray-primary-color">
                    Computer Scientist
                </h1>
                <p className="mt-5 text-base text-white sm:text-xl">
                    3rd Year Computer Science Student. Welcome To My Website Portfolio!
                </p>
                
                <div className="flex flex-row justify-between text-white p-8 max-w-[500px] mx-auto">
                  <a href="https://github.com/aysii" className='transition-all duration-200 hover:scale-110 cursor-pointer'>
                    <AiFillGithub className='w-[70px] h-auto'/>
                  </a>
                  <a href="https://www.instagram.com/aysii_senju/profilecard/?igsh=MW1nYW5wMDJ6dzc5bQ==" className='transition-all duration-200 hover:scale-110 cursor-pointer'>
                    <AiFillInstagram className='w-[70px] h-auto'/>
                  </a>
                  <a href="https://www.facebook.com/jameson.manabat?mibextid=ZbWKwL" className='transition-all duration-200 hover:scale-110 cursor-pointer'>
                    <AiFillFacebook className='w-[70px] h-auto'/>
                  </a>
                </div>
            </div>
            <div className="relative bottom-0 z-10 flex mx-auto justify-center">
              <img 
                className="left-[-200px] top-[-20px] sm:left-[-100px] sm:top-[-400px] absolute block w-full sm:w-auto h-auto sm:h-[500px]" 
                src={notebookL} alt="Notebook Large"
              />
              <img 
                className="absolute sm:relative w-full sm:w-auto bottom-[-110px] right-[-70px] sm:bottom-0 sm:right-0 sm:h-[380px] h-auto" 
                src={notebookM} alt="Notebook Medium"
              />
              <img 
                className="right-[-270px] top-[-200px] sm:bottom-0 absolute block w-full sm:w-[700px] h-auto" 
                src={profilepic} alt="Profile Picture"
              />
            </div>
        </div>
    </div>
  )
}

export default Hero
