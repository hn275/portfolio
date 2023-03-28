import { Image } from "components";
import { ImgHTMLAttributes } from "react";
import cx from "classnames";

export function ProjectImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  const { className } = props;
  return (
    <Image
      {...props}
      className={cx([
        "bg-gradient-to-br from-brand-50 to-brand-300",
        className,
      ])}
      loading="lazy"
    />
  );
}
