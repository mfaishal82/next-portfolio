/**
 * Single source of truth for the site's canonical origin and identity.
 *
 * Everything SEO-related (canonical URLs, sitemap, robots, Open Graph, JSON-LD)
 * reads from here so the domain only has to be changed in one place. Set
 * NEXT_PUBLIC_SITE_URL to override, e.g. on a staging deployment.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://mfaishal.my.id"
).replace(/\/$/, "");

export const SITE_NAME = "Muhammad Faisal";
export const SITE_TITLE = "Muhammad Faisal — Fullstack Developer Portfolio";
export const SITE_DESCRIPTION =
  "Portfolio of Muhammad Faisal, a fullstack developer in Indonesia building web and mobile applications with React, Next.js, Vue, Laravel and React Native.";

export const SOCIAL_PROFILES = {
  github: "https://github.com/mfaishal82",
  linkedin: "https://www.linkedin.com/in/mfaishal82",
  facebook: "https://web.facebook.com/mf.ihbs",
};

export const CONTACT = {
  email: "mfaishal.works@gmail.com",
  phone: "+62 838 7665 7601",
  location: "Kabupaten Bogor, Jawa Barat, Indonesia",
};

/** Absolute URL for a site-relative path. */
export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
