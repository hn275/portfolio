import Collabify from "assets/collabify/collabify_0.png";
import GradeTracker from "assets/gradetracker/gradetracker_0.png";
import { ProjectProps } from "features/Project/types";

export enum LINKS {
  email = "haln_01@proton.me",
  linkedin = "https://www.linkedin.com/in/hal-nguyen-48a22b22a/",
  github = "https://github.com/hn275",
}

export const PROJECTS: ProjectProps[] = [
  {
    title: "Collabify",
    stacks: ["PostGreSQL", "Prisma", "Next.js", "Material UI"],
    github: null,
    liveSite: "https://collabify.space",
    imageSrc: Collabify,
    fromLeft: true,
    tags: ["#fullstack", "#startup"],
  },
  {
    title: "GradeTracker",
    stacks: [
      "Go",
      "Docker",
      "PostGreSQL",
      "TypeScript",
      "React.js",
      "TailwindCSS",
    ],
    github: "https://github.com/hn275/gradetracker",
    liveSite: null,
    imageSrc: GradeTracker,
    fromLeft: false,
    tags: ["#fullstack", "#open-source"],
  },
  {
    title: "Go-Vikes",
    stacks: ["Go", "Gin", "Docker"],
    github: "https://github.com/hn275/govikes",
    liveSite: "",
    imageSrc: "",
    fromLeft: false,
    tags: ["#backend", "#restAPI"],
  },
  {
    title: "Study Space Finder",
    stacks: ["Python", "FastAPI", "SQLite", "Docker", "TypeScript", "React.js"],
    github: "https://github.com/hn275/StudySpaceFinder",
    liveSite: "https://study-space-finder.vercel.app/",
    imageSrc: "",
    fromLeft: true,
    tags: ["#backend", "#restAPI"],
  },
];
