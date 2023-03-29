import Profile from "assets/profile.svg";
import { SocialLinks } from "components";
import { motion, Variants } from "framer-motion";
import cx from "classnames";

export function About() {
  const vars: Variants = {
    textHidden: { opacity: 0, x: -40 },
    textVisible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.4, duration: 0.4 },
    },
    imageHidden: { opacity: 0, x: 40 },
    imageVisible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.7, duration: 0.4 },
    },
  };
  return (
    <>
      <motion.div
        variants={vars}
        viewport={{ once: true }}
        initial="textHidden"
        whileInView="textVisible"
        className="flex flex-col gap-3 max-w-[65ch] text-justify"
      >
        <p>
          I&apos;m a&nbsp;
          <span className="italic">full-stack</span>
          &nbsp;software developer who specializes in&nbsp;
          <span className="font-semibold relative">
            Golang
            <span className="underline-accent -z-10" />
          </span>
          &nbsp; and&nbsp;
          <span className="font-semibold relative">
            TypeScript
            <span className="underline-accent" />
          </span>
          .
        </p>

        <p>
          While I&apos;m an undergrad student in the department of Computer
          Science at University of Victoria, my web development skills are
          self-taught, I started with FreeCodeCamp for the basic of HTML, CSS,
          and JavaScript, then quickly took to the internet for its infinite
          wisdom and learning materials.
        </p>

        <p>
          In my free time, I can be found rock climbing, hiking, and sometimes
          chasing the sunset.
        </p>
      </motion.div>

      <motion.div
        variants={vars}
        viewport={{ once: true }}
        initial="imageHidden"
        whileInView="imageVisible"
        className="flex flex-col gap-6 justify-center w-full lg:w-max"
      >
        <img
          src={Profile}
          alt="profile"
          className={cx(["hidden lg:block", "w-64"])}
        />
        <SocialLinks className="flex gap-4 justify-center items-center text-3xl mt-9 lg:mt-0 text-brand-300" />
      </motion.div>
    </>
  );
}
