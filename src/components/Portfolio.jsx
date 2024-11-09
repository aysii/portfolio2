import React from 'react';
import { useParams } from 'react-router-dom';
import proj2 from '../assets/portfolio.png';

const ProjectDetails = () => {
  const { id } = useParams();  
  return (
    <div className="pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 md:h-[92vh]">
      <div className="px-7 mx-auto">
        {id === '1' ? (
          <>
            
          </>
        ) : (
          <>
            <h2 className="text-3xl text-gray-200 font-bold mb-4">Project #1 - Student Subject Management System</h2>
            <img src={proj2} alt="Project 2" className="w-1% h-30% rounded-lg shadow-lg" />
            <p className="text-3xl text-gray-150 mt-4 font-bold mb-4">This is the first project the student subject management system. A requirement project for the subject 
            DCIT55</p>
            
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectDetails;
