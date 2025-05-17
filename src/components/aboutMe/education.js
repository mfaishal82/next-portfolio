import { useState } from "react";

export default function Education() {
  const [show, setShow] = useState("");
  const [timelineStyle, setTimelineStyle] = useState("vertical"); // default style is vertical

  const educationData = [
    {
      id: "NC",
      period: "Nov '24-Jan '25",
      institution: "Nusacodes",
      program: "Bootcamp Web Developer",
      details: "",
      image: "https://res.cloudinary.com/dt1e1fd6s/image/upload/v1746268398/portfolio/rh4yxesy30yz2rlhyucu.png"
    },
    {
      id: "HCK",
      period: "Nov '23-Apr '24",
      institution: "Hacktiv8",
      program: "Fullstack Javascript Immersive Program",
      details: "Final grade: 75 | transcript",
      link: "https://drive.google.com/file/d/1klcekMmq371usOsoC_2FzQkDQ8XZzr3b/view?usp=sharing",
      image: "https://res.cloudinary.com/dt1e1fd6s/image/upload/v1746268448/portfolio/at2i9y1gb8f2bpinmgnl.png"
    },
    {
      id: "IAIP",
      period: "2019-2023",
      institution: "Institut Agama Islam Persis - Bandung",
      program: "Bachelor of Education",
      details: "GPA: 3.71",
      image: ""
    }
  ];

  const renderVerticalTimeline = () => (
    <div className="ml-5 max-sm:ml-0 mt-5">
      {/* 3 */}
      <div className="flex gap-x-3">
        {/* Date */}
        <div className="w-20 text-end">
          <span className="text-xs text-gray-500 dark:text-neutral-400">
            Nov '24-<br/>Jan '25
          </span>
        </div>

        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-8">
          <button onClick={ () => setShow('NC') } className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-[#43D9AD]">
            Nusacodes
          </button>
          <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
            Bootcamp Web Developer
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="flex gap-x-3">
        {/* Date */}
        <div className="w-20 text-end">
          <span className="text-xs text-gray-500 dark:text-neutral-400">
            Nov '23-<br/>Apr '24
          </span>
        </div>

        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-8">
          <button onClick={ () => setShow('HCK') } className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-[#43D9AD]">
            Hacktiv8
          </button>
          <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
            Fullstack Javascript Immersive Program
          </p>
          <p>
            Final grade: 75 |{" "}
            <a href="https://drive.google.com/file/d/1klcekMmq371usOsoC_2FzQkDQ8XZzr3b/view?usp=sharing">
              {" "}
              transcript{" "}
            </a>{" "}
          </p>
        </div>
      </div>

      {/* 1 */}
      <div className="flex gap-x-3">
        {/* Date */}
        <div className="w-20 text-end">
          <span className="text-xs text-gray-500 dark:text-neutral-400">
            2019-2023
          </span>
        </div>

        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-8">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-[#43D9AD]">
            Institut Agama Islam Persis - Bandung
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
            Bachelor of Education
          </p>
          <p>GPA: 3.71</p>
        </div>
      </div>
    </div>
  );

  const renderHorizontalTimeline = () => (
    <div className="flex flex-col w-full pb-4">
      <div className="relative">
        {/* Timeline scrollable container */}
        <div className="flex overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex space-x-8 px-4">
            {educationData.map((edu, index) => (
              <div 
                key={edu.id} 
                className="relative flex-shrink-0 w-64 bg-[#1c2b3a] dark:bg-[#011627] rounded-lg shadow-lg border border-[#1E2D3D] overflow-hidden hover:shadow-xl transition-all duration-300"
                onClick={() => setShow(edu.id)}
              >
                <div className={`w-full h-1 ${show === edu.id ? 'bg-[#43D9AD]' : 'bg-gray-500'}`}></div>
                <div className="p-4">
                  <div className="text-sm text-gray-500 dark:text-neutral-400 mb-2">{edu.period}</div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-[#43D9AD] mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-neutral-400 mb-2">
                    {edu.program}
                  </p>
                  {edu.details && (
                    <p className="text-xs text-gray-500 dark:text-neutral-500">
                      {edu.details.includes('transcript') ? (
                        <>
                          Final grade: 75 |{" "}
                          <a 
                            href={edu.link} 
                            className="text-blue-500 hover:underline"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            transcript
                          </a>
                        </>
                      ) : edu.details}
                    </p>
                  )}
                  <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-[#43D9AD] opacity-50"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Timeline line */}
        <div className="absolute left-0 right-0 h-0.5 bg-gray-300 dark:bg-neutral-700 top-20 z-0"></div>
      </div>
    </div>
  );

  const renderBlockTimeline = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
      {educationData.map((edu) => (
        <div 
          key={edu.id}
          onClick={() => setShow(edu.id)}
          className={`p-4 rounded-lg border ${show === edu.id ? 'border-[#43D9AD] bg-[#1c2b3a]' : 'border-[#1E2D3D] bg-[#011627]'} transition-all duration-300 hover:border-[#43D9AD] cursor-pointer`}
        >
          <div className="text-xs text-gray-500 dark:text-neutral-400 mb-2">{edu.period}</div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-[#43D9AD] mb-1">
            {edu.institution}
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-400 mb-2">
            {edu.program}
          </p>
          {edu.details && (
            <p className="text-xs text-gray-500 dark:text-neutral-500">
              {edu.details.includes('transcript') ? (
                <>
                  Final grade: 75 |{" "}
                  <a 
                    href={edu.link} 
                    className="text-blue-500 hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    transcript
                  </a>
                </>
              ) : edu.details}
            </p>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* header */}
      <div className="grid grid-cols-2 text-[14px] border-b-2 border-[#1E2D3D] text-[#607B96]">
        <div className="border-r-2 border-[#1E2D3D]">
          <div className="p-2 pr-5 w-[200px] flex flex-row justify-between bg-[#1E2D3D]">
            education-info
            <span className="select-none cursor-default">x</span>
          </div>
        </div>
      </div>
      {/* end header */}

      {/* Timeline style selector */}
      <div className="flex justify-end p-2 border-b border-[#1E2D3D]">
        <div className="flex space-x-2">
          <button 
            onClick={() => setTimelineStyle("vertical")} 
            className={`px-3 py-1 text-xs rounded ${timelineStyle === "vertical" ? "bg-[#1E2D3D] text-[#43D9AD]" : "text-[#607B96]"}`}
          >
            Vertical
          </button>
          <button 
            onClick={() => setTimelineStyle("horizontal")} 
            className={`px-3 py-1 text-xs rounded ${timelineStyle === "horizontal" ? "bg-[#1E2D3D] text-[#43D9AD]" : "text-[#607B96]"}`}
          >
            Horizontal
          </button>
          <button 
            onClick={() => setTimelineStyle("blocks")} 
            className={`px-3 py-1 text-xs rounded ${timelineStyle === "blocks" ? "bg-[#1E2D3D] text-[#43D9AD]" : "text-[#607B96]"}`}
          >
            Cards
          </button>
        </div>
      </div>

      {/* body */}
      <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[14px] border-[#1E2D3D] text-[#607B96] h-full">
        <div className={`flex flex-col border-r-2 border-[#1E2D3D] p-3 pt-5 gap-5 ${timelineStyle === "horizontal" ? "col-span-2 max-sm:col-span-1" : ""} ${timelineStyle === "blocks" ? "col-span-2 max-sm:col-span-1" : ""}`}>
          {timelineStyle === "vertical" && renderVerticalTimeline()}
          {timelineStyle === "horizontal" && renderHorizontalTimeline()}
          {timelineStyle === "blocks" && renderBlockTimeline()}
        </div>

        {timelineStyle === "vertical" && (
          <div className="flex flex-col border-r-2 border-[#1E2D3D] p-3 pt-10 gap-5 hover:scale-105 hover:duration-500 max-sm:hidden">
            {show === "NC" && <img src="https://res.cloudinary.com/dt1e1fd6s/image/upload/v1746268398/portfolio/rh4yxesy30yz2rlhyucu.png" loading="lazy" alt="Nusacodes certificate" />}
            {show === "HCK" && <img src="https://res.cloudinary.com/dt1e1fd6s/image/upload/v1746268448/portfolio/at2i9y1gb8f2bpinmgnl.png" loading="lazy" alt="Hacktiv8 certificate" />}
            {show === "IAIP" && <div className="flex items-center justify-center h-full text-[#43D9AD]">Institut Agama Islam Persis - Bandung</div>}
          </div>
        )}
        
        {/* Show image below in card view for small screens */}
        {(timelineStyle === "horizontal" || timelineStyle === "blocks") && show && (
          <div className="mt-4 p-3 flex justify-center items-center border-t border-[#1E2D3D] col-span-2">
            {show === "NC" && <img src="https://res.cloudinary.com/dt1e1fd6s/image/upload/v1746268398/portfolio/rh4yxesy30yz2rlhyucu.png" loading="lazy" alt="Nusacodes certificate" className="max-w-full max-h-96" />}
            {show === "HCK" && <img src="https://res.cloudinary.com/dt1e1fd6s/image/upload/v1746268448/portfolio/at2i9y1gb8f2bpinmgnl.png" loading="lazy" alt="Hacktiv8 certificate" className="max-w-full max-h-96" />}
            {show === "IAIP" && <div className="flex items-center justify-center h-48 text-[#43D9AD] text-lg">Institut Agama Islam Persis - Bandung</div>}
          </div>
        )}
      </div>

      {/* Add a style for hiding scrollbars but keeping functionality */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
