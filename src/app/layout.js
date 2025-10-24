import { Fira_Code } from "next/font/google";
import "@/app/globals.css";
import "./globals.css";
import MainLayout from "@/components/layout/mainLayout";
import { AppProvider } from '@/context/context';
import { SpeedInsights } from "@vercel/speed-insights/next"
// import SplashCursor from "@/Animations/SplashCursor/SplashCursor";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad Faisal - Portfolio",
  description: "Portfolio Muhammad Faisal.",
  openGraph: {
    title: "Muhammad Faisal - Portfolio",
    description: "Portfolio Muhammad Faisal.",
    url: "https://mfaishal.my.id/",
    siteName: "Muhammad Faisal",
    images: [
      {
        url: "https://mfaishal.my.id/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Thumbnail of Muhammad Faisal's portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Faisal - Portfolio",
    description: "Portfolio Muhammad Faisal.",
    images: ["https://mfaishal.my.id/thumbnail.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://unpkg.com" />
      </head>
      <body
        className={`${firaCode.variable} bg-[#011627] overflow-y-auto overflow-x-hidden scheme-dark`}
        style={{ fontFamily: "var(--font-fira-code)" }}
      >
        {/* <SplashCursor /> */}
        <SpeedInsights/>
        <AppProvider>
          <MainLayout>{children}</MainLayout>
        </AppProvider>
        {/* <script src="/node_modules/preline/dist/preline.js"></script> */}
        <script rel="preconnect" src="https://unpkg.com/typeit@8.7.1/dist/index.umd.js" defer></script>
      </body>
    </html>
  );
}
