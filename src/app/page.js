"use client"
import TypeIt from "typeit";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    new TypeIt("#typeIt", {
      strings: ["Fullstack Developer"],
      speed: 100,
      waitUntilVisible: true,
    }).go();
  }, []);

  // useEffect(() => {
  //   new TypeIt("#typeIt", {
  //     strings: ["Hi I'm Full Stack Developer"],
  //     afterStep: function () {
  //       instance.getElement().style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  //     },
  //   }).go();
  // }, []);

  return (
    <>
      <div className="bg-right bg-cover bg-no-repeat relative -inset-x-[140px]">
        <img
          src="/bg-blurs.png"
          alt="Background"
          className="absolute right-0 w-[570px] h-[570px]"
        />
      </div>
      <div className="h-full flex flex-col justify-center">
        Hi all. I am
        <span className="text-[50px]"> Muhammad Faisal</span>
        <span className="text-[#4D5BCE] text-[28px] ">
          {"> "}<span id="typeIt"></span>
        </span>
        <div className="mt-10 flex flex-col gap-2">
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
                "mfaishal.works@gmail.com";
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
                  "https://github.com/mfaishal82"
                </a>
                ;
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
