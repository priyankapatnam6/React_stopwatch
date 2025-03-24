import React from 'react'
import stopwatch from '../../assests/stopwatch.png'
const Projects = () => {
  return (
    <div id="Skills" className="bg-blue-950 w-full overflow-hidden">
      <h1 className="text-black text-[15px] font-semibold mb-8 leading-normal text-center shadow-2xl">
       PROJECTS
      </h1>
      <div className="skills-container flex items-center justify-center pt-12 pb-14">
      <div className="skills-grid grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
      <a
                      href="https://github.com/priyankapatnam6/React_stopwatch/tree/main/stop_watch" target='_blank'
                      className="text-orange-400 hover:text-orange-500 rounded-full p-2 "
                    >
                        <img className='w-full ' src={stopwatch} alt="" />
                      
                    </a>
                    
        </div></div>
      </div>
      
    // <div>
    //   Projects
    // </div>
  )
}

export default Projects
