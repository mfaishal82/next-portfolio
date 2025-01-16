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

export default function MainLayout({ children }) {
  const { id } = useAppContext();
  const pathname = usePathname();
  return (
    <>
      <div className="m-0 p-0 h-screen">
        <Header />

        <div className="text-white grid grid-cols-4 mt-0 h-[calc(100vh-60px)] text-[14px]">
          
          {/* Sidebar */}
          { pathname !== "/" ? <div className="border-r-2 border-[#1E2D3D] overflow-auto">
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
          <div className="col-span-3">
            {React.cloneElement(children)}
          </div>

        </div>
        
        <Footer />
      </div>
    </>
  );
}
