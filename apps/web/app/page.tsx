"use client";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { Spotlight } from "@repo/ui/components/ui/spotlight";
import { BentoGrid, BentoGridItem } from "@repo/ui/components/ui/bento-grid";
import { BackgroundBeams } from "@repo/ui/components/ui/background-beams";
import { Button } from "@repo/ui/components/ui/hero-button";
import { Compass, Download, Mail } from "lucide-react";
import Navbar from "./navbar";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
);
const items = [
  {
    title: "Events",
    description:
      "Stay updated and engaged with campus activities and happenings.",
    header: <Skeleton />,
  },
  {
    title: "Classroom",
    description: "Organize your academic life with ease and efficiency.",
    header: <Skeleton />,
  },
  {
    title: "Merchandise",
    description: "Discover and shop for unique event merchandise.",
    header: <Skeleton />,
  },
  {
    title: "Placement & Alumni Support",
    description:
      "Stay informed about campus placements and receive support from alumni for career opportunities, networking, and advice.",
    header: <Skeleton />,
  },
  {
    title: "Cafeteria",
    description: "Order food conveniently and skip the wait.",
    header: <Skeleton />,
  },
];

export default function Page() {
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isNavbarHidden = currentScrollPos > 50; // You can adjust the value as needed

      setHideNavbar(isNavbarHidden);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="bg-black">
      {/* Navbar */}
      <div
        className={`fixed top-0 z-10 w-full transition-opacity ${hideNavbar ? "opacity-0 -translate-y-full" : ""}`}
      >
        <Navbar />
      </div>
      {/* Hero Section */}
      <div className="relative overflow-hidden h-[40rem] flex md:items-center md:justify-center antialiased w-full bg-black/[0.96] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]">
        <Spotlight className="left-60 -top-20" fill="white" />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black/[0.96] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className=" p-4 max-w-6xl  mx-auto relative z-10  w-full pt-20 md:pt-0 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            {/* Elevate Your Campus Experience */}
            Supercharge Your Campus Life!
          </h1>
          <p className="mt-4 font-normal text-lg text-neutral-300 max-w-4xl text-center mx-auto">
            Stay updated on events, connect with alumni, order cafeteria meals,
            ace placements, organize academics, and shop event merchandise - all
            in one solution!
          </p>
          <div className="mt-4 space-x-4">
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-sm p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-sm">
                <span className="absolute inset-0 rounded-sm bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex items-center z-10 rounded-sm bg-zinc-950 py-1.5 px-8 text-sm ring-1 ring-white/10 ">
                <span>Start Exploring</span>
                <Compass className="pl-2" />
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
            <Button
              variant={"outline"}
              size={"lg"}
              className="py-1.5 px-8 h-10 rounded-sm text-white"
            >
              Download App <Download className="pl-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div>
        <div className="p-4 max-w-6xl mx-auto relative z-10 w-full pb-12">
          <h1 className="text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Check Out What We've Got!
          </h1>
          <p className="mt-2 font-normal text-lg text-neutral-300 max-w-4xl text-center mx-auto">
            Revamp your campus experience!
          </p>
        </div>
        <BentoGrid className="max-w-5xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>

      {/* Contact Us */}
      <div className="h-[30rem] w-full rounded-md bg-black relative flex items-center justify-center antialiased">
        <div className="flex justify-between items-center max-w-7xl space-x-40">
          <div className="p-4 max-w-3xl">
            <h1 className="relative z-10 text-2xl font-extrabold  bg-clip-text  text-neutral-50 ">
              Be First in Line for the Fun!
            </h1>
            <p></p>
            <p className="text-neutral-300 my-2 text-base relative z-10">
              Don't miss out on the action! Join our waitlist for early access
              and cool perks. Get ready to level up your campus life!
            </p>
          </div>

          <button className="p-[2px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-sm" />
            <div className="text-lg flex justify-center items-center px-8 py-3  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              <Mail className="pr-2" /> Subscribe to our newsletter
            </div>
          </button>
        </div>
        <BackgroundBeams />
      </div>

      {/* Footer */}
      <footer>
        <div className="bg-transparent w-full mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Cliff
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}
