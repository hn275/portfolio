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
          I&apos;m a Computer Science student at University of Victoria,
          although in school, the majority of my skills are self-taught. Outside
          of my curriculums, I enjoy building&nbsp;
          <span className="font-semibold relative">
            <span className="underline-accent -z-10" />
            full-stack
          </span>
          &nbsp;web applications!
        </p>

        <p>
          My programming journey began when I was a Physics major, I wrote my
          first line of code in Python for a lab, and quickly I discovered a
          passion for programming. When the world went into isolation, I saw the
          opportunity to teach myself how to code, then finally made the
          academic switch to Computer Science September 2021!
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
        <SocialLinks className="flex gap-4 justify-center items-center text-3xl mt-9 lg:mt-0" />
      </motion.div>
    </>
  );
}
