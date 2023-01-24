import React from 'react'
import Image from "next/image";
import Link from "next/link";
import polygon from '../public/Images/Khaana_Khazana.jpg'

const Project = () => {

  return (
    <>
      <div name = "projects" className = "w-full py-8 bg-gradient-to-bl from-[#100e2d] to-[#690a4a]">
        <div className = "max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full border-gray-500">
            <div className = "pb-8">
              <p className = "text-4xl font-bold text-center mb-5 text-white">Projects</p>
            </div>

            <div className = "grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0">
              <div className = "shadow-white-600 shadow-2xl rounded-lg">
                <div className='overflow-hidden rounded-lg rounded-t-lg'>
                  <Image src = "/Images/Khaana_Khazana.jpg" height="100" width="400" className = "rounded-md duration-200 hover:scale-110 hover:overflow-hidden" />
                </div>

                <div className = "bg-gradient-to-b from-black to-gray-800 text-center">
                  <div>
                    <p className = "text-2xl font-bold mx-auto py-3 text-white">Khaana Khazana</p>
                  </div>
                  <div>
                    <p className = "border-b-2 pb-3 text-white">This is a Restaurant Website.</p>
                  </div>
                    
                  <div className = "flex items-center justify-center">
                    <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
                      <Link href = "" target = "_blank" className = "text-white">Code</Link>
                    </button>
                    <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
                      <Link href = "" target = "_blank" className = "text-white">Demo</Link>
                    </button>
                  </div>
                </div>
            </div>

            <div className = "shadow-white-600 shadow-2xl rounded-lg">
              <div className='overflow-hidden rounded-lg rounded-t-lg'>
                <Image src = "/Images/Khaana_Khazana.jpg" height="100" width="400" className = "rounded-md duration-200 hover:scale-110 hover:overflow-hidden" />
              </div>

              <div className = "bg-gradient-to-b from-black to-gray-800 text-center">
                <div>
                  <p className = "text-2xl font-bold mx-auto py-3 text-white">Khaana Khazana</p>
                </div>
                <div>
                  <p className = "border-b-2 pb-3 text-white">This is a Restaurant Website.</p>
                </div>
                    
                <div className = "flex items-center justify-center">
                  <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
                    <Link href = "" target = "_blank" className = "text-white">Code</Link>
                  </button>
                  <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
                    <Link href = "" target = "_blank" className = "text-white">Demo</Link>
                  </button>
                </div>
              </div>
            </div>

            <div className = "shadow-white-600 shadow-2xl rounded-lg">
              <div className='overflow-hidden rounded-lg rounded-t-lg'>
                <Image src = "/Images/Khaana_Khazana.jpg" height="100" width="400" className = "rounded-md duration-200 hover:scale-110 hover:overflow-hidden" />
              </div>

              <div className = "bg-gradient-to-b from-black to-gray-800 text-center">
                <div>
                  <p className = "text-2xl font-bold mx-auto py-3 text-white">Khaana Khazana</p>
                </div>
                <div>
                  <p className = "border-b-2 pb-3 text-white">This is a Restaurant Website.</p>
                </div>
                    
                <div className = "flex items-center justify-center">
                  <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
                    <Link href = "" target = "_blank" className = "text-white">Code</Link>
                  </button>
                  <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
                    <Link href = "" target = "_blank" className = "text-white">Demo</Link>
                  </button>
                </div>
              </div>
            </div>      
          </div>
        </div>
      </div>
    </>
//     <>
//     <div id="About">
// <div class="w-full my-20 z-50   rounded-3xl px-6 bg-zinc-600 bg-gradient-to-r from-indigo-800">
// <h1 class="text-extrabold text-5xl text-white text-center font-bold font-serif">How we did it ?</h1>
//     <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//       <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
//         <div class ="bg-gradient-to-b from-black to-gray-800">
//       <Image  src ={polygon} width ={400} height = {400} alt ="hero-image" className = "rounded-md duration-200 hover:scale-110 hover:overflow-hidden"/> 
//       <div className = "flex items-center justify-center">
//                         <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
//                           <Link href = "" target = "_blank">Code</Link>
//                         </button>
//                         <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
//                           <Link href = "" target = "_blank">Demo</Link>
//                         </button>
//                       </div>
//         </div> 
//         <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">

//           <div class="max-w-xl mb-6">

//             <h2 class="font-sans text-3xl sm:mt-0 mt-6 font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
//              Step 2 : Awesome Is Lorem Ipsum
//             </h2>
//             <p class="text-white text-base md:text-lg">Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.

//             </p>
//           </div>
//           <div class="flex items-center space-x-3">
//           <Link   class="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-pink-700 bg-gradient-to-l from-indigo-800 hover:bg-pink-700 hover:bg-gradient-to-r hover:from-indigo-800 rounded-xl font-black"
//      href="/comingsoon">
            
     
//        Know More
  
//     </Link>
//           </div>
//         </div>
//       </div>
//     </div>


// <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//       <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
//         <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
//           <div class="max-w-xl mb-6">

//             <h2 class="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
//              Lorem Ipsum Is Cool.
//             </h2>
//             <p class="text-white text-base md:text-lg"> Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.
//             </p>
//           </div>
//           <div class="flex items-center space-x-3">
//           <Link   class="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-pink-700 bg-gradient-to-l from-indigo-800 hover:bg-pink-700 hover:bg-gradient-to-r hover:from-indigo-800 rounded-xl font-black"
//      href="/comingsoon">
            
     
//        Know More
  
//     </Link>
//           </div>
//         </div>
//         <div class ="bg-gradient-to-b from-black to-gray-800">
//       <Image  src ={polygon} width ={400} height = {400} alt ="hero-image" className = "rounded-md duration-200 hover:scale-110 hover:overflow-hidden"/> 
//       <div className = "flex items-center justify-center">
//                         <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
//                           <Link href = "" target = "_blank">Code</Link>
//                         </button>
//                         <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
//                           <Link href = "" target = "_blank">Demo</Link>
//                         </button>
//                       </div>
//         </div> 
//             </div>
//     </div>


//     <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//       <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
//         <div class ="bg-gradient-to-b from-black to-gray-800">
//       <Image  src ={polygon} width ={400} height = {400} alt ="hero-image" className = "rounded-md duration-200 hover:scale-110 hover:overflow-hidden"/> 
//       <div className = "flex items-center justify-center">
//                         <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
//                           <Link href = "" target = "_blank">Code</Link>
//                         </button>
//                         <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
//                           <Link href = "" target = "_blank">Demo</Link>
//                         </button>
//                       </div>
//         </div> 
//         <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">

//           <div class="max-w-xl mb-6">

//             <h2 class="font-sans text-3xl sm:mt-0 mt-6 font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
//              Step 2 : Awesome Is Lorem Ipsum
//             </h2>
//             <p class="text-white text-base md:text-lg">Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.

//             </p>
//           </div>
//           <div class="flex items-center space-x-3">
//           <Link   class="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-pink-700 bg-gradient-to-l from-indigo-800 hover:bg-pink-700 hover:bg-gradient-to-r hover:from-indigo-800 rounded-xl font-black"
//      href="/comingsoon">
            
     
//        Know More
  
//     </Link>
//           </div>
//         </div>
//       </div>
//     </div>


// <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//       <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
//         <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
//           <div class="max-w-xl mb-6">

//             <h2 class="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
//              Lorem Ipsum Is Cool.
//             </h2>
//             <p class="text-white text-base md:text-lg"> Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.
//             </p>
//           </div>
//           <div class="flex items-center space-x-3">
//           <Link   class="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-pink-700 bg-gradient-to-l from-indigo-800 hover:bg-pink-700 hover:bg-gradient-to-r hover:from-indigo-800 rounded-xl font-black"
//      href="/comingsoon">
            
     
//        Know More
  
//     </Link>
//           </div>
//         </div>
//         <div class ="bg-gradient-to-b from-black to-gray-800">
//       <Image  src ={polygon} width ={400} height = {400} alt ="hero-image" className = "rounded-md duration-200 hover:scale-110 hover:overflow-hidden"/> 
//       <div className = "flex items-center justify-center">
//                         <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
//                           <Link href = "" target = "_blank">Code</Link>
//                         </button>
//                         <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
//                           <Link href = "" target = "_blank">Demo</Link>
//                         </button>
//                       </div>
//         </div> 
//             </div>
//     </div>





//           </div>
//       </div>
//       <div name = "projects" className = "w-full py-8">
//         <div className = "max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full border-gray-500">
//             <div className = "pb-8">
//                 <p className = "text-4xl font-bold text-center mb-5">Projects</p>
//             </div>

//             <div className = "grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0 ">
//                 <div className = "shadow-md shadow-gray-600 rounded-lg">
//                     <div className='overflow-hidden rounded-lg rounded-t-lg'>
//                       <Image src = "/Images/Khaana_Khazana.jpg" height="100" width="400" className = "rounded-md duration-200 hover:scale-110 hover:overflow-hidden" />
//                     </div>

//                     <div className = "bg-gradient-to-b from-black to-gray-800">
//                       <div>
//                         <p className = "text-2xl font-bold text-center border-b-2 py-3">Khaana Khazana</p>
//                       </div>
                    
//                       <div className = "flex items-center justify-center">
//                         <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
//                           <Link href = "" target = "_blank">Code</Link>
//                         </button>
//                         <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
//                           <Link href = "" target = "_blank">Demo</Link>
//                         </button>
//                       </div>
//                     </div>
//                 </div>

//                 <div className = "shadow-md shadow-gray-600 rounded-lg">
//                     <div className='overflow-hidden rounded-lg rounded-t-lg'>
//                       <Image src = "/Images/Khaana_Khazana.jpg" height="100" width="400" className = "rounded-md duration-200 hover:scale-110 hover:overflow-hidden" />
//                     </div>

//                     <div className = "bg-gradient-to-b from-black to-gray-800">
//                       <div>
//                         <p className = "text-2xl font-bold text-center border-b-2 py-3">Khaana Khazana</p>
//                       </div>
                    
//                       <div className = "flex items-center justify-center">
//                         <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
//                           <Link href = "" target = "_blank">Code</Link>
//                         </button>
//                         <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
//                           <Link href = "" target = "_blank">Demo</Link>
//                         </button>
//                       </div>
//                     </div>
//                 </div>

//                 <div className = "shadow-md shadow-gray-600 rounded-lg">
//                     <div className='overflow-hidden rounded-lg rounded-t-lg'>
//                       <Image src = "/Images/Khaana_Khazana.jpg" height="100" width="400" className = "rounded-md duration-200 hover:scale-110 hover:overflow-hidden" />
//                     </div>

//                     <div className = "bg-gradient-to-b from-black to-gray-800">
//                       <div>
//                         <p className = "text-2xl font-bold text-center border-b-2 py-3">Khaana Khazana</p>
//                       </div>
                    
//                       <div className = "flex items-center justify-center">
//                         <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
//                           <Link href = "" target = "_blank">Code</Link>
//                         </button>
//                         <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
//                           <Link href = "" target = "_blank">Demo</Link>
//                         </button>
//                       </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//       </div>
//     </>
  )
}

export default Project
