import { BsGithub } from "react-icons/bs";
import cx from "classnames";
import { motion } from "framer-motion";
import { MdOutlineComputer } from "react-icons/md";
import { Link } from "./Link";

export interface ProjectProps {
  title: string;
  stacks: string[];
  github: string | null;
  liveSite?: string | null;
  imageSrc: string;
  fromLeft: boolean;
  tags: string[];
}

export function ProjectCard({
  title,
  stacks,
  github,
  liveSite,
  imageSrc,
  fromLeft,
  tags,
}: ProjectProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: "all", margin: "300px" }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: fromLeft ? "-20%" : "20%" },
      }}
      className={cx([
        "max-w-lg w-full bg-slate-800 p-5 rounded-sm shadow-lg shadow-black/30 mx-auto",
        "flex flex-col gap-5",
      ])}
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl text-brand-100 uppercase">{title}</h2>
          <div className="flex gap-3">
            {github && (
              <Link href={github} aria-label="link to git repo">
                <BsGithub title={github} />
              </Link>
            )}

            {liveSite && (
              <Link href={liveSite} aria-label="link to live site">
                <MdOutlineComputer title={liveSite} />
              </Link>
            )}
          </div>
        </div>

        <p className="text-sm">{stacks.join(", ")}</p>
      </div>

      <img src={imageSrc} alt={title} />

      <div className="flex justify-between items-center">
        <p className="hidden lg:block p-3 px-4 text-sm bg-slate-900 rounded-3xl text-brand-200">
          {tags.join(" ")}
        </p>
        <button className="btn btn-outline">See more</button>
      </div>
    </motion.section>
  );
}
