import { ProjectLab } from "@/components/projects/ProjectLab";
import { buildLabMetadata } from "@/components/projects/metadata";

export const metadata = buildLabMetadata("ar");

export default function ProjectLabPage() {
  return <ProjectLab locale="ar" />;
}
