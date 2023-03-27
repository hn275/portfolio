import { ReactNode } from "react";
import cx from "classnames";

interface Props {
  children: ReactNode;
}

export function ProjectLayout({ children }: Props) {
  return (
    <section
      className={cx([
        "lg:px-10 lg:gap-0",
        "grid lg:grid-cols-2 relative rounded-md overflow-hidden",
      ])}
    >
      {children}
    </section>
  );
}
