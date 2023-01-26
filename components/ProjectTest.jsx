import React from 'react'
import Image from "next/image";
import Link from "next/link";
import polygon from '../public/Images/resOrg.jpg'
import styled from "styled-components";
import SalDapp from '../public/Images/SalDapp.png'
import Voting from '../public/Images/Voting.png'
import Portfolio from '../public/Images/port.png'
const ProjectT = () => {

  return (
    <>
    <div name = "projects">
<div class="w-full my-20 z-50   ">
<div className = "pb-8">
            <p className = "text-4xl font-bold text-center mb-5 text-white">Projects</p>
          </div>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class=" px-12  rounded-t-lg flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div class =" imgProject Projectblock shadow-white shadow-2xl bg-gradient-to-b from-black to-gray-800">
        <div className='overflow-hidden rounded-t-lg'>
      <Image  src ={SalDapp} width ={400} height = {400} alt ="hero-image" className = "rounded-t-md duration-200 hover:scale-110 hover:overflow-hidden"/> 
      </div>
      <div className = "flex items-center justify-center">
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
                          <Link href = "https://github.com/Vikash-8090-Yadav/HTM_SAL-dApp" target = "_blank">Code</Link>
                        </button>
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
                          <Link href = "http://sal-dapp.vercel.app/" target = "_blank">Demo</Link>
                        </button>
                      </div>
        </div> 
        <MyDiv class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">

          <div class="mgpr ProjectText max-w-xl lg:my-12 mb-6">

            <h2 class="text-yellow-400 max-md:text-3xl text-5xl font-bold flex flex-col max-md:items-center justify-center sm:leading-none max-w-lg mb-6">
             Salary Dapp
            </h2>
            <div className="bn">
            <p class="text-white text-base md:text-lg">Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.

            </p>
            </div>
          </div>
          <div class="flex bt items-center space-x-3">
          <Link   class="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-pink-700 bg-gradient-to-l from-indigo-800 hover:bg-pink-700 hover:bg-gradient-to-r hover:from-indigo-800 rounded-xl font-black"
     href="/comingsoon">
            
     
       Know More
  
    </Link>
          </div>
        </MyDiv>
      </div>
    </div>


<MyMaindiv className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class=" px-12 rounded-t-lg flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <Wrapper class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
        <div className ="mgpr">
          <div class="max-w-xl mb-6">

            <h2 className="rightTet text-yellow-400 max-md:text-3xl text-5xl font-bold flex flex-col max-md:items-center justify-center sm:leading-none max-w-lg mb-6">
              Voting Dapp
            </h2>
            <p className="rightSubText text-white text-base md:text-lg"> A Blockchain-based voting system that aims to address many of the problems faced in today’s elections and promises new opportunities, from securing transparency to making the voting process more accessible, affordable, and safe.

            </p>
          </div>
          <div class=" bt flex items-center space-x-3">
          <Link   class="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-pink-700 bg-gradient-to-l from-indigo-800 hover:bg-pink-700 hover:bg-gradient-to-r hover:from-indigo-800 rounded-xl font-black"
     href="/comingsoon">
            
     
       Know More
  
    </Link>
          </div>
          </div>
        </Wrapper>
        <div class =" imgProject Projectblock shadow-white shadow-2xl bg-gradient-to-b from-black to-gray-800">
         <div className='overflow-hidden rounded-t-lg'>
      <Image  src ={Voting} width ={400} height = {400} alt ="hero-image" className = "rounded-md duration-200 hover:scale-110 hover:overflow-hidden"/> 
      </div>
      <div className = "flex items-center justify-center">
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
                          <Link href = "https://github.com/Vikash-8090-Yadav/VOTE_3.0" target = "_blank">Code</Link>
                        </button>
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
                          <Link href = "https://vote-3-0-1c0aa9.spheron.app/" target = "_blank">Demo</Link>
                        </button>
                      </div>
        </div> 
            </div>
    </MyMaindiv>

    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class=" px-12 flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div class =" imgProject Projectblock shadow-white shadow-2xl bg-gradient-to-b from-black to-gray-800">
         <div className='overflow-hidden rounded-t-lg'>
      <Image  src ={polygon} width ={400} height = {400} alt ="hero-image" className = "rounded-md duration-200 hover:scale-110 hover:overflow-hidden"/> 
      </div>
      <div className = "flex items-center justify-center">
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
                          <Link href = "https://github.com/Vikash-8090-Yadav/Future_readyTalent" target = "_blank">Code</Link>
                        </button>
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
                          <Link href = "https://bafybeicxv2yoateffi4q2pvszdla5nc4qq7vvipnjt6q3b45pxjr2qlngm.ipfs.sphn.live/" target = "_blank">Demo</Link>
                        </button>
                      </div>
        </div> 
        <MyDiv class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">

          <div class="mgpr ProjectText max-w-xl mb-6">

            <h2 class="text-yellow-400 max-md:text-3xl text-5xl font-bold flex flex-col max-md:items-center justify-center sm:leading-none max-w-lg mb-6">
            Cu-Restuarant
            </h2>
            <p class="text-white text-base md:text-lg">Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.

            </p>
          </div>
          <div className="bt flex items-center space-x-3">
          <Link   class="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-pink-700 bg-gradient-to-l from-indigo-800 hover:bg-pink-700 hover:bg-gradient-to-r hover:from-indigo-800 rounded-xl font-black"
     href="/comingsoon">
            
     
       Know More
  
    </Link>
          </div>
        </MyDiv>
      </div>
    </div>


<MyMaindiv className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="px-12 flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <Wrapper class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
        <div className ="mgpr">
          <div class="max-w-xl mb-6">

            <h2 class="text-yellow-400 max-md:text-3xl text-5xl font-bold flex flex-col max-md:items-center justify-center sm:leading-none max-w-lg mb-6">
              Decntralised Portfolio
            </h2>
            <p class="text-white text-base md:text-lg"> Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.
            </p>
          </div>
          <div class="bt flex items-center space-x-3">
          <Link   class="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-pink-700 bg-gradient-to-l from-indigo-800 hover:bg-pink-700 hover:bg-gradient-to-r hover:from-indigo-800 rounded-xl font-black"
     href="/comingsoon">
            
     
       Know More
  
    </Link>
          </div>
          </div>
        </Wrapper>
        <div class =" imgProject Projectblock shadow-white shadow-2xl bg-gradient-to-b from-black to-gray-800">
         <div className='overflow-hidden rounded-t-lg'>
      <Image  src ={Portfolio} width ={500} height = {500} alt ="hero-image" className = "rounded-md duration-200 hover:scale-110 hover:overflow-hidden"/> 
      </div>
      <div className = "flex items-center justify-center">
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl border-r-2">
                          <Link href = "" target = "_blank">Code</Link>
                        </button>
                        <button className = "w-1/2 px-6 py-3 duration-200 hover:scale-110 text-xl">
                          <Link href = "https://vikash-portfolio-3-0.vercel.app/" target = "_blank">Demo</Link>
                        </button>
                      </div>
        </div> 
            </div>
    </MyMaindiv>





          </div>
      </div>
    </>
  )
}

