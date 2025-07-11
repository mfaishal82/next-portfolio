import { useAppContext } from "@/context/context";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar_Project() {
  const [openWeb, setOpenWeb] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const { listProjects, projectActive, setProjectActive } = useAppContext()

  return (
    <div className="sticky top-12">
      <div className="border-b-2 border-[#1E2D3D] text-white flex flex-row gap-2 p-2 items-center cursor-default">
        <svg
          width="9"
          height="7"
          viewBox="0 0 9 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.74998 6.65186L0.499969 0.651856L9 0.651855L4.74998 6.65186Z"
            fill="white"
          />
        </svg>
        projects
      </div>

      <div className="border-b-2 border-[#1E2D3D] text-[#607B96] flex flex-col gap-2 justify-center p-2 py-4">
        {/* web */}
        <button onClick={ ()=> setOpenWeb(!openWeb) } className={`flex flex-row hover:text-white cursor-pointer gap-3 items-center ${openWeb ? 'text-white' : ''}`}>
              { !openWeb && 
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.69658 7.18971L0.746582 2.23971L2.16058 0.82571L8.52458 7.18971L2.16058 13.5537L0.746582 12.1397L5.69658 7.18971Z" fill="#607B96"/>
                </svg>
              }
              { openWeb &&
                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.364 5.27715L11.314 0.327148L12.728 1.74115L6.364 8.10515L0 1.74115L1.414 0.327148L6.364 5.27715Z" fill="#607B96"/>
                </svg>               
              }

            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0802 4.30056V12.9672C15.0802 13.1588 15.0041 13.3425 14.8687 13.4779C14.7332 13.6134 14.5495 13.6895 14.358 13.6895H1.35796C1.16642 13.6895 0.982719 13.6134 0.847276 13.4779C0.711833 13.3425 0.635742 13.1588 0.635742 12.9672V3.57834H14.358C14.5495 3.57834 14.7332 3.65443 14.8687 3.78988C15.0041 3.92532 15.0802 4.10902 15.0802 4.30056ZM8.15696 2.1339H0.635742V1.41168C0.635742 1.22013 0.711833 1.03643 0.847276 0.900987C0.982719 0.765544 1.16642 0.689453 1.35796 0.689453H6.71252L8.15696 2.1339Z" fill="#f59c02"/>
            </svg>
            web
        </button>
        { openWeb &&
        listProjects.map((project, index) => (
          project.type === "web" &&
          <button key={index} onClick={ ()=> setProjectActive(project.title)}>
            <Link href={`/projects/${project.slug}`} key={index}>
              <div onClick={ ()=> setProjectActive(project.title)} key={index} className="flex flex-row hover:text-white cursor-pointer gap-2 items-center text-[#607B96] ml-6 mt-1">
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44684 0.832031H16.0466C16.2617 0.832031 16.468 0.917486 16.6201 1.0696C16.7722 1.22171 16.8577 1.42801 16.8577 1.64313V14.6207C16.8577 14.8358 16.7722 15.0421 16.6201 15.1942C16.468 15.3463 16.2617 15.4318 16.0466 15.4318H1.44684C1.23172 15.4318 1.02542 15.3463 0.873307 15.1942C0.721197 15.0421 0.635742 14.8358 0.635742 14.6207V1.64313C0.635742 1.42801 0.721197 1.22171 0.873307 1.0696C1.02542 0.917486 1.23172 0.832031 1.44684 0.832031ZM4.69122 10.9707V7.72635L6.31342 9.34854L7.93561 7.72635V10.9707H9.5578V5.29306H7.93561L6.31342 6.91525L4.69122 5.29306H3.06903V10.9707H4.69122ZM13.6133 8.53745V5.29306H11.9911V8.53745H10.3689L12.8022 10.9707L15.2355 8.53745H13.6133Z" fill="#81A1C1"/>
                  </svg>

                  <span className={`ml-1 ${projectActive === project.title ? 'text-white' : ''}`}>_{project.title}</span>
              </div>
            </Link>
          </button>
          ))
        }

        {/* mobile */}
        <button onClick={ ()=> setOpenMobile(!openMobile) } className={`flex flex-row hover:text-white cursor-pointer gap-3 items-center ${openMobile ? 'text-white' : ''}`}>
              { !openMobile && 
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.69658 7.18971L0.746582 2.23971L2.16058 0.82571L8.52458 7.18971L2.16058 13.5537L0.746582 12.1397L5.69658 7.18971Z" fill="#607B96"/>
                </svg>
              }
              { openMobile &&
                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.364 5.27715L11.314 0.327148L12.728 1.74115L6.364 8.10515L0 1.74115L1.414 0.327148L6.364 5.27715Z" fill="#607B96"/>
                </svg>               
              }

            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0802 3.98074V12.6474C15.0802 12.839 15.0041 13.0227 14.8687 13.1581C14.7332 13.2935 14.5495 13.3696 14.358 13.3696H1.35796C1.16642 13.3696 0.982719 13.2935 0.847276 13.1581C0.711833 13.0227 0.635742 12.839 0.635742 12.6474V3.25852H14.358C14.5495 3.25852 14.7332 3.33461 14.8687 3.47005C15.0041 3.60549 15.0802 3.78919 15.0802 3.98074ZM8.15696 1.81407H0.635742V1.09185C0.635742 0.900306 0.711833 0.716606 0.847276 0.581163C0.982719 0.44572 1.16642 0.369629 1.35796 0.369629H6.71252L8.15696 1.81407Z" fill="#02a4f5"/>
            </svg>

            mobile
        </button>
        
        { openMobile &&
        listProjects.map((project, index) => (
          project.type === "mobile" &&
          <button key={index} onClick={ ()=> setProjectActive(project.title)}>
            <Link href={`/projects/${index}`} key={index}>
              <div key={index} className="flex flex-row hover:text-white cursor-pointer gap-2 items-center text-[#607B96] ml-6 mt-1">
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44684 0.832031H16.0466C16.2617 0.832031 16.468 0.917486 16.6201 1.0696C16.7722 1.22171 16.8577 1.42801 16.8577 1.64313V14.6207C16.8577 14.8358 16.7722 15.0421 16.6201 15.1942C16.468 15.3463 16.2617 15.4318 16.0466 15.4318H1.44684C1.23172 15.4318 1.02542 15.3463 0.873307 15.1942C0.721197 15.0421 0.635742 14.8358 0.635742 14.6207V1.64313C0.635742 1.42801 0.721197 1.22171 0.873307 1.0696C1.02542 0.917486 1.23172 0.832031 1.44684 0.832031ZM4.69122 10.9707V7.72635L6.31342 9.34854L7.93561 7.72635V10.9707H9.5578V5.29306H7.93561L6.31342 6.91525L4.69122 5.29306H3.06903V10.9707H4.69122ZM13.6133 8.53745V5.29306H11.9911V8.53745H10.3689L12.8022 10.9707L15.2355 8.53745H13.6133Z" fill="#81A1C1"/>
                  </svg>

                  <span className={`ml-1 ${projectActive === project.title ? 'text-white' : ''}`}>_{project.title}</span>
              </div>
            </Link>
          </button>
          ))
        }
      </div>
    </div>
  );
}
