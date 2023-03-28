import shortid from "shortid";
import cx from "classnames";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { HTMLAttributes } from "react";
import { scrollToID } from "lib/scrollToID";

export function SocialLinks(props: HTMLAttributes<HTMLUListElement>) {
  const links = [
    {
      key: shortid.generate(),
      alt: "LinkedIn",
      href: "https://www.linkedin.com/in/hal-nguyen-48a22b22a/",
      icon: <BsLinkedin />,
    },
    {
      key: shortid.generate(),
      alt: "github",
      href: "https://www.github.com/hn275",
      icon: <BsGithub />,
    },
  ];

  return (
    <ul {...props}>
      <li>
        <a
          aria-label="email"
          onClick={() => scrollToID("#contact")}
          className="text-brand-300 hover:text-brand-50 transition-smooth"
        >
          <MdAlternateEmail />
        </a>
      </li>
      {links.map(({ key, alt, href, icon }) => (
        <li key={key}>
          <a
            href={href || undefined}
            aria-label={alt}
            target="_blank"
            className={cx([
              "text-brand-300 hover:text-brand-50",
              "transition-smooth",
            ])}
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
