import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { ProjectProps } from "@/content/projects";

interface ProjectCardProps extends ProjectProps {}

export function ProjectCard(p: ProjectCardProps) {
  return (
    <Card className="p-2 w-full">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col items-start justify-start w-full md:flex-row md:justify-between md:items-center">
          <p className="text-lg font-bold">{p.name}</p>
          <p className="text-small text-default-500">{p.tech.join(", ")}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-default-800">{p.desc}</p>
      </CardBody>
      <Divider />
      <CardFooter className="justify-start gap-5">
        <FooterLink
          className="text-small text-default-500 text-center"
          name="GitHub"
          link={p.githubUrl}
        />
        <FooterLink
          className="text-small text-default-500 text-center"
          name="Live site"
          link={p.liveUrl}
        />
      </CardFooter>
    </Card>
  );
}

function FooterLink({
  name,
  link,
  className,
}: {
  name: string;
  link?: string;
  className: string;
}) {
  return link ? (
    <Link href={link} target="_blank" className={className} size="sm">
      {name}
    </Link>
  ) : (
    <></>
  );
}
