import { AnchorHTMLAttributes } from "react";
import CV from "./Resume.pdf";

export function Resume(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a {...props} href={CV} target="_blank">
            Resume
        </a>
    );
}
