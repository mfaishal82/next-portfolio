import { fetchProjects } from "@/services/portfolioService";
import { absoluteUrl } from "@/lib/site";

// Refresh the sitemap as often as the data routes do (5 minutes).
export const revalidate = 300;

export default async function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/about-me", changeFrequency: "monthly", priority: 0.8 },
    { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
    { path: "/contact-me", changeFrequency: "yearly", priority: 0.5 },
  ].map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  }));

  let projectRoutes = [];
  try {
    const projects = await fetchProjects();
    projectRoutes = projects
      .filter((project) => project?.slug)
      .map((project) => ({
        url: absoluteUrl(`/projects/${project.slug}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      }));
  } catch (error) {
    console.warn("sitemap: could not load projects:", error?.message);
  }

  return [...staticRoutes, ...projectRoutes];
}
