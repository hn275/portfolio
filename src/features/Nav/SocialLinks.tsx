import shortid from "shortid";
import { HTMLAttributes } from "react";
import { LINKS } from "lib/links";
import { scrollToID } from "lib/scrollToID";
import { MdAlternateEmail } from "react-icons/md";
import { FiGithub, FiLinkedin } from "react-icons/fi";

interface Props extends HTMLAttributes<HTMLUListElement> {
  onClose: () => void;
  className: string;
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
    onClose();
  }

  return (
    <ul className={className}>
      {links.map(({ alt, href, icon }) => (
        <li key={shortid.generate()}>
          <a
            href={href || undefined}
            aria-label={alt}
            target="_blank"
            className="hover:text-brand-50 transition-smooth"
          >
            {icon}
          </a>
        </li>
      ))}
      <li>
        <a role="button" onClick={handleEmailClick}>
          <MdAlternateEmail title="email" />
        </a>
      </li>
    </ul>
  );
}
