import { useAppContext } from "@/context/context";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const { openMenu, setOpenMenu, setProjectActive } = useAppContext();
  const pathname = usePathname();

  return (
    <header className="grid grid-cols-4 m-0 p-0 text-[#607B96] text-[14px] sticky top-0 z-[9999] bg-[#011627] w-full">
      <div className="flex flex-row items-center gap-2 border-r-2 border-b-2 max-sm:border-r-none border-[#1E2D3D] p-3 cursor-default select-none text-[#43D9AD] max-sm:col-span-4">
        muhammad-faisal
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#43D9AD] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2aac85]"></span>
        </span>
      </div>

      {/* desktop */}
      <div className="border-b-2 border-[#1E2D3D] col-span-3 flex flex-row justify-between max-sm:hidden">
        <div className="border-r-2 border-[#1E2D3D] hover:text-white group">
          <Link href="/">
            <div className={`py-2.5 px-5 group-hover:cursor-pointer group-hover:border-b-[3px] group-hover:border-[#FEA55F] ${pathname === "/" ? "border-b-[3px] border-[#FEA55F] text-white" : ""}`}>
              _hello
            </div>
          </Link>
        </div>
        <div className="border-r-2 border-[#1E2D3D] hover:text-white group">
          <Link href="/about-me">
            <div className={`py-2.5 px-5 group-hover:cursor-pointer group-hover:border-b-[3px] group-hover:border-[#FEA55F] ${pathname === "/about-me" ? "border-b-[3px] border-[#FEA55F] text-white" : ""}`}>
              _about-me
            </div>
          </Link>
        </div>
        <div onClick={() => setProjectActive('')} className="border-r-2 border-[#1E2D3D] hover:text-white group">
          <Link href="/projects">
            <div className={`py-2.5 px-5 group-hover:cursor-pointer group-hover:border-b-[3px] group-hover:border-[#FEA55F] ${pathname === "/projects" ? "border-b-[3px] border-[#FEA55F] text-white" : ""}`}>
              _projects
            </div>
          </Link>
        </div>
        <div className="border-l-2 border-[#1E2D3D] group text-[#43D9AD] hover:text-white ml-auto">
          <Link href="/contact-me">
            <div className={`py-2.5 px-5 group-hover:cursor-pointer group-hover:border-b-[3px] group-hover:border-[#FEA55F] ${pathname === "/contact-me" ? "border-b-[3px] border-[#FEA55F] text-white" : ""}`}>
              _contact-me
            </div>
          </Link>
        </div>
      </div>
      {/* mobile */}
      <div onClick={() => setOpenMenu(prev => !prev)} className="absolute top-3 right-3 cursor-pointer sm:hidden">
        {
          !openMenu && 
          <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z" fill="#607B96"/>
          </svg>
        }
        {
          openMenu &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 6.2225L14.2225 0L16 1.7775L9.7775 8L16 14.2225L14.2225 16L8 9.7775L1.7775 16L0 14.2225L6.2225 8L0 1.7775L1.7775 0L8 6.2225Z" fill="#607B96"/>
          </svg>
        }
      </div>
    </header>
  );
}
