import Profile from "./assets/profile.svg";
import { SlideIn } from "layout";
import { AnimatedUnderline } from "components";
import cx from "classnames";
import { motion } from "framer-motion";

export function About() {
  return (
    <>
      <SlideIn
        fromLeft
        className="flex flex-col gap-3 w-full max-w-[65ch] text-justify"
        amount={0.4}
      >
        <motion.p>
          I&apos;m a&nbsp;
          <span className="italic">full-stack</span>
          &nbsp;software developer who specializes in&nbsp;
          <AnimatedUnderline>Golang</AnimatedUnderline>
          &nbsp; and&nbsp;
          <AnimatedUnderline delay={0.3}>TypeScript</AnimatedUnderline>.
        </motion.p>

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
      </SlideIn>

      <SlideIn
        amount={0.4}
        className="flex flex-col gap-6 justify-center w-full lg:w-max"
      >
        <img
          src={Profile}
          alt="profile"
          className={cx(["hidden lg:block", "w-64"])}
        />
      </SlideIn>
    </>
  );
}
