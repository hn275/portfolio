import cx from "classnames";
import Logo from "assets/logo.svg";
import { CgMenuLeft } from "react-icons/cg";
import { BsChevronLeft } from "react-icons/bs";
import { useToggle } from "hooks";
import { AnimatePresence, motion } from "framer-motion";
import shortid from "shortid";
import { HTMLAttributes } from "react";
import { useAutoHide } from "./useAutoHide";
import { scrollToID } from "lib/scrollToID";

export function Nav(props: HTMLAttributes<HTMLElement>) {
  const { open, onOpen, onClose } = useToggle();

  const ref = useAutoHide(350);

  const links = [
    {
      key: shortid.generate(),
      text: "About",
      handleClick: () => scrollToID("#about"),
    },
    {
      key: shortid.generate(),
      text: "Project",
      handleClick: () => scrollToID("#project"),
    },
    {
      key: shortid.generate(),
      text: "Contact",
      handleClick: () => scrollToID("#contact"),
    },
  ];

  return (
    <>
      <nav
        {...props}
        ref={ref}
        className={cx([
          props.className,
          "transition-smooth -translate-y-[100%]",
        ])}
      >
        <div
          className={cx([
            "max-w-[1280px] mx-auto relative",
            "flex items-center h-full lg:flex-row lg:justify-between",
            "lg:px-5",
          ])}
        >
          <CgMenuLeft
            className="w-auto h-6 lg:hidden ml-3 text-gray-50 absolute left-2 top-1/2 -translate-y-1/2"
            role="button"
            onClick={onOpen}
          />

          <img
            src={Logo}
            alt="logo"
            className={cx(["mx-auto w-20 lg:w-32 lg:mx-0"])}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
                className="bg-gray-900/80 absolute top-0 left-0 w-[100vw] h-[100vh] lg:hidden"
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
              "h-[100vh] lg:h-max z-50 bg-gray-800",
              "lg:mt-6 lg:flex lg:flex-row",
            ])}
          >
            <BsChevronLeft
              className="lg:hidden self-end"
              role="button"
              onClick={onClose}
            />

            <ul className="flex flex-col lg:flex-row gap-5">
              {links.map(({ key, text, handleClick }, index) => (
                <li key={key} className="relative">
                  <span className="font-mono text-gray-500">
                    {index.toString().padStart(2, "0")}.&nbsp;
                  </span>

                  <button
                    onClick={handleClick}
                    className="relative text-gray-200 font-mono font-semibold group"
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

            <button
              className="btn btn-outline"
              onClick={() => scrollToID("#contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
