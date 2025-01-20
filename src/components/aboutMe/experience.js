import { useState } from "react";

export default function Experience() {
    const [show, setShow] = useState("work");


    return(
        <>
            {/* header */}
            <div className="grid grid-cols-2 text-[14px] border-b-2 border-[#1E2D3D] text-[#607B96]">
                <div className="border-r-2 border-[#1E2D3D]">
                <div className="p-2 pr-5 w-[200px] flex flex-row justify-between">
                    experiences
                    <span className="select-none cursor-default">x</span>
                </div>
                </div>
            </div>
            {/* end header */}

            {/* body */}
            <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[14px] border-[#1E2D3D] text-[#607B96] h-full">
                <div className="flex flex-col border-r-2 border-[#1E2D3D] p-3 pt-10 gap-5">
                    <div className="ml-0 mt-5">
                        {/* "" */}
                        <div className="flex gap-x-3">

                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                                </div>
                            </div>

                            <div className="grow pt-0.5 pb-8">
                                <button onClick={ () => setShow('work') } className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-[#43D9AD]">
                                    Programmer (frontend) - 2024
                                </button>
                                <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                                    PT Talenta Sinergi Group
                                </p>
                                <ul>
                                    <li>• Participated in a developer training program led by a Project Manager, learning the React.js and Laravel(frontend html) stack for web application development.</li>
                                    <li>• Collaborated with 2 other developers to implement front-end pages using React and Laravel (HTML), ensuring responsive and user-friendly design.</li>
                                    <li>• Developed 6+ web pages from Figma designs to HTML within 3 months, maintaining adherence to established UI/UX standards.</li>
                                    <li>• Successfully converted designs from Figma into front-end components using React.js.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col border-r-2 border-[#1E2D3D] p-3 pt-10 gap-5 max-sm:hidden">
                    { show === "work" && <img src="work.png" loading="lazy"/>  }
                </div>
            </div>
        </>
    )
}