import cx from "classnames";
import { AnimatedUnderline } from "components";
import { FadeIn } from "layout";
import shortid from "shortid";
import { motion } from "framer-motion";

export function Skills() {
  const skills = [
    {
      name: "Languages",
      stacks: ["Go", "TypeScript", "JavaScript", "Python", "Rust", "C++"],
    },
    {
      name: "Technologies",
      stacks: [
        "PostGreSQL",
        "SQLite",
        "Docker",
        "Node.js",
        "React.js",
        "Next.js",
        "TailwindCSS",
      ],
    },
    {
      name: "Tools",
      stacks: ["Git/GitHub", "Vim/NeoVim", "Linux"],
    },
  ];

  return (
    <>
      {skills.map(({ name, stacks }, index) => (
        <FadeIn
          delay={(index + 0.2) * 0.2}
          key={shortid.generate()}
          amount={0.7}
          className={cx("w-full", "flex flex-col gap-5")}
        >
          <motion.h3 className="font-semibold text-xl">
            <AnimatedUnderline>{name}</AnimatedUnderline>
          </motion.h3>

          <ul className={cx("flex flex-wrap gap-2")}>
            {stacks.map((stack) => (
              <li key={shortid.generate()}>
                <p
                  className={cx(
                    "py-2 px-3 rounded-md text-sm",
                    "bg-white dark:bg-slate-800 text-slate-500 dark:text-brand-50",
                    "shadow-main"
                  )}
                >
                  {stack}
                </p>
              </li>
            ))}
          </ul>
        </FadeIn>
      ))}
    </>
  );
}
