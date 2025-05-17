import { useState } from "react";

export default function Certificates() {
    const [show, setShow] = useState("");

    return(
        <>
            {/* header */}
            <div className="grid grid-cols-2 text-[14px] border-b-2 border-[#1E2D3D] text-[#607B96]">
                <div className="border-r-2 border-[#1E2D3D]">
                <div className="p-2 pr-5 w-[200px] flex flex-row justify-between bg-[#1E2D3D]">
                    skill-certificate
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
                        <button onClick={ () => setShow('java') } className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-[#43D9AD]">
                            Java Language {"("} from Pintaar {")"}
                            <a href="https://drive.google.com/file/d/1pF8Uh3kgYDnkqnS-OEufatS9imCTPFdm/view?usp=sharing" target="_blank">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.22222 2.66667V4.44444H1.77778V14.2222H11.5556V9.77778H13.3333V15.1111C13.3333 15.3469 13.2397 15.573 13.073 15.7397C12.9063 15.9064 12.6802 16 12.4444 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V3.55556C0 3.31981 0.0936505 3.09372 0.260349 2.92702C0.427048 2.76032 0.653141 2.66667 0.888889 2.66667H6.22222ZM16 0V7.11111H14.2222V3.03378L7.29511 9.96178L6.03822 8.70489L12.9644 1.77778H8.88889V0H16Z" fill="#607B96"/>
                                </svg>
                            </a>
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
                        <a href="https://www.hackerrank.com/certificates/f0b1359b8ec9" target="_blank">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.22222 2.66667V4.44444H1.77778V14.2222H11.5556V9.77778H13.3333V15.1111C13.3333 15.3469 13.2397 15.573 13.073 15.7397C12.9063 15.9064 12.6802 16 12.4444 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V3.55556C0 3.31981 0.0936505 3.09372 0.260349 2.92702C0.427048 2.76032 0.653141 2.66667 0.888889 2.66667H6.22222ZM16 0V7.11111H14.2222V3.03378L7.29511 9.96178L6.03822 8.70489L12.9644 1.77778H8.88889V0H16Z" fill="#607B96"/>
                            </svg>
                        </a>
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
                        <a href="https://www.hackerrank.com/certificates/1bf1328c35d2" target="_blank">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.22222 2.66667V4.44444H1.77778V14.2222H11.5556V9.77778H13.3333V15.1111C13.3333 15.3469 13.2397 15.573 13.073 15.7397C12.9063 15.9064 12.6802 16 12.4444 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V3.55556C0 3.31981 0.0936505 3.09372 0.260349 2.92702C0.427048 2.76032 0.653141 2.66667 0.888889 2.66667H6.22222ZM16 0V7.11111H14.2222V3.03378L7.29511 9.96178L6.03822 8.70489L12.9644 1.77778H8.88889V0H16Z" fill="#607B96"/>
                            </svg>
                        </a>
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
                        <a href="https://www.hackerrank.com/certificates/8719da02acfd" target="_blank">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.22222 2.66667V4.44444H1.77778V14.2222H11.5556V9.77778H13.3333V15.1111C13.3333 15.3469 13.2397 15.573 13.073 15.7397C12.9063 15.9064 12.6802 16 12.4444 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V3.55556C0 3.31981 0.0936505 3.09372 0.260349 2.92702C0.427048 2.76032 0.653141 2.66667 0.888889 2.66667H6.22222ZM16 0V7.11111H14.2222V3.03378L7.29511 9.96178L6.03822 8.70489L12.9644 1.77778H8.88889V0H16Z" fill="#607B96"/>
                            </svg>
                        </a>
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
                        <a href="https://www.hackerrank.com/certificates/a0355c4dd270" target="_blank">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.22222 2.66667V4.44444H1.77778V14.2222H11.5556V9.77778H13.3333V15.1111C13.3333 15.3469 13.2397 15.573 13.073 15.7397C12.9063 15.9064 12.6802 16 12.4444 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V3.55556C0 3.31981 0.0936505 3.09372 0.260349 2.92702C0.427048 2.76032 0.653141 2.66667 0.888889 2.66667H6.22222ZM16 0V7.11111H14.2222V3.03378L7.29511 9.96178L6.03822 8.70489L12.9644 1.77778H8.88889V0H16Z" fill="#607B96"/>
                            </svg>
                        </a>
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
                        <a href="https://www.hackerrank.com/certificates/aad4edfa23a3" target="_blank">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.22222 2.66667V4.44444H1.77778V14.2222H11.5556V9.77778H13.3333V15.1111C13.3333 15.3469 13.2397 15.573 13.073 15.7397C12.9063 15.9064 12.6802 16 12.4444 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V3.55556C0 3.31981 0.0936505 3.09372 0.260349 2.92702C0.427048 2.76032 0.653141 2.66667 0.888889 2.66667H6.22222ZM16 0V7.11111H14.2222V3.03378L7.29511 9.96178L6.03822 8.70489L12.9644 1.77778H8.88889V0H16Z" fill="#607B96"/>
                            </svg>
                        </a>
                        </button>
                        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                        Issued on April 2024
                        </p>
                    </div>
                    </div>

                </div>
                </div>

                <div className="flex flex-col border-r-2 border-[#1E2D3D] p-3 pt-10 gap-5 hover:scale-105 hover:duration-500 max-sm:hidden">
                    { show === "java" && <img src="java.png" loading="lazy" />  }
                    { show === "js" && <img src="js.png" loading="lazy" />}            
                    { show === "prob" && <img src="prob.png" loading="lazy" />}            
                    { show === "css" && <img src="css.png" loading="lazy" />}            
                    { show === "sql" && <img src="sql.png" loading="lazy" />}            
                    { show === "react" && <img src="react.png" loading="lazy" />}            
                </div>
            </div>
        </>
    )
}