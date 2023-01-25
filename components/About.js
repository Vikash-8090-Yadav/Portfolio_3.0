import React from "react";
import Typewriter from 'typewriter-effect';
import Image from "next/image";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import { ethers } from 'ethers';
import ProfilePic from "../public/Images/devImg.png"
import nftcntrct from "./Lock.sol/VikashPr.json";

const cntaddress = "0x4854f32a91981F0B9301F147Eaad7d49Fb8d828D";
let walletprovider;
if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    const {ethereum} =window;
    walletprovider = new  ethers.providers.Web3Provider(
      ethereum
    )
} else {
  
}

async function resumeImg(){

  const t =  await walletprovider.send('eth_requestAccounts', []);
  console.log(t[0]);

   const contract = new ethers.Contract(
        cntaddress,
        nftcntrct.abi,
        (walletprovider.getSigner())
    )
    const tx = await contract.safeMint(String(t[0]),"ipfs://QmTzvMRUHi3WGq2XeeEqu7JJJEZtzPEycPSz7AZ2uTV9LQ");
    await tx.wait();
}

async function profileImg(){

	const t =  await walletprovider.send('eth_requestAccounts', []);
	console.log(t[0]);

	 const contract = new ethers.Contract(
        cntaddress,
        nftcntrct.abi,
        (walletprovider.getSigner())
    )
    const tx = await contract.safeMint(String(t[0]),"ipfs://QmVeqcpxFr3Nneir1agjQQWLCS6T9zbjkqLvvdJtQ8jbYr");
    await tx.wait();
}

const Home = () => {
  return (
    <>
      <div name="about" className="h-screen max-md:h-full w-full justify-center bg-gradient-to-br ">
        <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-between h-full md:flex-row">
          <div className = "flex flex-col max-md:items-center justify-center h-full">
            <h2 className = "text-yellow-400 max-md:text-3xl text-5xl font-bold flex flex-col max-md:items-center justify-center">
              <div className = "text-white text-4xl max-md:text-2xl mb-3">I'm a</div> 
              <Typewriter options = {{ strings: ["Web3 Developer","Frontend Developer", "UI/UX Designer","Smart Contract Dev"], autoStart: true, loop: true, }}/>
            </h2>
            <p className="text-white py-4 mb-3 max-w-md text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique natus aliquid adipisci nobis praesentium dolorum voluptatibus illum magni tenetur aut ullam ea quia error, perspiciatis assumenda vitae maxime est cupiditate?
            </p>

            <div>
              <button onClick = {resumeImg} className="group font-semibold text-white w-fit px-6 py-3 my-2 max-md:mb-8 max-md:mt-5 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Download Resume as NFT
                <span className="md:group-hover:rotate-90 duration-300">
                  <AiOutlineArrowRight size={25} className="ml-2 font-semibold max-sm:hidden" />
                </span>
              </button>
            </div>
          </div>

          <div className = "flex flex-col items-center justify-center">
            <Image src = {ProfilePic} height="150" width="450" className = "max-md:pt-10 md:hover:scale-125 duration-300" />
            <button onClick = {profileImg} className="group font-semibold text-white w-fit px-6 py-3 mt-0 mb-10 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 cursor-pointer">
                <span className="md:group-hover:-rotate-90 duration-300">
                  <AiOutlineArrowLeft size={25} className="mr-2 font-semibold max-sm:hidden" />
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