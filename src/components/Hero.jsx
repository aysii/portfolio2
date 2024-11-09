import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import profilepic from '../assets/profilepicB.png'
import notebookL from '../assets/6.png'
import notebookM from '../assets/5.png'

const Hero = () => {
  return (
    <div class="relative pt-16 pb-10 sm:pt-16 sm:pb-16 overflow-hidden h-[92vh]">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
            <div class="max-w-xl mx-auto text-center">
                <h1 class="text-4xl font-bold sm:text-6xl gray-primary-color">
                    Computer Scientist
                </h1>
                <p class="mt-5 text-base text-white sm:text-xl">
                    3rd Year Computer Science Student. Welcome To My Website Portfolio!
                </p>
                <div>
                    <a href="#" title="" class="shadow-2xl mr-4 inline-flex items-center px-6 py-4 mt-8 font-semibold text-white bg-primary-color rounded-lg transition-all duration-200 hover:scale-110" role="button">
                    Download Resume
                    </a>
                    <a href="#" title="" class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white border rounded-lg transition-all duration-200 hover:scale-110" role="button">
                    View Work
                    </a>
                </div>
                <div class="flex flex-row justify-between text-white p-8 max-w-[500px] mx-auto">
                  <a href="https://github.com/aysii" className='transition-all duration-200 hover:scale-110 cursor-pointer'><AiFillGithub className='w-[70px] h-auto'/></a>
                  <a href="https://www.instagram.com/the1ndonly_eyeos/" className='transition-all duration-200 hover:scale-110 cursor-pointer'><AiFillInstagram className='w-[70px] h-auto'/></a>
                  <a href="https://www.facebook.com/eyeos6" className='transition-all duration-200 hover:scale-110 cursor-pointer'><AiFillFacebook className='w-[70px] h-auto'/></a>
                </div>
            </div>
            <div class="relative bottom-0 z-10 flex mx-auto justify-center">
              <img class="left-[-200px] top-[-20px] sm:left-[-100px] sm:top-[-400px] absolute block w-auto h-[150px] sm:h-[500px]" src={notebookL} alt=""/>
              <img class="absolute sm:relative w-auto bottom-[-110px] right-[-70px] sm:bottom-0 sm:right-0 h-[100px] sm:h-[380px]" src={notebookM} alt=""/>
              <img class="right-[-270px] top-[-200px] sm:bottom-0 absolute block h-auto w-[800px] sm:w-[700px]" src={profilepic} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Hero
