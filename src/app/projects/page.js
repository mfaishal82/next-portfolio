'use client'
import IconFramework from "@/components/projects/iconFramwork";
import { useAppContext } from "@/context/context";
import Link from "next/link";

export default function Page() {
  const { listProjects, setId, setProjectActive } = useAppContext()

  return (
    <>
      {/* header */}
      <div className="grid grid-cols-2 text-[14px] border-b-2 border-[#1E2D3D] text-[#607B96]">
        <div className="">
          <div className="p-2 pr-5 border-r-2 border-[#1E2D3D] w-[200px] flex flex-row justify-between">
            list-projects
            <span className="select-none cursor-default">x</span>
          </div>
        </div>
      </div>
      {/* end header */}

      {/* body */}
      <div className="flex flex-row flex-wrap gap-5 p-5 pb-16 items-center justify-center text-[14px] border-[#1E2D3D] text-[#607B96] h-full">
        {/* list project */}
        {listProjects.map((project, index) => (
          <div key={index} className="flex flex-col hover:scale-105 hover:duration-500 group">
            <div className="group-hover:text-[#43D9AD] max-sm:self-center">project-{project.type} // _{project.title}</div>
            <div className="w-[370px] h-[315px] rounded-[15px] bg-[#011221] border border-[#1C2B3A] grid grid-rows-2 ">
              <div className="bg-white rounded-t-[15px] relative">
                <img src={`${project.image[0]}`} className="bg-contain rounded-t-[15px]" loading="eager" />
                <IconFramework project={project} />
              </div>

              <div className="p-8 z-[10] bg-[#011221] rounded-b-[15px] flex flex-col justify-between h-full">
                {(project.description).substring(0, 100)}
                <br />
                <div className="flex flex-rows justify-between">
                  <Link href={`projects/${index}`} >
                    <button onClick={() => {setId(index); setProjectActive(project.title)}} className="mt-3 hover:duration-500 bg-[#1C2B3A] text-white hover:bg-[#607B96] hover:text-[#1E2D3D] text-[14px] py-1 px-3 rounded-md">
                      view-project
                    </button>
                  </Link>
                  <a href={`${project.url}`} target="_blank">
                    <button className="mt-3 hover:duration-500 bg-[#1C2B3A] text-white hover:bg-[#607B96] hover:text-[#1E2D3D] text-[14px] py-1 px-3 rounded-md">
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
