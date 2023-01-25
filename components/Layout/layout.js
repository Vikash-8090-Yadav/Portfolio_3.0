
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Navbar from "../Navbar";
import Footer from '../Footer'
import About from '../About'
import SocialLinks from '../SocialLinks'
import Skills from '../Skills'
import Project from '../Project'
import Contact from '../Contact'
import GoToTop from "../GoToTop";
const Layout = ({ children}) => {
  return (
    <>
      <div>
        <GoToTop/>
        <Navbar/>
        <About />
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
