import { AnchorHTMLAttributes } from "react";
import cx from "classnames";

export function NavLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { children, className } = props;

  return (
    <a
      {...props}
      target="_blank"
      className={cx([
        "text-gray-400 hover:text-brand-200",
        "transition-colors duration-100 ease-linear",
        className,
      ])}
    >
      {children}
    </a>
  );
}
