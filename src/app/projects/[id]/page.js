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

export default function ProjectDetail() {
  const params = useParams();
  const id = Number(params.id);
  // const slug = params.slug;
  const { listProjects } = useAppContext();
  const [project, setProject] = useState({});
  // console.log(params)
  // console.log(slug)

  useEffect(() => {
    for (let i = 0; i < listProjects.length; i++) {
      if (i === id) {
        setProject(listProjects[i]);
      }
    }
  }, [id, listProjects]);

  const img = project.image;

  return (
    <>
      {/* header */}
      <div className="grid grid-cols-2 text-[14px] border-b-2 border-[#1E2D3D] text-[#607B96]">
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
      <div className="flex flex-col gap-3 flex-wrap p-5 pt-2 pb-16 text-[14px] border-[#1E2D3D] text-[#607B96] h-full w-full">
        <h1>
          {" "}
          // Project {project.type} / _{project.title} / {project.framework}{" "}
        </h1>
        <div className="w-[70%] max-sm:w-full border border-[#1E2D3D] rounded-xl max-sm:relative max-sm:z-0">
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

        <div className="w-full border-t border-[#1E2D3D]">
          /* <br />
          <span className="ml-2 text-[#43D9AD] "> *  _{project.title} / {project.framework}{" "} </span> <br />
          <span className="ml-2 "> • {project.date}  </span> <br />
          <span className="ml-2 "> • {project.description}  </span> <br />
          <span className="ml-2 "> • tech-stack: {project.techStack}  </span> <br />
          */ <br />
          <a href={`${project.url}`} target="_blank">
            <button className="mt-3 hover:duration-500 bg-[#1C2B3A] text-white hover:bg-[#607B96] hover:text-[#1E2D3D] text-[14px] py-1 px-3 rounded-md">
              view-github
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
