import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Project = () => {

  return (
    <>
      <div name = "projects" className = "w-full py-8">
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
      </div>
    </>
  )
}

export default Project
