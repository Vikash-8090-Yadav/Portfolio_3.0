import React, {useState} from 'react'
import {Link} from 'react-scroll';
import {FaBars, FaTimes} from 'react-icons/fa'
import { useWeb3Modal, Web3Button, Web3NetworkSwitch } from '@web3modal/react'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [navBar, setNavBar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);
    
    const links = [
        {
            id: 1,
            link: "hero",
        },
        {
            id: 2,
            link: "skills",
        },
        {
            id: 3,
            link: "projects",
        },
        {
            id: 4,
            link: "contact",
        },
    ]
    return (
        <>
            <div className = {navBar ? 'navbar active' : 'navbar'}>
                <h1 className = "text-3xl font-signature ml-2">Vikash Kumar Yadav</h1>

                <ul className = "hidden md:flex">
                    {links.map(({id, link}) => (
                        <li key = {id} className = "px-4 cursor-pointer font-medium md:hover:text-gray-400 md:hover:scale-125 duration-500 capitalize">
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>
                
                <Web3Button class="text-white  rounded-md text-xl font-bold mr-6 height-100" balance="show" icon="hide" label="Connect Wallet" /> 

                <div onClick={() => setNav(!nav)} className = "cursor-pointer pr-4 z-10 text-gray-400 md:hidden">
                    {
                        nav ? <FaTimes size = {30} /> : <FaBars size = {30} />
                    }
                </div>

                {nav && (
                    <ul className = "flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-[#690a4a] via-[#100e2d] to-[#08624b]">
                    {links.map(({id, link}) => (
                        <li key = {id} className = "px-4 cursor-pointer py-6 text-2xl capitalize">
                            <Link onClick = {() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Navbar

