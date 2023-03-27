import { HTMLAttributes } from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  stacks: string[];
  github: string | null;
  live: string | null;
  imageSrc: string;
}

export function ProjectCard({ title, stacks, github, live, imageSrc }: Props) {
  return (
    <section className="max-w-lg bg-gray-800 p-5 rounded-sm shadow-lg mx-auto">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl text-brand-100 uppercase">{title}</h2>

        <p className="text-sm">{stacks.join(", ")}</p>

        <div className="w-max flex items-center gap-4 text-sm">
          {github && (
            <a href={github} className="flex gap-2 items-center">
              git repo
              <BsGithub title={github} />
            </a>
          )}

          {live && (
            <a href={live} className="flex gap-2 items-center">
              live site <FiExternalLink title={live} />
            </a>
          )}
        </div>
      </div>

      <hr className="my-5 opacity-40" />
    </section>
  );
}
