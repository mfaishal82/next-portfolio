import { Fira_Code } from "next/font/google";
import "@/app/globals.css";
import "./globals.css";
import MainLayout from "@/components/layout/mainLayout";
import { AppProvider } from '@/context/context';

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
        className={`${firaCode.variable} bg-[#011627] overflow-y-auto overflow-x-hidden scheme-dark`}
        style={{ fontFamily: "var(--font-fira-code)" }}
      >
        <AppProvider>
          <MainLayout>{children}</MainLayout>
        </AppProvider>
        {/* <script src="/node_modules/preline/dist/preline.js"></script> */}
        <script src="https://unpkg.com/typeit@8.7.1/dist/index.umd.js"></script>
      </body>
    </html>
  );
}
