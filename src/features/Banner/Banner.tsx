import BannerSVG from "./assets/banner.svg";
import { AnimatedUnderline } from "components";
import { motion } from "framer-motion";
import { scrollToID } from "lib/scrollToID";
import { Resume } from "features/Resume";
import { SocialLinks } from "components";

export function Banner() {
    return (
        <>
            <img src={BannerSVG} className="max-h-72" />

            <motion.div className="flex flex-col justify-center items-center gap-4 text-md">
                <h1 className="font-bold text-brand-200 dark:text-brand-50 text-2xl md:text-5xl">
                    Hal Nguyen
                </h1>

                <motion.p className="text-lg group text-main">
                    <AnimatedUnderline>Full-stack</AnimatedUnderline>
                    &nbsp;Developer
                </motion.p>
                <div className="flex items-center gap-4">
                    <Resume className="btn btn-main shadow-main" />
                    <a
                        className="btn btn-outline"
                        onClick={() => scrollToID("#about")}
                    >
                        Portfolio
                    </a>
                </div>

                <SocialLinks className="flex gap-3 text-xl text-accent" />
            </motion.div>
        </>
    );
}
