import shortid from "shortid";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HTMLAttributes } from "react";
import { LINKS } from "lib/links";

export function SocialLinks(props: HTMLAttributes<HTMLUListElement>) {
  const links = [
    {
      alt: "github",
      href: LINKS.github,
      icon: <BsGithub title="GitHub" />,
    },
    {
      alt: "LinkedIn",
      href: LINKS.linkedin,
      icon: <BsLinkedin title="LinkedIn" />,
    },
  ];

  return (
    <ul {...props}>
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
    </ul>
  );
}
