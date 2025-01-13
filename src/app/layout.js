import { Fira_Code } from "next/font/google";
import "@/app/globals.css";
import MainLayout from "@/components/mainLayout";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad Faisal",
  description: "Portfolio of Muhammad Faisal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} bg-[#011627]`}
        style={{ fontFamily: "var(--font-fira-code)" }}
      >
        <MainLayout>{children}</MainLayout>
        {/* <script src="/node_modules/preline/dist/preline.js"></script> */}
      </body>
    </html>
  );
}
