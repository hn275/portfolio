import { AnchorHTMLAttributes } from "react";
import cx from "classnames";

export function Link(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { children, className } = props;

  return (
    <a
      {...props}
      target="_blank"
      className={cx([
        "flex gap-2 items-center rounded-full p-2",
        "bg-slate-100 hover:bg-brand-100 dark:bg-slate-900 dark:hover:bg-brand-100",
        "text-main hover:text-white dark:hover:text-slate-900",
        "transition-smooth",
        className,
      ])}
    >
      {children}
    </a>
  );
}
