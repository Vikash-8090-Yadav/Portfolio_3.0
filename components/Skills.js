import React from 'react'
import Image from "next/image";
import {CircularProgressbar, CircularProgressbarWithChildren, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import polygon from '../public/Images/nxt.png'
import Hardhat from '../public/Images/Hardhat.png'

import Ether from '../public/Images/Ether.png'

import Docker from '../public/Images/doocker.png'
import Solidity from '../public/Images/Solidity.png'
import Bash from '../public/Images/Bash.png'
import JavaSCript from '../public/Images/Js.png'

import Python from '../public/Images/python.svg'
import TalwindCss from '../public/Images/Talwind.png'
import Git from '../public/Images/git.svg'
import Cpp from '../public/Images/cplusplus.svg'

import Linux from '../public/Images/linux.svg'
// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "AnimatedProgressProvider";
import ChangingProgressProvider from "ChangingProgressProvider";




const Skills = () => {
  return (
    <>
      <div name = "skills" className = "w-full py-5">
        <div className = "max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full border-gray-500">
          <div className = "pb-8">
            <p className = "text-4xl font-bold text-center mb-5 text-white">Skills</p>
          </div>

          <div className = "grid sm:grid-cols-3 md:grid-cols-4 gap-10 px-12 sm:p-0">
            
            
            <div className = " md:items-center max-sm:w-64 mx-auto">
              <ChangingProgressProvider values = {[10,80,80,80,80]}>
                {percentage => (
                  <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles ({
                    pathTransitionDuration: 0.15
                  })}/>
                )}
              </ChangingProgressProvider>
              <div className="flex items-center ">
              <Image src = {polygon} height="53" width="52" className = " py-4 img-skill  duration-200 hover:scale-110 hover:overflow-hidden" />
              <span className=" px-8 skill-cnt">Next Js</span>
              </div>
            </div>

                        <div className = "max-sm:w-64 mx-auto">
              <ChangingProgressProvider values = {[10,90,90,90,90]}>
                {percentage => (
                  <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles ({
                    pathTransitionDuration: 0.15
                  })}/>
                )}
              </ChangingProgressProvider>
              <div className="flex items-center ">
              <Image src = {Hardhat} height="53" width="52" className = " py-4 img-skill  duration-200 hover:scale-110 hover:overflow-hidden" />
              <span className=" px-8 skill-cnt">Hardhat</span>
              </div>
            </div>
            <div className = "max-sm:w-64 mx-auto">
              <ChangingProgressProvider values = {[10,80,80,80,80]}>
                {percentage => (
                  <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles ({
                    pathTransitionDuration: 0.15
                  })}/>
                )}
              </ChangingProgressProvider>
             <div className="flex items-center ">
              <Image src = {Ether} height="53" width="52" className = " py-4 img-skill  duration-200 hover:scale-110 hover:overflow-hidden" />
              <span className=" px-8 skill-cnt">Ether Js</span>
              </div>

            </div>
            <div className = "max-sm:w-64 mx-auto">
              <ChangingProgressProvider values = {[10,90,90,90,90]}>
                {percentage => (
                  <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles ({
                    pathTransitionDuration: 0.15
                  })}/>
                )}
              </ChangingProgressProvider>
             <div className="flex items-center ">
              <Image src = {Docker} height="53" width="52" className = " py-4 img-skill  duration-200 hover:scale-110 hover:overflow-hidden" />
              <span className=" px-8 skill-cnt">Docker</span>
              </div>
            </div>
            <div className = "max-sm:w-64 mx-auto">
              <ChangingProgressProvider values = {[10,80,80,80,80]}>
                {percentage => (
                  <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles ({
                    pathTransitionDuration: 0.15
                  })}/>
                )}
              </ChangingProgressProvider>
              <div className="flex items-center ">
              <Image src = {Solidity} height="53" width="52" className = " py-4 img-skill  duration-200 hover:scale-110 hover:overflow-hidden" />
              <span className=" px-8 skill-cnt">Solidity</span>
              </div>
            </div>
            <div className = "max-sm:w-64 mx-auto">
              <ChangingProgressProvider values = {[10,70,70,70,70]}>
                {percentage => (
                  <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles ({
                    pathTransitionDuration: 0.15
                  })}/>
                )}
              </ChangingProgressProvider>
             <div className="flex items-center ">
              <Image src = {Bash} height="53" width="52" className = " py-4 img-skill  duration-200 hover:scale-110 hover:overflow-hidden" />
              <span className=" px-8 skill-cnt">Bash</span>
              </div>
            </div>
            <div className = "max-sm:w-64 mx-auto">
              <ChangingProgressProvider values = {[10,70,70,70,70]}>
                {percentage => (
                  <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles ({
                    pathTransitionDuration: 0.15
                  })}/>
                )}
              </ChangingProgressProvider>
              <div className="flex items-center ">
              <Image src = {JavaSCript} height="53" width="52" className = " py-4 img-skill  duration-200 hover:scale-110 hover:overflow-hidden" />
              <span className=" px-8 skill-cnt">JavaSCript</span>
              </div>
            </div>
            <div className = "max-sm:w-64 mx-auto">
              <ChangingProgressProvider values = {[10,80,80,80,80]}>
                {percentage => (
                  <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles ({
                    pathTransitionDuration: 0.15
                  })}/>
                )}
              </ChangingProgressProvider>
             <div className="flex items-center ">
              <Image src = {TalwindCss} height="53" width="52" className = " py-4 img-skill  duration-200 hover:scale-110 hover:overflow-hidden" />
              <span className=" px-8 skill-cnt">TalwindCss</span>
              </div>
            </div>

             <div className = "max-sm:w-64 mx-auto">
              <ChangingProgressProvider values = {[10,70,70,70,70]}>
                {percentage => (
                  <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles ({
                    pathTransitionDuration: 0.15
                  })}/>
                )}
              </ChangingProgressProvider>
             <div className="flex items-center ">
              <Image src = {Git} height="53" width="52" className = " py-4 img-skill  duration-200 hover:scale-110 hover:overflow-hidden" />
              <span className=" px-8 skill-cnt">Git</span>
              </div>
            </div>

            <div className = "max-sm:w-64 mx-auto">
              <ChangingProgressProvider values = {[5,70,70,70,70]}>
                {percentage => (
                  <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles ({
                    pathTransitionDuration: 0.15
                  })}/>
                )}
              </ChangingProgressProvider>
             <div className="flex items-center ">
              <Image src = {Python} height="53" width="52" className = " py-4 img-skill  duration-200 hover:scale-110 hover:overflow-hidden" />
              <span className=" px-8 skill-cnt">Python</span>
              </div>
            </div>

            <div className = "max-sm:w-64 mx-auto">
              <ChangingProgressProvider values = {[10,90,90,90,90]}>
                {percentage => (
                  <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles ({
                    pathTransitionDuration: 0.15
                  })}/>
                )}
              </ChangingProgressProvider>
             <div className="flex items-center ">
              <Image src = {Cpp} height="53" width="52" className = " py-4 img-skill  duration-200 hover:scale-110 hover:overflow-hidden" />
              <span className=" px-8 skill-cnt">Cpp / C</span>
              </div>
            </div>

            <div className = "max-sm:w-64 mx-auto">
              <ChangingProgressProvider values = {[10,70,70,70,70]}>
                {percentage => (
                  <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles ({
                    pathTransitionDuration: 0.15
                  })}/>
                )}
              </ChangingProgressProvider>
             <div className="flex items-center ">
              <Image src = {Linux} height="53" width="52" className = " py-4 img-skill  duration-200 hover:scale-110 hover:overflow-hidden" />
              <span className=" px-8 skill-cnt">Linux</span>
              </div>
            </div>




          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
