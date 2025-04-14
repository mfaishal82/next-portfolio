"use client";
import { useAppContext } from "@/context/context";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProjectDetail() {
  const params = useParams();
  const id = Number(params.id);
  // const slug = params.slug;
  const { listProjects } = useAppContext();
  const [project, setProject] = useState({});
  const router = useRouter();
  // console.log(id)

  useEffect(() => {
    for (let i = 0; i < listProjects.length; i++) {
      if (i === id) {
        if (isNaN(id) || id < 0 || id >= listProjects.length) {
          router.push('/projects');
        } else {
          setProject(listProjects[id]);
        }
      }
    }
  }, [id, listProjects]);

  const img = project.image;

  return (
    <>
      {/* header */}
      <div className="w-full grid grid-cols-2 text-[14px] border-b-2 border-[#1E2D3D] text-[#607B96]">
        <div className="">
          <div className="p-2 pr-3 border-r-2 border-[#1E2D3D] w-[50%] flex flex-row justify-between max-sm:col-span-2 max-sm:w-full">
            _{project.title}
            <Link href="/projects">
              <span className="select-none cursor-default">x</span>
            </Link>
          </div>
        </div>
      </div>
      {/* end header */}

      {/* body */}
      <div className="flex flex-col gap-1 max-sm:gap-1 flex-wrap p-0 pt-2 pb-7 text-[14px] border-[#1E2D3D] text-[#607B96] h-full w-full">
        <h1 className="p-4 max-sm:p-1.5 py-2 cursor-default select-none">
          {" "}
          // Project {project.type} / _{project.title} / {project.framework}{" "}
        </h1>
        <div className="w-full p-4 pb-0 max-sm:p-0.5 rounded-xl max-sm:relative max-sm:z-0">
          <Swiper
            navigation={true}
            // loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {img && img.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={`${image}`} alt={`${project.title}`} className="rounded-xl" />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className="w-full mt-1 p-6 bg-[#011221] rounded-sm max-sm:mt-3 border-t border-[#1E2D3D] space-y-4">
          {/* Project Info Section */}
          <div>
            <div className="space-y-3">
              {/* Title & Framework */}
              <div className="flex flex-row flex-wrap items-center space-x-2 text-[#43D9AD] font-mono">
                <div className="flex flex-row flex-wrap items-center">
                  <span className="text-[#607B96]">*/</span>
                  <h2 className="text-lg ml-1.5">_{project.title}</h2>
                </div>
                <div className="flex flex-row flex-wrap items-center">
                  <span className="text-[#607B96]">/</span>
                  <span>{project.framework}</span>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-2 pl-4 border-l-2 border-[#1E2D3D]">
                {/* Date */}
                <div className="flex items-center space-x-2">
                  <span className="text-[#607B96]">•</span>
                  <span className="text-[#E99287]">{project.date}</span>
                </div>

                {/* Description */}
                <div className="flex space-x-2 text-white">
                  <span className="text-[#607B96]">•</span>
                  <p className="leading-relaxed">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex items-center space-x-2">
                  <span className="text-[#607B96]">•</span>
                  <span className="text-[#607B96] whitespace-nowrap">tech-stack:</span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.split(',').map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-xs bg-[#1C2B3A] text-[#43D9AD] rounded-md cursor-default select-none"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub Button */}
            <div className="mt-6 flex items-center space-x-4">
              <a 
                href={`${project.url}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-[#1C2B3A] hover:bg-[#43D9AD] text-white hover:text-[#011221] px-4 py-2 rounded-md transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span className="font-medium">View on GitHub</span>
              </a>
              
              {project.demoUrl && (
                <a 
                  href={`${project.demoUrl}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1C2B3A] hover:bg-[#FEA55F] text-white hover:text-[#011221] px-4 py-2 rounded-md transition-all duration-300"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
