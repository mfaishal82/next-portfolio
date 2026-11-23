"use client";

import IconFramework from "@/components/projects/iconFramwork";
import { useAppContext } from "@/context/context";
import Link from "next/link";
import Image from "next/image";

/**
 * Project grid.
 *
 * Kept as a client component only for the sidebar's active-project highlight;
 * the project list itself is fetched on the server and passed in as a prop so
 * every project title, description and link is present in the initial HTML.
 */
export default function ProjectsGrid({ projects }) {
  const { setId, setProjectActive } = useAppContext();

  return (
    <div className="w-full flex flex-row flex-wrap gap-5 max-sm:gap-10 p-8 max-sm:px-0 pb-16 items-start justify-center text-[14px] border-[#1E2D3D] text-[#607B96] min-h-screen bg-[#011627]">
      {projects.map((project, index) => (
        <article
          key={project.slug || index}
          className=" flex flex-col group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
        >
          <h2 className="text-[#607B96] mb-2 font-mono tracking-wide max-sm:self-center group-hover:text-[#43D9AD] transition-colors font-normal">
            project-{project.type} (// _){project.title}
          </h2>
          <div className="w-[380px] max-sm:w-screen h-[325px] max-sm:h-[325px] rounded-[15px] bg-[#011221] border border-[#1C2B3A] overflow-hidden shadow-lg">
            <div className={`rounded-t-[15px] h-[50%] relative overflow-hidden ${project.image?.[0] ? "bg-white" : "bg-[#011221]"}`}>
              {project.image?.[0] ? (
                <Image
                  src={project.image[0]}
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  alt={`Screenshot of ${project.title}`}
                  fill={true}
                  sizes="(max-width: 576px) 100vw, 576px"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 border-b border-dashed border-[#1E2D3D] text-center">
                  <span className="font-mono text-[11px] text-[#607B96]">// screenshot-not-available</span>
                  <span className="font-mono text-[10px] text-[#435c73]">no capture yet for this project</span>
                </div>
              )}
              <IconFramework project={project} />
            </div>

            <div className="p-6 bg-[#011221] rounded-b-[15px] flex flex-col justify-between h-[50%]">
              <p className="text-[#607B96] line-clamp-3">{project.description}</p>
              <div className="flex flex-row justify-between mt-4 gap-3">
                <Link href={`/projects/${project.slug}`}>
                  <button
                    onClick={() => { setId(index); setProjectActive(project.title); }}
                    className="transition-all duration-300 bg-[#1C2B3A] text-white hover:bg-[#43D9AD] hover:text-[#011627] text-[14px] py-2 px-4 rounded-lg font-medium"
                  >
                    project-details
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
        </article>
      ))}
    </div>
  );
}
