import { useState } from "react";
import { useAppContext } from "@/context/context";

export default function Education() {
  const { education } = useAppContext();
  const [show, setShow] = useState("");
  const [timelineStyle, setTimelineStyle] = useState("vertical");

  const eduItems = education && education.length > 0 ? education : [
    {
      id: "edu-orbit",
      school: "Orbit Future Academy",
      degree: "AWS re/Start Program",
      period: "July 2025 – October 2025",
      grade: "Jakarta, Indonesia"
    },
    {
      id: "edu-hacktiv8",
      school: "Hacktiv8",
      degree: "Full Stack JavaScript Immersive Program",
      period: "Nov '23 - Apr '24",
      grade: "Jakarta, Indonesia (Transcript Available)"
    },
    {
      id: "edu-persis",
      school: "Institut Agama Islam Persis",
      degree: "Bachelor of Education",
      period: "2019 - 2023",
      grade: "GPA: 3.71"
    }
  ];

  const renderVerticalTimeline = () => (
    <div className="ml-5 max-sm:ml-0 mt-5">
      {eduItems.map((edu, idx) => (
        <div key={edu.id || idx} className="flex gap-x-3">
          {/* Date */}
          <div className="w-24 text-end shrink-0">
            <span className="text-xs text-gray-500 dark:text-neutral-400">
              {edu.period}
            </span>
          </div>

          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className={`size-2 rounded-full ${show === edu.id ? 'bg-[#43D9AD]' : 'bg-gray-400 dark:bg-neutral-600'}`}></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <button onClick={() => setShow(edu.id)} className={`flex gap-x-1.5 font-semibold text-left transition-colors ${show === edu.id ? 'text-[#43D9AD]' : 'text-gray-800 dark:text-neutral-200 hover:text-[#43D9AD]'}`}>
              {edu.school || edu.institution}
            </button>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              {edu.degree || edu.program}
            </p>
            {edu.grade && (
              <p className="text-xs text-gray-500 dark:text-neutral-500 mt-0.5">
                {edu.grade}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderHorizontalTimeline = () => (
    <div className="flex flex-col w-full pb-4">
      <div className="relative">
        <div className="flex overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex space-x-6 px-4">
            {eduItems.map((edu, index) => (
              <div
                key={edu.id || index}
                className="relative flex-shrink-0 w-64 bg-[#1c2b3a] dark:bg-[#011627] rounded-lg shadow-lg border border-[#1E2D3D] overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setShow(edu.id)}
              >
                <div className={`w-full h-1 ${show === edu.id ? 'bg-[#43D9AD]' : 'bg-gray-500'}`}></div>
                <div className="p-4">
                  <div className="text-sm text-gray-500 dark:text-neutral-400 mb-2">{edu.period}</div>
                  <h3 className="text-base font-semibold text-gray-800 dark:text-[#43D9AD] mb-1">
                    {edu.school || edu.institution}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-neutral-400 mb-2">
                    {edu.degree || edu.program}
                  </p>
                  {edu.grade && (
                    <p className="text-xs text-gray-500 dark:text-neutral-500">
                      {edu.grade}
                    </p>
                  )}
                  <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-[#43D9AD] opacity-50"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderBlockTimeline = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
      {eduItems.map((edu, idx) => (
        <div
          key={edu.id || idx}
          onClick={() => setShow(edu.id)}
          className={`p-4 rounded-lg border ${show === edu.id ? 'border-[#43D9AD] bg-[#1c2b3a]' : 'border-[#1E2D3D] bg-[#011627]'} transition-all duration-300 hover:border-[#43D9AD] cursor-pointer`}
        >
          <div className="text-xs text-gray-500 dark:text-neutral-400 mb-2">{edu.period}</div>
          <h3 className="text-base font-semibold text-gray-800 dark:text-[#43D9AD] mb-1">
            {edu.school || edu.institution}
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-400 mb-2">
            {edu.degree || edu.program}
          </p>
          {edu.grade && (
            <p className="text-xs text-gray-500 dark:text-neutral-500">
              {edu.grade}
            </p>
          )}
        </div>
      ))}
    </div>
  );

  const selectedEdu = eduItems.find(e => e.id === show) || eduItems[0];

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
            className={`px-3 py-1 text-xs rounded transition-colors ${timelineStyle === "vertical" ? "bg-[#1E2D3D] text-[#43D9AD] font-bold" : "text-[#607B96] hover:text-white"}`}
          >
            Vertical
          </button>
          <button
            onClick={() => setTimelineStyle("horizontal")}
            className={`px-3 py-1 text-xs rounded transition-colors ${timelineStyle === "horizontal" ? "bg-[#1E2D3D] text-[#43D9AD] font-bold" : "text-[#607B96] hover:text-white"}`}
          >
            Horizontal
          </button>
          <button
            onClick={() => setTimelineStyle("blocks")}
            className={`px-3 py-1 text-xs rounded transition-colors ${timelineStyle === "blocks" ? "bg-[#1E2D3D] text-[#43D9AD] font-bold" : "text-[#607B96] hover:text-white"}`}
          >
            Cards
          </button>
        </div>
      </div>

      {/* body */}
      <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[14px] border-[#1E2D3D] text-[#607B96] h-full">
        <div className={`flex flex-col border-r-2 border-[#1E2D3D] p-3 pt-5 gap-5 overflow-y-auto ${timelineStyle === "horizontal" ? "col-span-2 max-sm:col-span-1" : ""} ${timelineStyle === "blocks" ? "col-span-2 max-sm:col-span-1" : ""}`}>
          {timelineStyle === "vertical" && renderVerticalTimeline()}
          {timelineStyle === "horizontal" && renderHorizontalTimeline()}
          {timelineStyle === "blocks" && renderBlockTimeline()}
        </div>

        {timelineStyle === "vertical" && (
          <div className="flex flex-col border-r-2 border-[#1E2D3D] p-6 pt-10 gap-5 max-sm:hidden bg-[#011221]/40">
            <div className="font-mono text-xs text-[#43D9AD]">
              {"//"} Detail Institusi & Program
            </div>
            {selectedEdu && (
              <div className="p-4 rounded-xl bg-[#011627] border border-[#1E2D3D] space-y-2">
                <h4 className="text-base font-bold text-white">{selectedEdu.school}</h4>
                <p className="text-xs text-[#43D9AD] font-mono">{selectedEdu.degree}</p>
                <p className="text-xs text-gray-400">Periode: {selectedEdu.period}</p>
                {selectedEdu.grade && (
                  <p className="text-xs text-slate-300 pt-2 border-t border-[#1E2D3D]">{selectedEdu.grade}</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

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
