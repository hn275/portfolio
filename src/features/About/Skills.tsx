import cx from "classnames";
import { AnimatedUnderline } from "components";
import { motion } from "framer-motion";
import { FadeIn } from "layout";
import shortid from "shortid";

export function Skills() {
  const skills = [
    {
      title: "Languages",
      stacks: [
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
          label: "Go (Golang)",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          label: "TypeScript",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          label: "JavaScript",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          label: "Python",
        },
      ],
    },
    {
      title: "Technologies",
      stacks: [
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
          label: "PostGreSQL",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
          label: "SQLite",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg",
          label: "Docker",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          label: "React.js",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
          label: "TailwindCSS",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
          label: "Node.js",
        },
      ],
    },
    {
      title: "Tools",
      stacks: [
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          label: "Git",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-plain.svg",
          label: "Vim/NeoVim",
        },
      ],
    },
  ];

  return (
    <>
      {skills.map(({ title, stacks }) => (
        <FadeIn key={shortid.generate()}>
          <motion.section>
            <motion.h2 className="text-xl mb-5">
              <AnimatedUnderline>{title}</AnimatedUnderline>
            </motion.h2>
            <motion.ul
              className={cx(
                "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-5 place-items-center"
              )}
            >
              {stacks.map(({ label, src }) => (
                <motion.li
                  key={shortid.generate()}
                  className="flex flex-col items-center gap-3"
                >
                  <img src={src} alt={label} className="w-20 md:w-16 lg:w-20" />
                  <p className="text-sm text-slate-500">{label}</p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>
        </FadeIn>
      ))}
    </>
  );
}
