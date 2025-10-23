"use client"
import TypeIt from "typeit-react";
import { useEffect } from "react";
import OptimizedImage from "@/components/OptimizedImage";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Muhammad Faisal";
  }, []);

  return (
    <div className="flex flex-row items-center h-full relative max-sm:absolute max-sm:top-3 overflow-auto mb-24 max-sm:p-7">
      <div className="h-full flex flex-col justify-center">
        <div className="flex flex-col justify-center cursor-default select-none">
          Hi all. I am
          <span className="text-[50px] max-sm:text-[45px]"> Muhammad Faisal</span>
          <span className="text-[#4D5BCE] text-[28px] max-sm:text-[18px]">
            {"> "}<span className="max-sm:text-[#43D9AD]">
            <TypeIt
              options={{
                strings: ["Fullstack Developer"],
                speed: 100,
                waitUntilVisible: true,
              }}
            ></TypeIt>
            </span>
          </span>
        </div>
        <div className="mt-10 flex flex-col gap-2 max-sm:text-[13px]">
          <div>
            <span className="text-[#607B96]">
              {" // my number "} <br />
              <span className="text-[#4D5BCE]">const</span>{" "}
              <span className="text-[#43D9AD] ">phoneNumber</span> ={" "}
              <span className="text-white hover:underline">
                +62 838 7665 7601
              </span>
              <span className="text-[#E99287]">;</span>
            </span>
          </div>
          <div>
            <span className="text-[#607B96]">
              {" // my email "} <br />
              <span className="text-[#4D5BCE]">const</span>{" "}
              <span className="text-[#43D9AD] ">email</span> ={" "}
              <span className="text-[#E99287] hover:underline">
                &quot;mfaishal.works@gmail.com&quot;
              </span>
            </span>
          </div>
          <div>
            <span className="text-[#607B96]">
              {" // you can also see it on my Github page "} <br />
              <span className="text-[#4D5BCE]">const</span>{" "}
              <span className="text-[#43D9AD] ">githubLink</span> ={" "}
              <span className="text-[#E99287] hover:underline">
                {" "}
                <a
                  href="https://github.com/mfaishal82/next-portfolio"
                  target="_blank"
                >
                  &quot;https://github.com/mfaishal82&quot;
                </a>
                ;
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-right bg-cover bg-no-repeat -inset-x-[140px] max-sm:-inset-x-0">
        <div className="bg-right bg-cover bg-no-repeat -inset-x-[140px] max-sm:-inset-x-0">
          <div
            className="fixed right-0 inset-y-36 w-[50%] max-sm:left-36 max-sm:w-[70%] max-sm:right-0 h-[70%] select-none"
          >
            <Image
              src="https://res.cloudinary.com/dt1e1fd6s/image/upload/v1746267321/portfolio/jw54obh7iibldu0eaylw.png"
              alt="Background"
              loading="eager"
              fill={true}
              priority={true}
              sizes="(max-width: 639px) 70vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
