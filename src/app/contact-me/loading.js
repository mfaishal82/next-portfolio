export default function Loading() {
  return (
    <>
      <p
        className="h-4 bg-gray-200 rounded-full dark:bg-[#1E2D3D] w-[40%]"
      ></p>

      <ul className="mt-5 space-y-3">
        <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-[#1E2D3D]"></li>
        <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-[#1E2D3D]"></li>
        <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-[#1E2D3D]"></li>
        <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-[#1E2D3D]"></li>
      </ul>
    </>
  );
}
