export default function Sidebar_Project() {
  return (
    <>
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

      <div className="border-b-2 border-[#1E2D3D] text-white flex flex-col gap-2 justify-center p-2 py-4">
        {/* web */}
        <div className="flex flex-row hover:text-white cursor-pointer gap-3 items-center">
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.69658 7.18971L0.746582 2.23971L2.16058 0.82571L8.52458 7.18971L2.16058 13.5537L0.746582 12.1397L5.69658 7.18971Z" fill="#607B96"/>
            </svg>

            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0802 4.30056V12.9672C15.0802 13.1588 15.0041 13.3425 14.8687 13.4779C14.7332 13.6134 14.5495 13.6895 14.358 13.6895H1.35796C1.16642 13.6895 0.982719 13.6134 0.847276 13.4779C0.711833 13.3425 0.635742 13.1588 0.635742 12.9672V3.57834H14.358C14.5495 3.57834 14.7332 3.65443 14.8687 3.78988C15.0041 3.92532 15.0802 4.10902 15.0802 4.30056ZM8.15696 2.1339H0.635742V1.41168C0.635742 1.22013 0.711833 1.03643 0.847276 0.900987C0.982719 0.765544 1.16642 0.689453 1.35796 0.689453H6.71252L8.15696 2.1339Z" fill="#f59c02"/>
            </svg>

            web
        </div>

        {/* mobile */}
        <div className="flex flex-row hover:text-white cursor-pointer gap-3 items-center text-[#607B96] ">
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.69658 7.18971L0.746582 2.23971L2.16058 0.82571L8.52458 7.18971L2.16058 13.5537L0.746582 12.1397L5.69658 7.18971Z" fill="#607B96"/>
            </svg>

            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0802 3.98074V12.6474C15.0802 12.839 15.0041 13.0227 14.8687 13.1581C14.7332 13.2935 14.5495 13.3696 14.358 13.3696H1.35796C1.16642 13.3696 0.982719 13.2935 0.847276 13.1581C0.711833 13.0227 0.635742 12.839 0.635742 12.6474V3.25852H14.358C14.5495 3.25852 14.7332 3.33461 14.8687 3.47005C15.0041 3.60549 15.0802 3.78919 15.0802 3.98074ZM8.15696 1.81407H0.635742V1.09185C0.635742 0.900306 0.711833 0.716606 0.847276 0.581163C0.982719 0.44572 1.16642 0.369629 1.35796 0.369629H6.71252L8.15696 1.81407Z" fill="#02a4f5"/>
            </svg>

            mobile
        </div>
      </div>
    </>
  );
}
