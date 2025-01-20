import {FloatingOverlay} from '@floating-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as motion from "motion/react-client"
import { useAppContext } from '@/context/context';

export default function MobileMenu({ setOpenMenu }) {
    const { setProjectActive } = useAppContext();
    const pathname = usePathname();
    
    return(
        <>
        <FloatingOverlay>
            <motion.div
                // style={ball}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.1,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >
              <div onClick={ ()=> setOpenMenu(false) } className="sm:hidden relative w-full rounded-b-sm h-full bg-[#011627] text-white mt-10 z-auto overflow-hidden">
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
                  <div onClick={ ()=> setProjectActive('') } className={`border-b-2 border-[#1E2D3D] p-3 cursor-default select-none ${pathname === "/projects" ? "text-[#43D9AD]" : 'text-white'}`}>
                    _projects
                  </div>
                </Link>

                <Link href={"/contact-me"}>
                  <div className={`border-b-2 border-[#1E2D3D] p-3 cursor-default select-none ${pathname === "/contact-me" ? "text-[#43D9AD]" : 'text-white'}`}>
                    _contact-me
                  </div>
                </Link>
              </div>
            </motion.div>
        </FloatingOverlay>
        </>
    )
}