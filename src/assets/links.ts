export type SocialLink = {
	icon: string;
	href: string;
};
export const email: string = "haln_01@proton.me";
export const links: SocialLink[] = [
	{ icon: "cib:linkedin", href: "https://www.linkedin.com/in/hn275/" },
	{ icon: "cib:github", href: "https://github.com/hn275" },
	{ icon: "cib:mail-ru", href: `mailto:${email}` },
];
