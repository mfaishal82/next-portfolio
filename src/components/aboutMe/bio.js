import Link from "next/link";

export default function Bio() {

    return(
        <>
            {/* header */}
            <div className="grid grid-cols-2 text-[14px] border-b-2 border-[#1E2D3D] text-[#607B96]">
                <div className="border-r-2 border-[#1E2D3D]">
                <div className="p-2 pr-5 border-r-2 border-[#1E2D3D] w-[200px] flex flex-row justify-between">
                    personal-info
                    <span>
                    x
                    </span>
                </div>
                </div>
            </div>
            {/* end header */}

            {/* body */}
            <div className="grid grid-cols-2 text-[14px] border-[#1E2D3D] text-[#607B96] h-full">
                <div className="flex flex-col border-r-2 border-[#1E2D3D] p-3 pt-10 gap-5">
                <div>
                    {" /* "} <br />
                    <span className="ml-5">
                    Hello! I'm Muhammad Faisal, a Fullstack Developer. My journey into software development began out of sheer curiosity, and I quickly realized that this is my true calling. The process of learning new technologies has not only equipped me with technical skills but also fostered a growth mindset that I cherish. 
                    </span><br />
                    {" */ "}
                </div>
                <div>
                    {" // "} What I do ? <br /> <br />
                    {"/*"} Web Development {"*/"} <br />
                    {" /* "} <br />
                    <span className="ml-5">
                    As a programmer, I'm particularly drawn to the versatility and efficiency of React. I'm constantly excited to embark on new ventures that utilize React, NEXT.js, Laravel and explore innovative approaches to developing rapid, expandable, and intuitive applications.
                    </span><br />
                    {" */ "}
                    
                    <br /><br />
                    
                    {"/*"} Mobile Development {"*/"} <br />
                    {" /* "} <br />
                    <span className="ml-5">
                    As a mobile developer, I'm particularly drawn to the cross-platform capabilities of React Native. I'm constantly excited to explore new projects that harness React Native's potential and discover innovative approaches to building efficient, responsive, and user-centric mobile applications.
                    </span><br />
                    {" */ "}
                </div>
                </div>
                <div className="flex flex-col border-r-2 border-[#1E2D3D] p-3 pt-10 gap-5">
                <div className="flex flex-row gap-5">
                    <div>
                    <img src="SS2.png" width={"100"} height={"150"}  />
                    </div>
                    <div>
                    <img src="SS1.png" width={"400"} height={"250"} />
                    </div>
                </div>
                <div>
                    {"/*"} Mobile application development using React Native and Web application development using EJS and Express {"*/"}
                </div>
                <div>
                    {"//"} For details, visit my <Link href={"/projects"} className="hover:text-blue-300 "> projects </Link> page
                </div>
                </div>
            </div>
        </>
    )
}