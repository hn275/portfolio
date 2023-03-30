import BannerSVG from "assets/banner.svg";
import { SocialLinks } from "components";
import { motion, Variants } from "framer-motion";
import { scrollToID } from "lib/scrollToID";

export function Banner() {
  const vars: Variants = {
    hidden: { width: 0 },
    show: { width: "100%" },
  };

  return (
    <>
      <img src={BannerSVG} className="max-h-72" />

      <motion.div className="flex flex-col justify-center items-center gap-4 text-md">
        <h1 className="font-bold text-brand-50 text-2xl md:text-5xl">
          Hal Nguyen
        </h1>

        <motion.p className="text-lg group">
          <motion.span className="relative isolate font-semibold">
            Full-stack
            <motion.span variants={vars} className="underline-accent" />
          </motion.span>
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
