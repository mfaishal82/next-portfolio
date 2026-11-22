import Link from "next/link";
import ProjectsGrid from "@/components/projects/projectsGrid";
import { fetchProjects } from "@/services/portfolioService";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

// Keep the list fresh without refetching on every request.
export const revalidate = 300;

const title = "Projects";
const description =
  "Web and mobile projects built by Muhammad Faisal with Next.js, React, Vue, Laravel and React Native — including CuanPOS, Simple-DonasiKu, MediChat Rx and The Fast News.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `${title} — ${SITE_NAME}`,
    description,
    url: absoluteUrl("/projects"),
    type: "website",
  },
  twitter: {
    title: `${title} — ${SITE_NAME}`,
    description,
  },
};

export default async function ProjectsPage() {
  // Fetched on the server so the project list ships inside the HTML instead of
  // arriving after hydration.
  const projects = await fetchProjects();

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Projects by ${SITE_NAME}`,
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: absoluteUrl(`/projects/${project.slug}`),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* header */}
      <div className="w-full grid grid-cols-2 text-[14px] border-b-2 border-[#1E2D3D] text-[#607B96] bg-[#011627]">
        <div className="">
          <div className="p-3 py-2 pr-6 border-r-2 border-[#1E2D3D] w-[220px] flex flex-row justify-between items-center bg-[#1E2D3D]">
            <span className="font-medium">list-projects</span>
            <Link href="/" className="hover:text-[#d94343] transition-colors">
              <span className="cursor-pointer text-[14px]">x</span>
            </Link>
          </div>
        </div>
      </div>

      <h1 className="sr-only">Projects by Muhammad Faisal — web and mobile portfolio</h1>

      <ProjectsGrid projects={projects} />
    </>
  );
}
