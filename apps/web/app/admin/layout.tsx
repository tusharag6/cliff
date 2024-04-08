import React, { ReactNode } from "react";
import { Sidebar } from "./components/sidebar";
import Navbar from "./components/navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="relative">
        <div className="absolute left-0 top-0 h-full min-h-screen md:w-56 lg:w-72">
          <Sidebar />
        </div>
        <div className="flex flex-col md:ml-56 lg:ml-72">
          <Navbar />
          <main className="">{children}</main>
        </div>
      </div>
    </>
  );
}
