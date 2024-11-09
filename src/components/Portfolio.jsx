import React from 'react'
import proj1 from '../assets/2.png'
import proj2 from '../assets/3.png'
import { AiFillGithub, AiFillChrome } from 'react-icons/ai'

const Portfolio = () => {
  return (
    <div className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 md:h-[92vh]'>
      <div class="px-7 mx-auto grid sm:grid-cols-2 gap-6">

        <div class="mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
          <a href="/" class="group h-48 col-span-3 md:h-80">
            <img src={proj1} alt="" class="h-full w-full object-cover object-center transition
                                          duration-200 group-hover:scale-110 rounded-lg"/>

          </a>
          <div class="flex flex-col col-span-3 p-4 mx-auto my-auto">
            <h2 class="text-gray-200 font-bold text-xl leading-10">
              Project #1
            </h2>
            <p class="text-gray-400">
              This first project is about a digital inventory management for a
              specific company.
            </p>
          </div>
          <div class="flex flex-row justify-between text-white gap-4 mx-auto pb-4">
              <AiFillGithub className='w-[55px] h-auto'/>
              <AiFillChrome className='w-[55px] h-auto'/>
          </div>
        </div>

        <div class="mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
          <a href="/" class="group h-48 col-span-3 md:h-80">
            <img src={proj2} alt="" class="h-full w-full object-cover object-center transition
                                          duration-200 group-hover:scale-110 rounded-lg"/>

          </a>
          <div class="flex flex-col col-span-3 p-4 mx-auto my-auto">
            <h2 class="text-gray-200 font-bold text-xl leading-10">
              Project #2
            </h2>
            <p class="text-gray-400">
              This next project is a student subject management system. A requirement project for the subject DCIT 55.
            </p>
          </div>
          <div class="flex flex-row justify-between text-white gap-4 mx-auto pb-4">
              <AiFillGithub className='w-[55px] h-auto'/>
              <AiFillChrome className='w-[55px] h-auto'/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Portfolio
