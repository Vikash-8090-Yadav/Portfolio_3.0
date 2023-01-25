import React from 'react'
import {CircularProgressbar, CircularProgressbarWithChildren, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
            <div className = "max-sm:w-64 mx-auto">
            {/* style={{ width: 200, height: 200 }} */}
              <ChangingProgressProvider values = {[0, 20, 40, 60, 80, 100]}>
                {percentage => (
                  <CircularProgressbar value = {percentage} text = {`${percentage}%`} />
                )}
              </ChangingProgressProvider>
            </div>
            
            <div className = "max-sm:w-64 mx-auto">
              <ChangingProgressProvider values = {[0, 20, 40, 60, 80, 100]}>
                {percentage => (
                  <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles ({
                    pathTransitionDuration: 0.15
                  })}/>
                )}
              </ChangingProgressProvider>
            </div>
    
            <div className = "max-sm:w-64 mx-auto">
              <ChangingProgressProvider values={[0, 100]}>
                {percentage => (
                  <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles ({
                    pathTransition:
                      percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
                  })}/>
                )}
              </ChangingProgressProvider>
            </div>
            
            <div className = "max-sm:w-64 mx-auto">
              <AnimatedProgressProvider valueStart = {0} valueEnd = {66} duration = {1.4} easingFunction = {easeQuadInOut} repeat>
                {value => {
                  const roundedValue = Math.round(value);
                  return (
                    <CircularProgressbar value={value} text={`${roundedValue}%`}
                    /* This is important to include, because if you're fully managing the animation yourself, you'll want to disable the CSS animation. */
                    styles={buildStyles({ pathTransition: "none" })}/>
                  );
                }}
              </AnimatedProgressProvider>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
