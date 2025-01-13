"use client";
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import Sidebar_About from "./aboutMe/sidebar-about";
import Sidebar_Project from "./projects/sidebar-project";
import Sidebar_Contact from "./contact/sidebar-contact";
import Footer from "./footer";

export default function MainLayout({ children }) {
  const pathname = usePathname();
  return (
    <>
      <div className="">
        <Header />

        <div className="text-white grid grid-cols-4 mt-0 h-[calc(100vh-60px)] text-[14px]">
          
          { pathname !== "/" ? <div className="border-r-2 border-[#1E2D3D]">
                {
                    pathname === "/about-me" ? <Sidebar_About/> : 
                    pathname === "/projects" ? <Sidebar_Project/> :
                    pathname === "/contact-me" ? <Sidebar_Contact/> : null
                }
            </div>
          : 
            <div className="p-3"/>
          }

          <div className="col-span-3">{children}</div>

        </div>
        
        <Footer />
      </div>
    </>
  );
}
