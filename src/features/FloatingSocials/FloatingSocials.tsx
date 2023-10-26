import { FiLinkedin, FiGithub } from "react-icons/fi";
import cx from "classnames";
import { LINKS } from "lib/links";
import shortid from "shortid";
import { scrollToID } from "lib/scrollToID";
import { MdAlternateEmail } from "react-icons/md";
import { useAutoHide } from "hooks";

interface Props {
    className: string;
}
export function FloatingSocials({ className }: Props) {
    const links = [
        { text: "LinkedIn", href: LINKS.linkedin, node: <FiLinkedin /> },
        { text: "GitHub", href: LINKS.github, node: <FiGithub /> },
        {
            text: "Send me an email",
            onClick: () => scrollToID("#contact"),
            node: <MdAlternateEmail />,
        },
    ];

    const hide = useAutoHide(window.innerHeight * 0.8);

    return (
        <ul
            className={cx(className, "transition-smooth", {
                "translate-x-14": hide,
            })}
        >
            {links.map(({ href, onClick, node, text }) => (
                <li
                    className="group relative hover:scale-125 transition-transform duration-200"
                    key={shortid.generate()}
                >
                    <a
                        href={href}
                        target="_blank"
                        className={cx(
                            "text-brand-50 dark:text-brand-300 text-2xl",
                            "relative cursor-pointer",
                            "hover:text-brand-300 dark:hover:text-brand-50",
                        )}
                        onClick={onClick}
                        role={onClick ? "button" : "link"}
                    >
                        {node}
                    </a>
                    <p
                        className={cx(
                            "absolute right-8 bottom-1/2 translate-y-1/2",
                            "transition-smooth break-keep w-max",
                            "text-[0.65em] text-accent shadow-main",
                            "font-semibold pointer-events-none",
                            "opacity-0 group-hover:opacity-100",
                            "scale-0 group-hover:scale-100 origin-right",
                            "bg-white dark:bg-slate-700/80 backdrop-blur-sm p-2 rounded-md",
                        )}
                    >
                        {text}
                    </p>
                </li>
            ))}
        </ul>
    );
}
