import classNames from "classnames";
import { Image } from "components";
import { ROUTES } from "config/routes";
import { DarkMode } from "features/Nav/DarkMode";
import { LINKS } from "lib/links";
import { Link } from "react-router-dom";
import Appa from "./appa.png";
import shortid from "shortid";
import { motion, Variants } from "framer-motion";

export function Links() {
  const links = [
    { name: "Home", href: ROUTES.home },
    { name: "Collabify", href: LINKS.collabify, blank: true },
    { name: "GitHub", href: LINKS.github, blank: true },
    { name: "LinkedIn", href: LINKS.linkedin, blank: true },
  ];

  return (
    <>
      <main className="bg-main min-h-[100vh] h-full font-[Roboto] text-main py-14 px-10">
        <Image
          src={Appa}
          className="h-auto rounded-full w-1/2 mb-2 mx-auto shadow-main"
        />

        <section className="text-center my-5">
          <h2 className="font-mono font-semibold text-2xl text-accent">haln</h2>
          <p className="text-sm">I do the code, make websites, etc etc..</p>
        </section>

        <ul className="flex flex-col gap-4">
          {links.map(({ name, href, blank }, index) => (
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: (index + 3) * 0.1 },
              }}
              key={shortid.generate()}
              className="flex justify-center"
            >
              <Link
                to={href}
                target={blank ? "_blank" : ""}
                className={classNames(
                  "bg-secondary w-1/3 text-center p-3 rounded-lg shadow-main"
                )}
              >
                {name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </main>

      <div className="fixed bottom-5 left-5">
        <DarkMode className="" />
      </div>
    </>
  );
}
