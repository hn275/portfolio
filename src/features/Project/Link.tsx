import { AnchorHTMLAttributes } from "react";
import cx from "classnames";

export function Link(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { children, className } = props;

  return (
    <a
      {...props}
      className={cx([
        "flex gap-2 items-center rounded-full p-2 bg-slate-900 text-white",
        "bg-brand-50 lg:bg-slate-900 lg:hover:bg-brand-50",
        "text-base lg:hover:text-slate-900",
        "transition-smooth",
        className,
      ])}
    >
      {children}
    </a>
  );
}
