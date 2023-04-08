import shortid from "shortid";
import { HTMLAttributes } from "react";
import { LINKS } from "lib/links";
import { scrollToID } from "lib/scrollToID";
import { MdAlternateEmail } from "react-icons/md";
import { FiGithub, FiLinkedin } from "react-icons/fi";

interface Props extends HTMLAttributes<HTMLUListElement> {
  onClose?: () => void;
}

export function SocialLinks({ onClose, className }: Props) {
  const links = [
    {
      alt: "LinkedIn",
      href: LINKS.linkedin,
      icon: <FiLinkedin title="LinkedIn" />,
    },
    {
      alt: "github",
      href: LINKS.github,
      icon: <FiGithub title="GitHub" />,
    },
  ];

  function handleEmailClick() {
    scrollToID("#contact");
    if (onClose) onClose();
  }

  return (
    <ul className={className}>
      {links.map(({ alt, href, icon }) => (
        <li
          key={shortid.generate()}
          className="lg:hover:scale-125 transition-smooth"
        >
          <a href={href || undefined} aria-label={alt} target="_blank">
            {icon}
          </a>
        </li>
      ))}
      <li className="lg:hover:scale-125 transition-smooth">
        <a role="button" onClick={handleEmailClick}>
          <MdAlternateEmail title="email" />
        </a>
      </li>
    </ul>
  );
}
