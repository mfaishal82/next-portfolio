import { Fira_Code } from "next/font/google";
import "@/app/globals.css";
import "./globals.css";
import MainLayout from "@/components/layout/mainLayout";
import { AppProvider } from '@/context/context';
import { SpeedInsights } from "@vercel/speed-insights/next"

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
      <head>
        <meta property="og:title" content="Muhammad Faisal - Portfolio" />
        <meta property="og:description" content="Portfolio Muhammad Faisal." />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:url" content="https://mfaishal.my.id/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Muhammad Faisal - Portfolio" />
        <meta name="twitter:description" content="Portfolio Muhammad Faisal." />
      </head>
      <body
        className={`${firaCode.variable} bg-[#011627] overflow-y-auto overflow-x-hidden scheme-dark`}
        style={{ fontFamily: "var(--font-fira-code)" }}
      >
        <SpeedInsights/>
        <AppProvider>
          <MainLayout>{children}</MainLayout>
        </AppProvider>
        {/* <script src="/node_modules/preline/dist/preline.js"></script> */}
        <script src="https://unpkg.com/typeit@8.7.1/dist/index.umd.js"></script>
      </body>
    </html>
  );
}
