import shortid from "shortid";
import cx from "classnames";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

export function SocialLinks() {
  const links = [
    {
      key: shortid.generate(),
      alt: "email",
      href: "",
      icon: <MdAlternateEmail />,
    },
    {
      key: shortid.generate(),
      alt: "Linkedin",
      href: "",
      icon: <BsLinkedin />,
    },
    {
      key: shortid.generate(),
      alt: "github",
      href: "",
      icon: <BsGithub />,
    },
  ];

  return (
    <>
      {links.map(({ key, alt, href, icon }) => (
        <li key={key}>
          <a
            href={href}
            aria-label={alt}
            className={cx([
              "text-brand-300 hover:text-brand-50 text-3xl",
              "transition-colors duration-150",
            ])}
          >
            {icon}
          </a>
        </li>
      ))}
    </>
  );
}
