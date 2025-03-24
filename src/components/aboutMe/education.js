import { useState } from "react";

export default function Education() {
  const [show, setShow] = useState("");

  return (
    <>
      {/* header */}
      <div className="grid grid-cols-2 text-[14px] border-b-2 border-[#1E2D3D] text-[#607B96]">
            <div className="border-r-2 border-[#1E2D3D]">
              <div className="p-2 pr-5 w-[200px] flex flex-row justify-between">
              education-info
              <span className="select-none cursor-default">x</span>
          </div>
        </div>
      </div>
      {/* end header */}

      {/* body */}
      <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[14px] border-[#1E2D3D] text-[#607B96] h-full">
          <div className="flex flex-col border-r-2 border-[#1E2D3D] p-3 pt-10 gap-5">
          <div className="ml-5 max-sm:ml-1 mt-5">
            {/* 3 */}
            <div className="flex gap-x-3 max-sm:gap-x-1.5">
              {/* Date */}
              <div className="w-20 text-end">
                <span className="text-xs text-gray-500 dark:text-neutral-400">
                  2019-<br/>2023
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
                  Nov 2023-Apr 2024
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
                  Nov 2024-Jan 2025
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
        </div>

        <div className="flex flex-col border-r-2 border-[#1E2D3D] p-3 pt-10 gap-5 hover:scale-105 hover:duration-500 max-sm:hidden">
            { show === "NC" && <img src="NC.png" loading="lazy" />  }
            { show === "HCK" && <img src="HCK.png" loading="lazy" />}            
        </div>
      </div>
    </>
  );
}
