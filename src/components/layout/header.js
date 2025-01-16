import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="grid grid-cols-4 m-0 p-0 text-[#607B96] text-[14px] sticky top-0 z-[9999] bg-[#011627] w-full">
      <div className="border-r-2 border-b-2 border-[#1E2D3D] p-3 cursor-default select-none text-[#43D9AD]">
        muhammad-faisal
      </div>
      <div className="border-b-2 border-[#1E2D3D] col-span-3 flex flex-row justify-between">
        <div className="border-r-2 border-[#1E2D3D] hover:text-white group">
          <a href="/">
            <div className={`py-2.5 px-5 group-hover:cursor-pointer group-hover:border-b-[3px] group-hover:border-[#FEA55F] ${pathname === "/" ? "border-b-[3px] border-[#FEA55F] text-white" : ""}`}>
              _hello
            </div>
          </a>
        </div>
        <div className="border-r-2 border-[#1E2D3D] hover:text-white group">
          <Link href="/about-me">
            <div className={`py-2.5 px-5 group-hover:cursor-pointer group-hover:border-b-[3px] group-hover:border-[#FEA55F] ${pathname === "/about-me" ? "border-b-[3px] border-[#FEA55F] text-white" : ""}`}>
              _about-me
            </div>
          </Link>
        </div>
        <div className="border-r-2 border-[#1E2D3D] hover:text-white group">
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
    </header>
  );
}
