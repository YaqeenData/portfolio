import { ProjectLab } from "@/components/projects/ProjectLab";
import { buildLabMetadata } from "@/components/projects/metadata";

export const metadata = buildLabMetadata("en");

export default function ProjectLabPage() {
  return <ProjectLab locale="en" />;
}