export default ProjectT


const MyDiv = styled.div`
  @media (max-width: 768px) {
    div.mgpr{
      overflow-hidden;
      word-wrap:break-word
      
       margin-top:42px;
    }
    h2.text-yellow-400{
      display: none;
      margin-right:9rem;
    }
     p.text-white{
      display: none;
      overflow-hidden
      word-wrap:break-word
      width:100%;
      margin-left:1px;
     }
        div.bt{
      display: none;
    }

  }
  @media (max-width: 1022px) {
    div.bt{
      display: none;
    }
    div.mgpr{
      ;
      margin-top:42px;
      
    }
    h2.text-yellow-400{
      margin-left:12rem;
    }
    p.text-white{

      max-width:100%;
      margin-left:62px;
     }
  }
   @media (max-width: 1168px) {
    margin-left:1.6rem;
  }
`;


const Wrapper = styled.div`
@media (max-width: 768px) {
    div.mgpr{
      max-width:100%;
       margin-top:42px;
       margin-left:-73px;
    }
    h2.text-yellow-400{
      display: none;
      margin-right:2px;
    }
     p.text-white{
      display: none;
      width:100%;
      margin-left:-19px;
     }
        div.bt{
      display: none;
    }

  }
  @media (max-width: 1022px) {
    div.bt{
      display: none;
    }
    div.mgpr{
      margin-top:42px;
    }
    h2.text-yellow-400{
      margin-left:5rem;
    }
    p.text-white{
      margin-left:4rem;
     }
  }
   @media (max-width: 1168px) {
    margin-left:1.6rem;
  }

`;


const MyMaindiv = styled.div`
  @media (max-width: 1022px) {
    margin-top:-149px;
    }
`;

// const MyDiv = styled.div`
//   /* Wrapping the text on small screens */
//   @media (max-width: 768px) {
//     div.mgpr {
//       margin-left:-42px;
//             margin-top: 42px;
//     }
//     h2.text-yellow-400 {
//       margin-right: 9rem;
//     }
//     p.text-white {
//       overflow: hidden;
//       word-wrap: break-word;
//       width: 100%;
//       margin-left: 1px;
//     }
//     div.bt {
//       display: none;
//     }
//     div.bn{
//       color:red;
//     }
//   }

//   /* Wrapping the text on medium screens */
//   @media (max-width: 1022px) {
//     div.bt {
//       display: none;
//     }
//     div.mgpr {
//       margin-top: 42px;
//     }
//     h2.text-yellow-400 {
//       margin-left: 12rem;
//     }
//     p.text-white {
//       max-width: 100%;
//       margin-left: 62px;
//     }
//   }

//   /* Wrapping the text on large screens */
//   @media (max-width: 1168px) {
//     margin-left: 1.6rem;
//   }
// `;

// const Wrapper = styled.div`
//   /* Wrapping the text on small screens */
//   @media (max-width: 768px) {
//     div.mgpr {
//       max-width: 100%;
//       margin-top: 42px;
//       margin-left: -73px;
//     }
//     h2.text-yellow-400 {
//       margin-right: 2px;
//     }
//     p.text-white {
//       width: 100%;
//       margin-left: -19px;
//     }
//     div.bt {
//       display: none;
//     }
//   }

//   /* Wrapping the text on medium screens */
//   @media (max-width: 1022px) {
//     div.bt {
//       display: none;
// }
// div.mgpr {
// margin-top: 42px;
// }
// h2.text-yellow-400 {
// margin-left: 5rem;
// }
// p.text-white {
// margin-left: 4rem;
// }
// }

// /* Wrapping the text on large screens */
// @media (max-width: 1168px) {
// margin-left: 1.6rem;
// }
// `;

