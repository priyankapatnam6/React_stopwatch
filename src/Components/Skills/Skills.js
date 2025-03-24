import React from "react";
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiRedux } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaJava } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import './Skills.css';  

const Skills=()=> {
  return (
    <div id="Skills" className="bg-blue-950 w-full overflow-hidden">
      <h1 className="text-black text-[15px] font-semibold mb-8 leading-normal text-center shadow-2xl">
        SKILLS
      </h1>
      <div className="skills-container flex items-center justify-center pt-12 pb-14">
        <div className="skills-grid grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
          <div className="skill-card fade-in">
            <a href="" className="skill-icon text-orange-400 hover:text-orange-700">
              <ImHtmlFive2 className="text-[55px]" />
            </a>
            <h2>HTML</h2>
          </div>
          <div className="skill-card fade-in">
            <a href="" className="skill-icon text-blue-400 hover:text-blue-500">
              <FaCss3Alt className="text-[55px]" />
            </a>
            <h2>CSS</h2>
          </div>
          <div className="skill-card fade-in">
            <a href="" className="skill-icon text-yellow-400 hover:text-yellow-500">
              <SiJavascript className="text-[55px]" />
            </a>
            <h2>JavaScript</h2>
          </div>
          <div className="skill-card fade-in">
            <a href="" className="skill-icon text-blue-400 hover:text-blue-500">
              <GrReactjs className="text-[55px]" />
            </a>
            <h2>React JS</h2>
          </div>

          <div className="skill-card fade-in">
            <a href="" className="skill-icon text-blue-400 hover:text-blue-500">
              <SiRedux  className="text-[55px]" />
            </a>
            <h2>Redux</h2>
          </div>
          <div className="skill-card fade-in">
            <a href="" className="skill-icon text-orange-400 hover:text-orange-500">
              <FaGitAlt className="text-[55px]" />
            </a>
            <h2>Git</h2>
          </div>
          <div className="skill-card fade-in">
            <a href="" className="skill-icon text-slate-600 hover:text-slate-800">
              <FaGithub className="text-[55px]" />
            </a>
            <h2>GitHub</h2>
          </div>
          <div className="skill-card fade-in">
            <a href="" className="skill-icon text-slate-600 hover:text-slate-800">
              <FaGithub className="text-[55px]" />
            </a>
            <h2>Bit Bucket</h2>
          </div>

          <div className="skill-card fade-in">
            <a href="" className="skill-icon text-blue-400 hover:text-blue-500">
              <SiTailwindcss className="text-[55px]" />
            </a>
            <h2>Tailwind</h2>
          </div>
          <div className="skill-card fade-in">
            <a href="" className="skill-icon text-green-500 hover:text-green-600">
              <BiLogoSpringBoot className="text-[55px]" />
            </a>
            <h2>Spring Boot</h2>
          </div>
          <div className="skill-card fade-in">
            <a href="" className="skill-icon text-blue-400 hover:text-green-600">
              <GrMysql className="text-[55px]" />
            </a>
            <h2>MySQL</h2>
          </div>
          <div className="skill-card fade-in">
            <a href="" className="skill-icon text-blue-400 hover:text-green-600">
              <GrMysql className="text-[55px]" />
            </a>
            <h2>Apache Tomcat</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

