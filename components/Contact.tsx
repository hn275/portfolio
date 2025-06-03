import { Link, LinkProps } from "@heroui/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface ContactProps extends LinkProps {
  name: string;
  icon: React.ReactNode;
}

export const contacts: ContactProps[] = [
  {
    name: "github.com/hn275",
    href: "https://github.com/hn275",
    icon: <FaGithub />,
  },
  {
    name: "linkedin.com/in/275",
    href: "https://linkedin.com/in/hn275",
    icon: <FaLinkedin />,
  },
  {
    name: "haln_01@proton.me",
    href: "mailto:haln_01@proton.me",
    icon: <MdEmail />,
  },
];

export function Contact({ name, icon, ...props }: ContactProps) {
  return (
    <Link target="_blank" size="lg" {...props}>
      {icon} &nbsp; {name}
    </Link>
  );
}
