import { Image } from "components";
import { ImgHTMLAttributes } from "react";
import cx from "classnames";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {}
export function ProjectImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  const { className } = props;
  return <Image {...props} className={cx([className])} />;
}
