
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Navbar from "../Navbar";
import Footer from '../Footer'
const Layout = ({ children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer />
    </>
  );
}
export default Layout;
