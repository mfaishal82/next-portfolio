"use client";
import Header from "./header";
import Sidebar_About from "../aboutMe/sidebar-about";
import Sidebar_Project from "../projects/sidebar-project";
import Sidebar_Contact from "../contact/sidebar-contact";
import Footer from "./footer";
import { usePathname } from "next/navigation";
import React from 'react';
import { useAppContext } from "@/context/context";
import MobileMenu from "./mobileMenu";

export default function MainLayout({ children }) {
  const { id, openMenu, setOpenMenu } = useAppContext();
  const pathname = usePathname();
  return (
    <>
      <div className="container mx-auto max-w-10xl min-h-screen flex flex-col w-full px-0">
        <Header />

        <div className="flex-1 text-white grid grid-cols-4 max-sm:flex pb-14 max-sm:flex-col mt-0 text-[14px]">

          {/* Sidebar */}
          { pathname !== "/" ? <div className="border-r-2 border-[#1E2D3D] max-sm:border-none max-sm:col-span-4">
                {
                    pathname === "/about-me" ? <Sidebar_About /> :
                    pathname === "/contact-me" ? <Sidebar_Contact/> :
                    pathname === "/projects" || `/projects/${id}` ? <Sidebar_Project/> :
                    null
                    // pathname === `/projects/${id}` ? <Sidebar_Project/> :
                }
            </div>
          :
            <div className="p-3"/>
          }

          {/* Main */}
          <div className="col-span-3 max-sm:col-span-4 z-0">
            {children}
          </div>

          {/* Menu for Mobile */}
          {openMenu &&
            <MobileMenu setOpenMenu={setOpenMenu} />
          }
        </div>

        <Footer />
      </div>
    </>
  );
}
