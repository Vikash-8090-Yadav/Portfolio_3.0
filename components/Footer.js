import React from "react";
import {SiLeetcode} from "react-icons/si";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";

const Footer = () => {
  const links = [
    {
      id: 1,
      child: (
        <><SiLeetcode size={25} /></>
      ),
      href: "https://leetcode.com",
    },
    {
      id: 2,
      child: (
        <><FaLinkedin size={25} /></>
      ),
      href: "https://linkedin.com",
    },
    {
      id: 3,
      child: (
        <><FaTwitter size={25} /></>
      ),
      href: "https://twitter.com",
    },
    {
      id: 4,
      child: (
        <><FaGithub size={25} /></>
      ),
      href: "https://github.com",
    },
    {
      id: 5,
      child: (
        <><HiOutlineMail size={25} /></>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 6,
      child: (
        <><BsFillPersonLinesFill size={25} /></>
      ),
      href: "/resume.pdf",
      download: true,
    },
  ];

  return (
    <div>
      <ul className="flex justify-center bg-gray-900">
        {links.map(({ id, child, href, style, download }) => (
          <li key = {id} className = {"flex justify-between p-4" + " " + style}>
            <a href = {href} className = "flex justify-between" download = {download} target = "_blank">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;