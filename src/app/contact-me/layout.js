import { SITE_NAME, absoluteUrl } from "@/lib/site";

const title = "Contact";
const description =
  "Get in touch with Muhammad Faisal — fullstack developer available for web and mobile application work. Email mfaishal.works@gmail.com.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/contact-me" },
  openGraph: {
    title: `${title} — ${SITE_NAME}`,
    description,
    url: absoluteUrl("/contact-me"),
    type: "website",
  },
  twitter: {
    title: `${title} — ${SITE_NAME}`,
    description,
  },
};

export default function ContactLayout({ children }) {
  return (
    <>
      <h1 className="sr-only">Contact Muhammad Faisal</h1>
      {children}
    </>
  );
}
