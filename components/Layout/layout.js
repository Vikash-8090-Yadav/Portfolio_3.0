
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Navbar from "../Navbar";
import Footer from '../Footer'
import Hero from '../Hero'
import SocialLinks from '../SocialLinks'
import Skills from '../Skills'
import Project from '../Project'
import Contact from '../Contact'
const Layout = ({ children}) => {
  return (
    <>
    <div className = "bg-gradient-to-br from-[#690a4a] via-[#100e2d] to-[#08624b]">
    <Navbar/>
    <Hero />
      <SocialLinks />
      <Skills />
      <Project />
      <Contact />
    {children}
    <Footer />
    </div>
    </>
  );
}
export default Layout;
