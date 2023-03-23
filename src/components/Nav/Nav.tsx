import cx from "classnames";
import Logo from "assets/logo.svg";
import { CgMenuLeft } from "react-icons/cg";
import { BsChevronLeft, BsGithub, BsLinkedin } from "react-icons/bs";
import { useToggle } from "hooks";
import { AnimatePresence, motion } from "framer-motion";
import shortid from "shortid";

interface Props {}

export function Nav({}: Props) {
  const { open, onOpen, onClose } = useToggle();

  const links = [
    { key: shortid.generate(), text: "Projects", href: "#projects" },
    {
      key: shortid.generate(),
      text: "Work Experience",
      href: "#experiences",
    },
    { key: shortid.generate(), text: "Educations", href: "#educations" },
    { key: shortid.generate(), text: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      key: shortid.generate(),
      icon: <BsLinkedin />,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/hal-nguyen-48a22b22a/",
    },
    {
      key: shortid.generate(),
      icon: <BsGithub />,
      text: "Github",
      href: "https://github.com/hn275",
    },
  ];

  return (
    <>
      <nav
        className={cx([
          "sticky top-0 left-0 right-0",
          "h-14 lg:h-24",
          "bg-gray-900/5 backdrop-blur z-50 isolate",
          "border-b border-gray-500/10",
        ])}
      >
        <div
          className={cx([
            "max-w-[1280] mx-auto relative",
            "flex items-center h-full lg:flex-row lg:justify-between",
            "lg:px-10",
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
          />

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                id="overlay"
                className="overlay absolute top-0 left-0 w-[100vw] h-[100vh] lg:hidden"
              />
            )}
          </AnimatePresence>

          <div
            id="nav-links"
            className={cx([
              "fixed left-0 top-0 bottom-0 lg:bg-transparent",
              "lg:static lg:translate-x-0",
              { "-translate-x-full": !open },
              "transition-all duration-200 ease-out",
              "w-3/4 md:w-1/2 lg:w-max",
              "p-5 pb-10 pl-10 md:pl-5 lg:px-0",
              "flex flex-col items-center gap-10",
              "h-[100vh] lg:h-max z-50 bg-gray-800",
              "text-gray-50",
              "lg:mt-6 lg:flex lg:flex-row",
            ])}
          >
            <BsChevronLeft
              className="lg:hidden self-end"
              role="button"
              onClick={onClose}
            />

            <ul className="flex flex-col lg:flex-row gap-5">
              {links.map(({ key, href, text }, index) => (
                <li key={key} className="relative">
                  <span className="font-mono text-gray-500">
                    {index.toString().padStart(2, "0")}.&nbsp;
                  </span>

                  <a
                    href={href}
                    className="relative text-gray-200 font-mono font-semibold group"
                  >
                    {text}
                    <span
                      className={cx([
                        "absolute bottom-0 left-0 block",
                        "h-[2px] w-0 lg:group-hover:w-full bg-brand-100 skew-x-12",
                        "transition-all duration-150",
                      ])}
                    />
                  </a>
                </li>
              ))}
            </ul>

            <ul className="w-full flex justify-center items-end gap-4 grow lg:w-max lg:ml-3">
              {socials.map(({ text, key, icon, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    aria-label={text}
                    target="_blank"
                    className="text-xl lg:text-md hover:text-brand-200 transition-all duration-200"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
