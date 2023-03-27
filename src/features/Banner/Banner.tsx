import BannerSVG from "assets/banner.svg";
import { SocialLinks } from "components";
import cx from "classnames";
import { motion, Variants } from "framer-motion";

export function Banner() {
  const variants: Variants = {
    initBanner: { opacity: 0, scale: 1.2 },
    animatedBanner: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, delay: 0.5 },
    },

    initHeader: { y: 10, opacity: 0 },
    animatedHeader: { y: 0, opacity: 1, transition: { delay: 0.3 } },

    initTagline: { y: 10, opacity: 0 },
    animatedTagline: { y: 0, opacity: 1, transition: { delay: 0.4 } },

    initSocials: { y: 10, opacity: 0 },
    animatedSocials: { y: 0, opacity: 1, transition: { delay: 0.5 } },

    initResume: { x: -20, opacity: 0 },
    animatedResume: { x: 0, opacity: 1, transition: { delay: 0.6 } },

    initPortfolio: { x: 20, opacity: 0 },
    animatedPortfolio: { x: 0, opacity: 1, transition: { delay: 0.7 } },
  };
  return (
    <>
      <motion.img
        variants={variants}
        initial="initBanner"
        animate="animatedBanner"
        src={BannerSVG}
        className="h-80"
      />

      <div className="flex flex-col justify-center items-center gap-4 text-md">
        <motion.h1
          variants={variants}
          initial="initHeader"
          animate="animatedHeader"
          className="font-bold text-brand-100 text-2xl md:text-5xl"
        >
          Hal Nguyen
        </motion.h1>
        <motion.p
          variants={variants}
          initial="initTagline"
          animate="animatedTagline"
          className="text-lg group"
        >
          <span className="relative isolate font-semibold">
            Full-stack
            <span
              className={cx([
                "absolute bottom-0 left-0 w-full h-2",
                "bg-brand-50/40 -z-10",
              ])}
            />
          </span>
          &nbsp;Developer
        </motion.p>

        <motion.div
          variants={variants}
          initial="initSocials"
          animate="animatedSocials"
        >
          <SocialLinks className="flex flex-row gap-3 text-2xl" />
        </motion.div>
      </div>

      <div className="flex gap-3">
        <motion.div
          variants={variants}
          initial="initResume"
          animate="animatedResume"
        >
          <a className="btn btn-primary" target="_blank">
            Resume
          </a>
        </motion.div>
        <motion.div
          variants={variants}
          initial="initPortfolio"
          animate="animatedPortfolio"
        >
          <a href="#portfolio" className="btn btn-outline">
            Portfolio
          </a>
        </motion.div>
      </div>
    </>
  );
}
