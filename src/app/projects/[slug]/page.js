import { notFound } from "next/navigation";
import ProjectDetail from "@/components/projects/projectDetail";
import { fetchProjects } from "@/services/portfolioService";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

export const revalidate = 300;

async function getProjects() {
  try {
    return await fetchProjects();
  } catch (error) {
    console.warn("projects/[slug]: could not load projects:", error?.message);
    return [];
  }
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects
    .filter((project) => project?.slug)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  const description = project.description
    ? project.description.slice(0, 155)
    : `${project.title} — a ${project.type} project by ${SITE_NAME}.`;

  return {
    title: project.title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${SITE_NAME}`,
      description,
      url: absoluteUrl(`/projects/${project.slug}`),
      type: "article",
      images: project.image?.[0]
        ? [{ url: project.image[0], alt: `${project.title} screenshot` }]
        : undefined,
    },
    twitter: {
      title: `${project.title} — ${SITE_NAME}`,
      description,
      images: project.image?.[0] ? [project.image[0]] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: absoluteUrl(`/projects/${project.slug}`),
    image: project.image?.[0],
    dateCreated: project.date,
    keywords: project.techStack,
    genre: project.type,
    author: {
      "@type": "Person",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
    ...(project.url ? { codeRepository: project.url } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <ProjectDetail project={project} />
    </>
  );
}
