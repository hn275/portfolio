import shortid from "shortid";

export enum LINKS {
  email = "haln_01@proton.me",
  linkedin = "https://www.linkedin.com/in/hal-nguyen-48a22b22a/",
  github = "https://github.com/hn275",
}

export const PROJECTS = {
  collabify: {
    key: shortid.generate(),
    title: "Collabify",
    stacks: ["PostGreSQL", "Node.js", "Prisma", "Next.js", "Material UI"],
    github: null,
    liveSite: "https://collabify.space",
  },
  govikes: {
    key: shortid.generate(),
    title: "GoVikes",
    stacks: ["Go", "Gin", "Docker"],
    github: "https://github.com/hn275/govikes",
    liveSite: null,
  },
  gradetracker: {
    key: shortid.generate(),
    title: "GradeTracker",
    stacks: [
      "Go",
      "Docker",
      "PostGreSQL",
      "TypeScript",
      "React.js",
      "Node.js",
      "TailwindCSS",
    ],
    github: "https://github.com/hn275/gradetracker",
    liveSite: null,
  },
  studySpaceFinder: {
    key: shortid.generate(),
    title: "Study Space Finder",
    stacks: [
      "Python",
      "FastAPI",
      "SQLite",
      "Docker",
      "TypeScript",
      "React.js",
      "Node.js",
    ],
    github: "https://github.com/hn275/StudySpaceFinder",
    liveSite: "https://study-space-finder.vercel.app/",
  },
};
