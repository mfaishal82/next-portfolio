"use client";
import Header from "./header";
import Sidebar_About from "../aboutMe/sidebar-about";
import Sidebar_Project from "../projects/sidebar-project";
import Sidebar_Contact from "../contact/sidebar-contact";
import Footer from "./footer";
import { usePathname } from "next/navigation";
import { useState } from "react";
import React from 'react';
import { useAppContext } from "@/context/context";
import {FloatingOverlay} from '@floating-ui/react';
import Link from "next/link";

export default function MainLayout({ children }) {
  const { id, openMenu, setOpenMenu } = useAppContext();
  const pathname = usePathname();
  return (
    <>
      <div className="m-0 p-0 h-screen">
        <Header />

        <div className="text-white grid grid-cols-4 max-sm:flex max-sm:flex-col mt-0 h-[calc(100vh-60px)] text-[14px]">
          
          {/* Sidebar */}
          { pathname !== "/" ? <div className="border-r-2 border-[#1E2D3D] max-sm:col-span-4">
                {
                    pathname === "/about-me" ? <Sidebar_About /> : 
                    pathname === "/projects" ? <Sidebar_Project/> :
                    pathname === `/projects/${id}` ? <Sidebar_Project/> :
                    pathname === "/contact-me" ? <Sidebar_Contact/> : null
                }
            </div>
          : 
            <div className="p-3"/>
          }

          {/* Main */}
          <div className="col-span-3 max-sm:col-span-4">
            {React.cloneElement(children)}
          </div>

          {/* Menu for Mobile */}
          {openMenu && 
            <FloatingOverlay>
              <div onClick={ ()=> setOpenMenu(false) } className="sm:hidden relative w-full rounded-b-sm border border-blue-300 h-auto bg-[#011627] text-white mt-10 z-[9999] duration-700 overflow-hidden">
                <Link href={"/"}>
                  <div className={`border-b-2 border-[#1E2D3D] p-3 cursor-default select-none ${pathname === "/" ? "text-[#43D9AD]" : 'text-white'}`}>
                    _hello
                  </div>
                </Link>
                
                <Link href={"/about-me"}>
                  <div className={`border-b-2 border-[#1E2D3D] p-3 cursor-default select-none ${pathname === "/about-me" ? "text-[#43D9AD]" : 'text-white'}`}>
                    _about-me
                  </div>
                </Link>

                <Link href={"/projects"}>
                  <div className={`border-b-2 border-[#1E2D3D] p-3 cursor-default select-none ${pathname === "/projects" ? "text-[#43D9AD]" : 'text-white'}`}>
                    _projects
                  </div>
                </Link>

                <Link href={"/contact-me"}>
                  <div className={`border-b-2 border-[#1E2D3D] p-3 cursor-default select-none ${pathname === "/contact-me" ? "text-[#43D9AD]" : 'text-white'}`}>
                    _contact-me
                  </div>
                </Link>
              </div>
            </FloatingOverlay>
          }
        </div>
        
        <Footer />
      </div>
    </>
  );
}
