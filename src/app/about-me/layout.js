import { SITE_NAME, absoluteUrl } from "@/lib/site";

const title = "About Me";
const description =
  "About Muhammad Faisal — fullstack developer in Indonesia: bio, work experience, education and verified certificates from Hacktiv8, AWS re/Start, Nusacodes and HackerRank.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/about-me" },
  openGraph: {
    title: `${title} — ${SITE_NAME}`,
    description,
    url: absoluteUrl("/about-me"),
    type: "profile",
  },
  twitter: {
    title: `${title} — ${SITE_NAME}`,
    description,
  },
};

/**
 * The page body is a client component driven by tab state, so the document
 * outline needs its single h1 supplied here. It is visually hidden because the
 * design uses a file-explorer metaphor with no page title, but it stays real,
 * crawlable content describing the page.
 */
export default function AboutLayout({ children }) {
  return (
    <>
      <h1 className="sr-only">About Muhammad Faisal — Fullstack Developer</h1>
      {children}
    </>
  );
}
