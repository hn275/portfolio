import { LINKS } from "assets/content";
import cx from "classnames";
import { MdContentCopy } from "react-icons/md";

interface Props {
  onAlert: () => void;
}

export function ContactMe({ onAlert }: Props) {
  function handleClick() {
    navigator.clipboard.writeText(LINKS.email);
    onAlert();
  }

  return (
    <div
      className={cx([
        "bg-gray-800 rounded-md",
        "px-5 py-3",
        "font-mono text-gray-500",
      ])}
    >
      <a
        className="text-brand-50"
        href={`mailto:${LINKS.email}`}
        target="_blank"
      >
        {LINKS.email}
      </a>
      &nbsp;
      <MdContentCopy
        role="button"
        onClick={handleClick}
        className={cx([
          "inline",
          "hover:text-gray-50",
          "transition-colors duration-200",
        ])}
      />
    </div>
  );
}
