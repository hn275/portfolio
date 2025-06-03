export type ProjectProps = {
  name: string;
  tech: string[];
  desc: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: ProjectProps[] = [
  {
    name: "Portfolio",
    tech: ["Next.js"],
    desc: "Rust",
    githubUrl: "https://github.com/hn275/portfolio",
    liveUrl: "https://haln.dev",
  },
  {
    name: "file-encryptor",
    tech: ["Rust"],
    desc: "Rust",
    githubUrl: "https://github.com/hn275/file-encryptor",
  },
  {
    name: "Silver Rock",
    tech: ["TypeScript", "Next.js", "PostGreSQL"],
    desc: "Rust",
    liveUrl: "https://www.silverrock.ca/",
  },
  {
    name: "cat-api",
    tech: ["Go", "Docker", "SQLite3"],
    desc: "Rust",
    githubUrl: "https://github.com/hn275/cat-api",
    liveUrl: "https://api.haln.dev/cats",
  },
  {
    name: "distributed-storage",
    tech: ["Go", "Python", "Docker"],
    desc: "Rust",
    githubUrl: "https://github.com/hn275/distributed-storage",
  },
];
