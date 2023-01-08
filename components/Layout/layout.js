
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Navbar from "../Navbar";
const Layout = ({ children}) => {
  return (
    <>
    <Navbar/>
    {children}
    </>
  );
}
export default Layout;
