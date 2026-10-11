import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, sortedProjects } from "@/content/projects";
import { ProjectPage } from "@/components/projects/ProjectPage";
import { buildProjectMetadata } from "@/components/projects/metadata";

/**
 * Every project in src/content/projects.ts gets a page here automatically.
 * Unknown slugs are a 404 (only the generated pages exist).
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return sortedProjects().map((project) => ({ slug: project.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? buildProjectMetadata("en", project) : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectPage locale="en" project={project} />;
}
