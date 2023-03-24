import { HTMLAttributes } from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { NavLink } from "./Nav/NavLink";

interface Props extends HTMLAttributes<HTMLDivElement> {
  _title: string;
  _stacks: string[];
  _github: string | null;
  _live: string | null;
}

export function Project(props: Props) {
  const { _title, _stacks, _github, _live, children } = props;
  return (
    <section
      {...props}
      className="max-w-lg bg-gray-800 p-5 rounded-sm shadow-lg mx-auto"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl text-brand-100 uppercase">{_title}</h2>

        <p className="text-sm">{_stacks.join(", ")}</p>

        <div className="w-max flex items-center gap-4 text-sm">
          {_github && (
            <NavLink href={_github} className="flex gap-2 items-center">
              git repo
              <BsGithub title={_github} />
            </NavLink>
          )}

          {_live && (
            <NavLink href={_live} className="flex gap-2 items-center">
              live site <FiExternalLink title={_live} />
            </NavLink>
          )}
        </div>
      </div>

      <hr className="my-5 opacity-40" />

      <div className="space-y-2">{children}</div>
    </section>
  );
}
