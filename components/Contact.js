import React from 'react'
import Image from "next/image";
import Coffee from "../public/Images/Coffee.png"
const Contact = () => {
  return (
    <>
      <div name = "contact" className = "w-full p-4">
        <div className = "flex flex-col p-4 justify-center max-w-screen-lg mx-auto ">
            <div className = "pb-8">
                <p className = "text-4xl font-bold text-center flex items-center justify-center">Buy me a
                  <Image src = {Coffee} height="50" width="50" className = "mx-3 transform flip-horizontal" />
                </p>
                <p className = "py-6 text-center text-xl">Submit the form below to buy me a coffee.</p>
            </div>

            <div className = "flex justify-center items-center">
                <form className = "flex flex-col w-full md:w-1/2">
                    <input type = "text" name = "name" placeholder = "Enter your name" className = "p-2 bg-transparent border-2 rounded-md focus:outline-none" />
                    <input type = "email" name = "email" placeholder = "Enter your email" className = "my-6 p-2 bg-transparent border-2 rounded-md focus:outline-none" />
                    <textarea placeholder = "Enter your Message" name = "message" rows = "8" className = "p-2 bg-transparent border-2 rounded-md focus:outline-none" />

                    <button className = "px-6 py-3 bg-gradient-to-b from-cyan-500 to-blue-500 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-125">Buy me a Coffee</button>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact