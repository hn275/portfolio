import Collabify from "./assets/collabify.png";
import GradeTracker from "./assets/gradeTracker.png";
import StudySpaceFinder from "./assets/ssf.png";
import GoVikes from "./assets/goVikes.png";
import { ProjectProps } from "./types";

export const PROJECTS: ProjectProps = {
  collabify: {
    title: "Collabify",
    stacks: ["PostGreSQL", "Prisma", "Next.js", "Material UI"],
    github: null,
    liveSite: "https://collabify.space",
    imageSrc: Collabify,
    fromLeft: true,
    wip: false,
  },
  gradeTracker: {
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
    wip: true,
  },
  goVikes: {
    title: "Go-Vikes",
    stacks: ["Go", "Gin", "Docker"],
    github: "https://github.com/hn275/govikes",
    liveSite: "",
    imageSrc: GoVikes,
    fromLeft: false,
  },
  studySpaceFinder: {
    title: "Study Space Finder",
    stacks: ["Python", "FastAPI", "SQLite", "Docker", "TypeScript", "React.js"],
    github: "https://github.com/hn275/StudySpaceFinder",
    liveSite: "https://studyspace.vikelabs.ca/",
    imageSrc: StudySpaceFinder,
    fromLeft: true,
    wip: false,
  },
};
