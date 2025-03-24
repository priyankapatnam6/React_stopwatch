import React, { useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(()=>{
    AOS.init(
      {
        easing: 'ease-in-out',
        delay : 100,
        duration: 1000
      })
  },[1000]);

  return (
    <div id="Home"  className='bg-blue-950 lg:px-36 px-10 lg:py-0 py-10 pt-0 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center overflow-hidden'>
    <div className="h-full lg:py-16 flex flex-col justify-center lg:items-start items-center text-white pt-5">
    <h1 data-aos="fade-right" className='text-black text-[52px] font-semibold mb-8 leading-normal'>
  Hi, I'm <span style={{ color: '#FBBF24' }}>Patnam Priyanka</span> a <span>Frontend React Developer</span>
</h1>

<img data-aos="fade-down " src={`${process.env.PUBLIC_URL}/priyanka.jpeg`} alt="Priyanka"  width={250} height={250}
     className='mt-30 rounded-full pic border-[1.5px] border-black' style={{ borderRadius: '50px',marginTop:'45px'}}  />
      {/* <h1 data-aos="fade-right" className='text-black text-[52px] font-semibold mb-8 leading-normal'>Hi,<br></br>I'm <span className='text-yellow-400'>Patnam Priyanka</span> a  <span>Frontend React Developer</span></h1> */}
      <div data-aos="fade-up" className='flex mt-8 gap-2  pt-5'>
        <div className='flex items-center justify-center'>
          <div className='flex space-x-2'>
            <a href="https://github.com/priyankapatnam6" target='_blank' className='text-pink-600 hover:text-pink-500 rounded-full glow p-2' >
              <FaGithub className="text-[28px]"/>
            </a>
            <a href="https://www.linkedin.com/in/patnam-priyanka-973955218/" target='_blank' className='text-pink-600 hover:text-pink-500 rounded-full glow p-2' >
              <FaLinkedin className="text-[28px]"/>
            </a>
            <a href="" className='text-pink-600 hover:text-pink-500 rounded-full glow p-2' >
              <FaInstagram className="text-[28px]"/>
            </a>
          </div>
        </div>
      </div>      
    </div>
  

   
    
  </div>
  )
}

export default Home
