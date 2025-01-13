import { Fira_Code } from "next/font/google";
import "@/app/globals.css";
import MainLayout from "@/components/mainLayout";
import "./globals.css";

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
        className={`${firaCode.variable} bg-[#011627] overflow-y-hidden max-[1234px]:overflow-auto `}
        style={{ fontFamily: "var(--font-fira-code)" }}
      >
        <MainLayout>{children}</MainLayout>
        {/* <script src="/node_modules/preline/dist/preline.js"></script> */}
        <script src="https://unpkg.com/typeit@8.7.1/dist/index.umd.js"></script>
      </body>
    </html>
  );
}
