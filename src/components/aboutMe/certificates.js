import { useState } from "react";

export default function Certificates() {
    const [show, setShow] = useState("");

    return(
        <>
            {/* header */}
            <div className="grid grid-cols-2 text-[14px] border-b-2 border-[#1E2D3D] text-[#607B96]">
                <div className="border-r-2 border-[#1E2D3D]">
                <div className="p-2 pr-5 border-r-2 border-[#1E2D3D] w-[200px] flex flex-row justify-between">
                    skill-certificate
                    <span className="select-none cursor-default">x</span>
                </div>
                </div>
            </div>
            {/* end header */}

            {/* body */}
            <div className="grid grid-cols-2 text-[14px] border-[#1E2D3D] text-[#607B96] h-full">
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
                        <button onClick={ () => setShow('java') } className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-[#43D9AD]">
                            Java Language {"("} from Pintaar {")"}
                        </button>
                        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                        Issued on April 2024
                        </p>
                    </div>
                    </div>
                    {/* "" */}
                    <div className="flex gap-x-3">

                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                        <div className="relative z-10 size-7 flex justify-center items-center">
                        <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                        </div>
                    </div>

                    <div className="grow pt-0.5 pb-8">
                        <button onClick={ () => setShow('js') } className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-[#43D9AD]">
                        {"Javascript (intermediate)"} {"("} from Hackerrank {")"}
                        </button>
                        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                        Issued on April 2024
                        </p>
                    </div>
                    </div>
                    {/* "" */}
                    <div className="flex gap-x-3">

                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                        <div className="relative z-10 size-7 flex justify-center items-center">
                        <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                        </div>
                    </div>

                    <div className="grow pt-0.5 pb-8">
                        <button onClick={ () => setShow('prob') } className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-[#43D9AD]">
                        {"Problem Solving (basic)"} {"("} from Hackerrank {")"}
                        </button>
                        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                        Issued on April 2024
                        </p>
                    </div>
                    </div>
                    {/* "" */}
                    <div className="flex gap-x-3">

                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                        <div className="relative z-10 size-7 flex justify-center items-center">
                        <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                        </div>
                    </div>

                    <div className="grow pt-0.5 pb-8">
                        <button onClick={ () => setShow('css') } className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-[#43D9AD]">
                        {"CSS (basic)"} {"("} from Hackerrank {")"}
                        </button>
                        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                        Issued on April 2024
                        </p>
                    </div>
                    </div>
                    {/* "" */}
                    <div className="flex gap-x-3">

                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                        <div className="relative z-10 size-7 flex justify-center items-center">
                        <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                        </div>
                    </div>

                    <div className="grow pt-0.5 pb-8">
                        <button onClick={ () => setShow('sql') } className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-[#43D9AD]">
                        {"SQL (basic)"} {"("} from Hackerrank {")"}
                        </button>
                        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                        Issued on April 2024
                        </p>
                    </div>
                    </div>
                    {/* "" */}
                    <div className="flex gap-x-3">

                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                        <div className="relative z-10 size-7 flex justify-center items-center">
                        <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                        </div>
                    </div>

                    <div className="grow pt-0.5 pb-8">
                        <button onClick={ () => setShow('react') } className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-[#43D9AD]">
                        {"React (basic)"} {"("} from Hackerrank {")"}
                        </button>
                        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                        Issued on April 2024
                        </p>
                    </div>
                    </div>

                </div>
                </div>

                <div className="flex flex-col border-r-2 border-[#1E2D3D] p-3 pt-10 gap-5 hover:scale-105 hover:duration-500">
                    { show === "java" && <img src="java.png" />  }
                    { show === "js" && <img src="js.png" />}            
                    { show === "prob" && <img src="prob.png" />}            
                    { show === "css" && <img src="css.png" />}            
                    { show === "sql" && <img src="sql.png" />}            
                    { show === "react" && <img src="react.png" />}            
                </div>
            </div>
        </>
    )
}