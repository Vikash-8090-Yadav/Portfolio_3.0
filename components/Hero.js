import React from "react";
import Typewriter from 'typewriter-effect';
import Image from "next/image";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'

const Home = () => {
  return (
    <>
      <div name="hero" className="h-screen max-md:h-full w-full justify-center bg-gradient-to-br from-[#690a4a] via-[#100e2d] to-[#08624b]">
        <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row">
          <div className = "flex flex-col max-md:items-center justify-center h-full">
            <h2 className = "sm:text-5xl font-bold flex flex-col max-md:items-center justify-center">
              I'm a 
              <Typewriter className = "my-1 text-6xl text-yellow-300"
                options={{
                  strings: ["Frontend Developer", "Graphic Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className="text-gray-500 py-4 mb-3 max-w-md max-md:text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique natus aliquid adipisci nobis praesentium dolorum voluptatibus illum magni tenetur aut ullam ea quia error, perspiciatis assumenda vitae maxime est cupiditate?
            </p>

            <div>
              <button className="group text-white w-fit px-6 py-3 my-2 max-md:mt-5 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Download Resume as NFT
                <span className="md:group-hover:rotate-90 duration-300">
                  <AiOutlineArrowRight size={25} className="ml-2" />
                </span>
              </button>
            </div>
          </div>

          <div className = "flex flex-col items-center justify-center">
            <Image src = "/Images/devImg.png" height="100" width="400" className = "md:hover:scale-125 duration-500 max-md:pt-10 ml-28 pr-0 " />
            <button className="group text-white w-fit px-6 py-3 mt-0 mb-10 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 cursor-pointer">
                <span className="md:group-hover:-rotate-90 duration-300">
                  <AiOutlineArrowLeft size={25} className="mr-2" />
                </span>
                Download as NFT
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;