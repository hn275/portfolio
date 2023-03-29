import shortid from "shortid";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HTMLAttributes } from "react";

export function SocialLinks(props: HTMLAttributes<HTMLUListElement>) {
  const links = [
    {
      alt: "github",
      href: "https://www.github.com/hn275",
      icon: <BsGithub title="GitHub" />,
    },
    {
      alt: "LinkedIn",
      href: "https://www.linkedin.com/in/hal-nguyen-48a22b22a/",
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
