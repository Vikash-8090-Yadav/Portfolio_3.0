import React, {useState} from 'react'
import Link from 'next/link';
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <>
            <div className = "flex justify-between items-center w-full h-20 fixed px-6">

                <h1 className = "text-3xl font-signature ml-2">Vikash Kumar Yadav</h1>

                <ul className = "hidden md:flex">
                    <li className = "px-4 cursor-pointer font-medium md:hover:text-gray-400 md:hover:scale-125 duration-500">
                        <Link href = "/">Home</Link>
                    </li>
                    <li className = "px-4 cursor-pointer font-medium md:hover:text-gray-400 md:hover:scale-125 duration-500">Skills</li>
                    <li className = "px-4 cursor-pointer font-medium md:hover:text-gray-400 md:hover:scale-125 duration-500">Project</li>
                    <li className = "px-4 cursor-pointer font-medium md:hover:text-gray-400 md:hover:scale-125 duration-500">Experience</li>
                </ul>

                <button class="bg-blue-500 text-white px-5 py-2 rounded-md text-xl font-bold mr-6">Connect Wallet</button>

                <div onClick={() => setNav(!nav)} className = "cursor-pointer pr-4 z-10 text-gray-400 md:hidden">
                    {
                        nav ? <FaTimes size = {30} /> : <FaBars size = {30} />
                    }
                </div>

                {nav && (
                    <ul className = "flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-[#690a4a] via-[#100e2d] to-[#08624b]">
                        <li className = "px-4 cursor-pointer py-6 text-2xl">
                            <Link href = "/">Home</Link>
                        </li>
                        <li className = "px-4 cursor-pointer py-6 text-2xl">Skills</li>
                        <li className = "px-4 cursor-pointer py-6 text-2xl">Project</li>
                        <li className = "px-4 cursor-pointer py-6 text-2xl">Experience</li>
                        <li className = "px-4 cursor-pointer py-6 text-2xl">Contact</li>
                    </ul>
                )}
            </div>
        </>
    );
};

export default Navbar

