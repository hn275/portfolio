import Collabify from "assets/collabify/collabify_0.png";
import GradeTracker from "assets/gradetracker/gradetracker_0.png";
import StudySpaceFinder from "assets/spf/spf_0.png";
import GoVikes from "assets/goVikes/goVikes_0.png";
import { ProjectProps } from "features/Project/types";
import { WorkProps } from "features/Work/types";

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
    imageSrc: GoVikes,
    fromLeft: false,
    tags: ["#backend", "#restAPI"],
  },
  {
    title: "Study Space Finder",
    stacks: ["Python", "FastAPI", "SQLite", "Docker", "TypeScript", "React.js"],
    github: "https://github.com/hn275/StudySpaceFinder",
    liveSite: "https://study-space-finder.vercel.app/",
    imageSrc: StudySpaceFinder,
    fromLeft: true,
    tags: ["#backend", "#restAPI"],
  },
];

export const WORK: WorkProps[] = [
  {
    work: "Collabify (start-up)",
    title: "Team Lead",
    duration: "October 2022 - February 2023",
    tasks: [
      "Coordinated developers to meet task requirements.",
      "Reviewed and ensured code quality, wrote unit tests.",
      "Helped debug deployments.",
      "Designed and developed authentication system.",
      "Developed UI as per Figma designs.",
      "Migrated database (MongoDB → PostGreSQL).",
    ],
  },
  {
    work: "TELUS Retails LTD.",
    title: "Sales Representative",
    duration: "April 2017 - December 2022",
    tasks: [
      "Communicated and delivered solutions to meet clients requirements.",
      "Managed client accounts, assisted with bill payments.",
      "Handled credit checks, resolved potential fraudulent accounts.",
      "Handled inventories, returns, and various product shipments.",
      "Migrated client's home solutions from legacy technologies.",
      "Apple Ambassador (2020 - 2021).",
      "Google Ambassador (2021 - 2022).",
    ],
  },
];
