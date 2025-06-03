import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { ExperienceProps } from "@/content/experiences";

interface ExperienceCardProps extends ExperienceProps {}

export function ExperienceCard(p: ExperienceCardProps) {
  return (
    <Card className="p-2">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col items-start justify-start w-full md:flex-row md:justify-between md:items-center">
          <p className="text-lg font-bold">{p.company}</p>
          <p className="text-small text-default-500">{p.position}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <ul className="flex flex-col gap-2 list-disc list-outside">
          {p.tasks.map((task, index) => (
            <li key={`${index}`} className="ml-4">
              {task}
            </li>
          ))}
        </ul>
      </CardBody>
      <Divider />
      <CardFooter className="justify-center">
        <span className="text-small text-default-500 text-center">
          {p.timeStart} - {p.timeEnd}
        </span>
      </CardFooter>
    </Card>
  );
}
