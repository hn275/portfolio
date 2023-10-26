import { Project } from "./types";
import cx from "classnames";
import { BsGithub } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { SlideIn } from "layout";
import { AnimatedUnderline, Image } from "components";
import { Link } from "./Link";

interface Props extends Project {
    children: ReactNode;
    className?: string;
}

export function ProjectCard(props: Props) {
    const {
        imageSrc,
        title,
        liveSite,
        fromLeft,
        stacks,
        github,
        children,
        className,
        wip,
    } = props;
    return (
        <SlideIn
            fromLeft={fromLeft}
            className={cx([
                "grid lg:grid-cols-[60%,1fr] relative",
                "shadow-main",
                "lg:rounded-md overflow-hidden",
                "h-max min-h-[400px] lg:min-h-max",
                "mx-auto lg:w-[98%] w-full",
                className,
            ])}
        >
            <div
                className={cx(
                    "bg-white dark:bg-slate-800",
                    "lg:p-3",
                    "flex items-center",
                )}
            >
                <Image
                    src={imageSrc}
                    className={cx(
                        "rounded-sm hidden lg:block",
                        "h-full w-auto object-fit",
                    )}
                />
            </div>

            <motion.section
                className={cx([
                    "overflow-y-hidden",
                    "absolute top-0 left-0 bottom-0 right-0 lg:h-auto lg:relative",
                    "flex flex-col gap-3 p-5",
                    "dark:bg-gradient-to-b from-slate-800/90 to-slate-800/100 bg-white dark:lg:bg-slate-800",
                    "h-full",
                ])}
            >
                <motion.h2
                    className={cx([
                        "text-main text-lg md:text-xl relative w-max isolate",
                    ])}
                >
                    <AnimatedUnderline h={9}>{title}</AnimatedUnderline>
                    {wip && (
                        <span className="text-sm text-secondary ml-2">
                            &#123;in development&#125;
                        </span>
                    )}
                </motion.h2>

                <p className="text-sm text-slate-400">{stacks.join(", ")}</p>

                <div className="flex flex-col gap-1 text-main overflow-y-hidden overflow-x-hidden h-full">
                    {children}
                </div>

                <div className="flex gap-3 items-center justify-end">
                    {github && (
                        <Link href={github} target="_blank">
                            <BsGithub title={github} className="" />
                        </Link>
                    )}
                    {liveSite && (
                        <Link href={liveSite} target="_blank">
                            <MdOutlineComputer title={liveSite} className="" />
                        </Link>
                    )}
                </div>
            </motion.section>
        </SlideIn>
    );
}
