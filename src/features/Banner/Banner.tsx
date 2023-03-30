import BannerSVG from "./assets/banner.svg";
import { AnimatedUnderline, SocialLinks } from "components";
import { motion } from "framer-motion";
import { scrollToID } from "lib/scrollToID";

export function Banner() {
  return (
    <>
      <img src={BannerSVG} className="max-h-72" />

      <motion.div className="flex flex-col justify-center items-center gap-4 text-md">
        <h1 className="font-bold text-brand-50 text-2xl md:text-5xl">
          Hal Nguyen
        </h1>

        <motion.p className="text-lg group">
          <AnimatedUnderline className="font-semibold">
            Full-stack
          </AnimatedUnderline>
          &nbsp;Developer
        </motion.p>

        <div>
          <SocialLinks className="flex flex-row gap-3 text-2xl text-brand-300" />
        </div>
      </motion.div>

      <div className="flex items-center gap-3">
        <div>
          <a className="btn btn-primary" target="_blank">
            Resume
          </a>
        </div>
        <div>
          <a className="btn btn-outline" onClick={() => scrollToID("#about")}>
            Portfolio
          </a>
        </div>
      </div>
    </>
  );
}
