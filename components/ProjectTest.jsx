import React from 'react'
import Image from "next/image";
import Link from "next/link";
import polygon from '../public/Images/Khaana_Khazana.jpg'

const ProjectT = () => {

  return (
    <>
    <div name = "projects">
<div class="w-full my-20 z-50   ">
<div className = "pb-8">
            <p className = "text-4xl font-bold text-center mb-5 text-white">Projects</p>
          </div>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class=" rounded-t-lg flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div class =" imgProject Projectblock shadow-white shadow-2xl bg-gradient-to-b from-black to-gray-800">
      <Image  src ={polygon} width ={500} height = {500} alt ="hero-image" className = " rounded-md duration-200 hover:scale-110 hover:overflow-hidden"/> 
      <div className = "flex items-center justify-center">
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
                          <Link href = "" target = "_blank">Code</Link>
                        </button>
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
                          <Link href = "" target = "_blank">Demo</Link>
                        </button>
                      </div>
        </div> 
        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">

          <div class="ProjectText max-w-xl mb-6">

            <h2 class="text-yellow-400 max-md:text-3xl text-5xl font-bold flex flex-col max-md:items-center justify-center sm:leading-none max-w-lg mb-6">
             Salary Dapp
            </h2>
            <p class="text-white text-base md:text-lg">Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.

            </p>
          </div>
          <div class="flex items-center space-x-3">
          <Link   class="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-pink-700 bg-gradient-to-l from-indigo-800 hover:bg-pink-700 hover:bg-gradient-to-r hover:from-indigo-800 rounded-xl font-black"
     href="/comingsoon">
            
     
       Know More
  
    </Link>
          </div>
        </div>
      </div>
    </div>


<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class=" rounded-t-lg flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div class="max-w-xl mb-6">

            <h2 class="text-yellow-400 max-md:text-3xl text-5xl font-bold flex flex-col max-md:items-center justify-center sm:leading-none max-w-lg mb-6">
              Voting Dapp
            </h2>
            <p class="text-white text-base md:text-lg"> Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.
            </p>
          </div>
          <div class="flex items-center space-x-3">
          <Link   class="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-pink-700 bg-gradient-to-l from-indigo-800 hover:bg-pink-700 hover:bg-gradient-to-r hover:from-indigo-800 rounded-xl font-black"
     href="/comingsoon">
            
     
       Know More
  
    </Link>
          </div>
        </div>
        <div class =" imgProject Projectblock shadow-white shadow-2xl bg-gradient-to-b from-black to-gray-800">
      <Image  src ={polygon} width ={500} height = {500} alt ="hero-image" className = "rounded-md duration-200 hover:scale-110 hover:overflow-hidden"/> 
      <div className = "flex items-center justify-center">
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
                          <Link href = "" target = "_blank">Code</Link>
                        </button>
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
                          <Link href = "" target = "_blank">Demo</Link>
                        </button>
                      </div>
        </div> 
            </div>
    </div>


    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div class =" imgProject Projectblock shadow-white shadow-2xl bg-gradient-to-b from-black to-gray-800">
      <Image  src ={polygon} width ={500} height = {500} alt ="hero-image" className = "rounded-md duration-200 hover:scale-110 hover:overflow-hidden"/> 
      <div className = "flex items-center justify-center">
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
                          <Link href = "" target = "_blank">Code</Link>
                        </button>
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
                          <Link href = "" target = "_blank">Demo</Link>
                        </button>
                      </div>
        </div> 
        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">

          <div class="ProjectText max-w-xl mb-6">

            <h2 class="text-yellow-400 max-md:text-3xl text-5xl font-bold flex flex-col max-md:items-center justify-center sm:leading-none max-w-lg mb-6">
            Cu-Restuarant
            </h2>
            <p class="text-white text-base md:text-lg">Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.

            </p>
          </div>
          <div class="flex items-center space-x-3">
          <Link   class="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-pink-700 bg-gradient-to-l from-indigo-800 hover:bg-pink-700 hover:bg-gradient-to-r hover:from-indigo-800 rounded-xl font-black"
     href="/comingsoon">
            
     
       Know More
  
    </Link>
          </div>
        </div>
      </div>
    </div>


<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div class="max-w-xl mb-6">

            <h2 class="text-yellow-400 max-md:text-3xl text-5xl font-bold flex flex-col max-md:items-center justify-center sm:leading-none max-w-lg mb-6">
              Decntralised Portfolio
            </h2>
            <p class="text-white text-base md:text-lg"> Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.
            </p>
          </div>
          <div class="flex items-center space-x-3">
          <Link   class="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-pink-700 bg-gradient-to-l from-indigo-800 hover:bg-pink-700 hover:bg-gradient-to-r hover:from-indigo-800 rounded-xl font-black"
     href="/comingsoon">
            
     
       Know More
  
    </Link>
          </div>
        </div>
        <div class =" imgProject Projectblock shadow-white shadow-2xl bg-gradient-to-b from-black to-gray-800">
      <Image  src ={polygon} width ={500} height = {500} alt ="hero-image" className = "rounded-md duration-200 hover:scale-110 hover:overflow-hidden"/> 
      <div className = "flex items-center justify-center">
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
                          <Link href = "" target = "_blank">Code</Link>
                        </button>
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
                          <Link href = "" target = "_blank">Demo</Link>
                        </button>
                      </div>
        </div> 
            </div>
    </div>





          </div>
      </div>
      {/* <div name = "projects" className = "w-full py-8">
        <div className = "max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full border-gray-500">
            <div className = "pb-8">
                <p className = "text-4xl font-bold text-center mb-5">Projects</p>
            </div>
            <div className = "grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0 ">
                <div className = "shadow-md shadow-gray-600 rounded-lg">
                    <div className='overflow-hidden rounded-lg rounded-t-lg'>
                      <Image src = "/Images/Khaana_Khazana.jpg" height="100" width="400" className = "rounded-md duration-200 hover:scale-110 hover:overflow-hidden" />
                    </div>
                    <div className = "bg-gradient-to-b from-black to-gray-800">
                      <div>
                        <p className = "text-2xl font-bold text-center border-b-2 py-3">Khaana Khazana</p>
                      </div>
                    
                      <div className = "flex items-center justify-center">
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
                          <Link href = "" target = "_blank">Code</Link>
                        </button>
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
                          <Link href = "" target = "_blank">Demo</Link>
                        </button>
                      </div>
                    </div>
                </div>
                <div className = "shadow-md shadow-gray-600 rounded-lg">
                    <div className='overflow-hidden rounded-lg rounded-t-lg'>
                      <Image src = "/Images/Khaana_Khazana.jpg" height="100" width="400" className = "rounded-md duration-200 hover:scale-110 hover:overflow-hidden" />
                    </div>
                    <div className = "bg-gradient-to-b from-black to-gray-800">
                      <div>
                        <p className = "text-2xl font-bold text-center border-b-2 py-3">Khaana Khazana</p>
                      </div>
                    
                      <div className = "flex items-center justify-center">
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
                          <Link href = "" target = "_blank">Code</Link>
                        </button>
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
                          <Link href = "" target = "_blank">Demo</Link>
                        </button>
                      </div>
                    </div>
                </div>
                <div className = "shadow-md shadow-gray-600 rounded-lg">
                    <div className='overflow-hidden rounded-lg rounded-t-lg'>
                      <Image src = "/Images/Khaana_Khazana.jpg" height="100" width="400" className = "rounded-md duration-200 hover:scale-110 hover:overflow-hidden" />
                    </div>
                    <div className = "bg-gradient-to-b from-black to-gray-800">
                      <div>
                        <p className = "text-2xl font-bold text-center border-b-2 py-3">Khaana Khazana</p>
                      </div>
                    
                      <div className = "flex items-center justify-center">
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
                          <Link href = "" target = "_blank">Code</Link>
                        </button>
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
                          <Link href = "" target = "_blank">Demo</Link>
                        </button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div> */}
    </>
  )
}

export default ProjectT