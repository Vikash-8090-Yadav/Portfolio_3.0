import React from 'react'
import Image from "next/image";
import Link from "next/link";
import polygon from '../public/Images/Khaana_Khazana.jpg'

import {HiOutlineMail} from "react-icons/hi";

const Project = () => {

  return (
    <>
      <div  className = "w-full py-5">
        <div className = "max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full border-gray-500">
          <div className = "pb-8">
            <p className = "text-4xl font-bold text-center mb-5 text-white">In Progress</p>
          </div>

          <div className = "grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0">
            <div className = "shadow-white shadow-2xl rounded-t-lg">
              <div className='overflow-hidden rounded-t-lg'>
                <Image src = "/Images/Khaana_Khazana.jpg" height="100" width="400" className = "rounded-t-md duration-200 hover:scale-110 hover:overflow-hidden" />
              </div>

              <div className = "bg-gradient-to-b from-black to-gray-800 text-center">
                <div>
                  <p className = "text-2xl font-bold mx-auto py-3 text-white">P2P Messaging Dapp </p>
                </div>
                <div>
                  <p className = "border-b-2 pb-3 text-white">This is a Web3 based Messaging Dapp.</p>
                </div>
                    
                <div className = "flex items-center justify-center">
                <button className = "w-1/2 px-6 py-3 text-xl border-r-2">
                    <Link href = "https://github.com/Vikash-8090-Yadav" target = "_blank" className = "text-white duration-200 md:hover:font-bold">Colab </Link>
                  </button>
                  <button className = "w-1/2 px-6 py-3 text-xl">
                    <Link href = "mailto:yadav621gzp@gmail.com" target = "_blank" className = "text-white  duration-200 md:hover:font-bold">Discus</Link>
                  </button>
                </div>
              </div>
            </div>

            <div className = "shadow-white shadow-2xl rounded-t-lg">
              <div className='overflow-hidden rounded-t-lg'>
                <Image src = "/Images/Khaana_Khazana.jpg" height="100" width="400" className = "rounded-t-md duration-200 hover:scale-110 hover:overflow-hidden" />
              </div>

              <div className = "bg-gradient-to-b from-black to-gray-800 text-center">
                <div>
                  <p className = "text-2xl font-bold mx-auto py-3 text-white">Full stack NFT Site</p>
                </div>
                <div>
                  <p className = "border-b-2 pb-3 text-white">This is Decentralised NFT  Website.</p>
                </div>
                    
                <div className = "flex items-center justify-center">
                <button className = "w-1/2 px-6 py-3 text-xl border-r-2">
                    <Link href = "https://github.com/Vikash-8090-Yadav" target = "_blank" className = "text-white duration-200 md:hover:font-bold">Colab </Link>
                  </button>
                  <button className = "w-1/2 px-6 py-3 text-xl">
                    <Link href = "mailto:yadav621gzp@gmail.com" target = "_blank" className = "text-white  duration-200 md:hover:font-bold">Discus</Link>
                  </button>
                </div>
              </div>
            </div>

            <div className = "shadow-white shadow-2xl rounded-t-lg">
              <div className='overflow-hidden rounded-t-lg'>
                <Image src = "/Images/Khaana_Khazana.jpg" height="100" width="400" className = "rounded-t-md duration-200 hover:scale-110 hover:overflow-hidden" />
              </div>

              <div className = "bg-gradient-to-b from-black to-gray-800 text-center">
                <div>
                  <p className = "text-2xl font-bold mx-auto py-3 text-white">Decentralised Social </p>
                </div>
                <div>
                  <p className = "border-b-2 pb-3 text-white">This is a Decentralised Social Media.</p>
                </div>
                    
                <div className = "flex items-center justify-center">
                  <button className = "w-1/2 px-6 py-3 text-xl border-r-2">
                    <Link href = "https://github.com/Vikash-8090-Yadav" target = "_blank" className = "text-white duration-200 md:hover:font-bold">Colab </Link>
                  </button>
                  <button className = "w-1/2 px-6 py-3 text-xl">
                    <Link href = "mailto:yadav621gzp@gmail.com" target = "_blank" className = "text-white  duration-200 md:hover:font-bold">Discus</Link>
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
