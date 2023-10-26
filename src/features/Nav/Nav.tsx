import cx from "classnames";
import Logo from "./assets/logo.svg";
import { CgMenuLeft } from "react-icons/cg";
import { BsChevronLeft } from "react-icons/bs";
import { useToggle } from "hooks";
import { AnimatePresence, motion } from "framer-motion";
import shortid from "shortid";
import { HTMLAttributes } from "react";
import { useAutoHide } from "hooks";
import { scrollToID } from "lib/scrollToID";
import { SocialLinks } from "components";
import { DarkMode } from "./DarkMode";
import { Resume } from "features/Resume";

export function Nav(props: HTMLAttributes<HTMLElement>) {
    const { open, onOpen, onClose } = useToggle();

    const hide = useAutoHide(window.innerHeight * 0.8);

    function handleClick(id: string) {
        return () => {
            scrollToID(id);
            onClose();
        };
    }

    const links = [
        {
            text: "About",
            handleClick: handleClick("#about"),
        },
        {
            text: "Project",
            handleClick: handleClick("#project"),
        },
        {
            text: "Work",
            handleClick: handleClick("#work"),
        },
    ];

    return (
        <>
            <nav
                {...props}
                className={cx(props.className, "bg-main -translate-y-[120%]", {
                    "shadow-md shadow-gray-400/10 dark:shadow-black/20 translate-y-0":
                        !hide,
                })}
            >
                <div
                    className={cx([
                        "transition-smooth max-w-[1280px] mx-auto relative",
                        "flex items-center h-full lg:flex-row lg:justify-between",
                        "lg:px-5",
                    ])}
                >
                    <CgMenuLeft
                        className="w-auto h-6 lg:hidden ml-3 text-slate-500 dark:text-gray-50 absolute left-2 top-1/2 -translate-y-1/2"
                        role="button"
                        onClick={onOpen}
                    />

                    <img
                        src={Logo}
                        alt="logo"
                        className={cx(["mx-auto w-14 lg:w-16 lg:mx-0"])}
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        role="button"
                        aria-label="scroll-to-top"
                    />

                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                id="overlay"
                                className={cx(
                                    "bg-gray-600/10 dark:bg-gray-900/80",
                                    "absolute top-0 left-0 w-[100vw] h-[100vh] lg:hidden",
                                )}
                                onClick={onClose}
                            />
                        )}
                    </AnimatePresence>

                    <div
                        id="nav-links"
                        className={cx([
                            "fixed left-0 top-0 bottom-0 lg:bg-transparent",
                            "lg:static lg:translate-x-0",
                            { "-translate-x-full": !open },
                            "transition-smooth",
                            "w-3/4 md:w-1/2 lg:w-max",
                            "p-5 pb-10 pl-10 md:pl-5 lg:px-0",
                            "flex flex-col items-center gap-10",
                            "h-[100vh] lg:h-max z-50 bg-white dark:bg-slate-800 dark:lg:bg-transparent",
                            "lg:mt-6 lg:flex lg:flex-row",
                        ])}
                    >
                        <BsChevronLeft
                            className="lg:hidden self-end text-slate-700 dark:text-white"
                            role="button"
                            onClick={onClose}
                        />

                        <ul className="flex flex-col lg:flex-row gap-5 grow">
                            {links.map(({ text, handleClick }, index) => (
                                <li
                                    key={shortid.generate()}
                                    className="relative"
                                >
                                    <span className="font-mono text-secondary">
                                        {index.toString().padStart(2, "0")}
                                        .&nbsp;
                                    </span>

                                    <button
                                        onClick={handleClick}
                                        className="relative font-mono font-semibold group text-accent"
                                    >
                                        {text}
                                        <span
                                            className={cx([
                                                "absolute bottom-0 left-0 block",
                                                "h-[2px] w-0 lg:group-hover:w-full bg-brand-100 skew-x-12",
                                                "transition-smooth",
                                            ])}
                                        />
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col lg:flex-row gap-7 lg:gap-2 items-center">
                            <Resume className="btn btn-outline" />

                            <SocialLinks
                                onClose={onClose}
                                className="flex gap-4 lg:hidden text-brand-50 text-lg"
                            />
                            <DarkMode className="hidden lg:block" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
