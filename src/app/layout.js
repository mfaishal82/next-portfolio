import { Fira_Code } from "next/font/google";
import "@/app/globals.css";
import "./globals.css";
import MainLayout from "@/components/layout/mainLayout";
import { AppProvider } from '@/context/context';
import { SpeedInsights } from "@vercel/speed-insights/next"
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SOCIAL_PROFILES,
  CONTACT,
  absoluteUrl,
} from "@/lib/site";
// import SplashCursor from "@/Animations/SplashCursor/SplashCursor";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const OG_IMAGE = {
  url: absoluteUrl("/thumbnail.png"),
  // Must match the real file dimensions (1280×720) or social crawlers may
  // reject or crop the card.
  width: 1280,
  height: 720,
  alt: `${SITE_NAME} — Fullstack Developer`,
};

export const metadata = {
  // Makes every relative canonical / OG URL below resolve to the real origin.
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "Muhammad Faisal",
    "fullstack developer",
    "React developer",
    "Next.js developer",
    "Laravel developer",
    "React Native developer",
    "web developer Indonesia",
    "portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "id_ID",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

/**
 * Person + WebSite schema, emitted once from the root layout so every page
 * carries the identity signal behind a personal portfolio's knowledge panel.
 */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: SITE_NAME,
  url: SITE_URL,
  image: absoluteUrl("/thumbnail.png"),
  jobTitle: "Fullstack Developer",
  description: SITE_DESCRIPTION,
  email: `mailto:${CONTACT.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kabupaten Bogor",
    addressRegion: "Jawa Barat",
    addressCountry: "ID",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "Vue",
    "Laravel",
    "React Native",
    "Expo",
    "Node.js",
    "PostgreSQL",
    "MySQL",
    "Firebase",
  ],
  sameAs: [
    SOCIAL_PROFILES.github,
    SOCIAL_PROFILES.linkedin,
    SOCIAL_PROFILES.facebook,
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://unpkg.com" />
        <script
          type="application/ld+json"
          // Static, developer-authored JSON — no user input is interpolated.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema]),
          }}
        />
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
