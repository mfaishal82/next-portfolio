"use client"
import { useEffect } from "react";
import IconFramework from "@/components/projects/iconFramwork";
import { useAppContext } from "@/context/context";
import Link from "next/link";

export default function Page() {
  useEffect(() => {
    document.title = "Projects - Muhammad Faisal";
  }, []);

  const { listProjects, setId, setProjectActive } = useAppContext()

  return (
    <>
      {/* header */}
      <div className="w-full grid grid-cols-2 text-[14px] border-b-2 border-[#1E2D3D] text-[#607B96] bg-[#011627]">
        <div className="">
          <div className="p-3 py-2 pr-6 border-r-2 border-[#1E2D3D] w-[220px] flex flex-row justify-between items-center hover:bg-[#1E2D3D] transition-colors">
            <span className="font-medium">list-projects</span>
            <Link href="/" className="hover:text-[#d94343] transition-colors">
              <span className="cursor-pointer text-[14px]">x</span>
            </Link>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="w-full flex flex-row flex-wrap gap-5 p-8 max-sm:px-0 pb-16 items-start justify-center text-[14px] border-[#1E2D3D] text-[#607B96] min-h-screen bg-[#011627]">
        {listProjects.map((project, index) => (
          <div key={index} className=" flex flex-col group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <div className="text-[#607B96] mb-2 font-mono tracking-wide max-sm:self-center group-hover:text-[#43D9AD] transition-colors">
              project-{project.type} // _{project.title}
            </div>
            <div className="w-[380px] max-sm:w-screen h-[325px] max-sm:h-[310px] rounded-[15px] bg-[#011221] border border-[#1C2B3A] overflow-hidden shadow-lg">
              <div className="bg-white rounded-t-[15px] h-[50%] relative overflow-hidden">
                <img 
                  src={`${project.image[0]}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  loading="eager" 
                  alt={project.title}
                />
                <IconFramework project={project} />
              </div>

              <div className="p-6 bg-[#011221] rounded-b-[15px] flex flex-col justify-between h-[50%]">
                <p className="text-[#607B96] line-clamp-3">{project.description}</p>
                <div className="flex flex-row justify-between mt-4 gap-3">
                  <Link href={`projects/${project.slug}`}>
                    <button 
                      onClick={() => {setId(index); setProjectActive(project.title)}} 
                      className="transition-all duration-300 bg-[#1C2B3A] text-white hover:bg-[#43D9AD] hover:text-[#011627] text-[14px] py-2 px-4 rounded-lg font-medium"
                    >
                      view-project
                    </button>
                  </Link>
                  <a href={`${project.url}`} target="_blank" rel="noopener noreferrer">
                    <button className="transition-all duration-300 bg-[#1C2B3A] text-white hover:bg-[#43D9AD] hover:text-[#011627] text-[14px] py-2 px-4 rounded-lg font-medium">
                      view-github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
