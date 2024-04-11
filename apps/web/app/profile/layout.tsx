import React, { ReactNode } from "react";
import Navbar from "../events/components/navbar";
// import Footer from './footer'

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
