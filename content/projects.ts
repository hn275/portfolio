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
    tech: ["Next.js", "Vercel"],
    desc: "A personal portfolio site built using Next.js with server-side rendering for fast, SEO-friendly performance. Styled with TailwindCSS and heroui, and written entirely in TypeScript for type safety. Hosted on Vercel, it features responsive and accessible UI, serving as a central hub for showcasing projects and skills.",
    githubUrl: "https://github.com/hn275/portfolio",
    liveUrl: "https://haln.dev",
  },
  {
    name: "file-encryptor",
    tech: ["Rust"],
    desc: "A command-line encryption tool that streams file encryption using AES-256 in Galois Counter Mode (GCM). It leverages hardware-accelerated AES instructions for performance and minimal memory use. Keys are derived from passwords using scrypt for strong resistance against brute-force attacks. Supports Additional Authenticated Data (AAD) for integrity protection and secure encryption of metadata.",
    githubUrl: "https://github.com/hn275/file-encryptor",
  },
  {
    name: "Silver Rock",
    tech: ["TypeScript", "Next.js", "Vercel", "PostGreSQL"],
    desc: "A freelance-developed web app combining a business website with a secure client management platform. It features serverless backend functions handling CRUD operations with PostgreSQL. The authentication system uses BCrypt for password hashing, JWT for token-based access, and HTTP-only cookies for session security, with middleware for route protection and authorization logic.",
    liveUrl: "https://www.silverrock.ca/",
  },
  {
    name: "cat-api",
    tech: ["Go", "Docker", "SQLite3"],
    desc: "A lightweight, Dockerized API that serves random cat images and GIFs. It automatically scrapes content and distributes it across a sharded SQLite cluster with randomized indexing to ensure fast and cache-oblivious access. CI/CD pipelines redeploy the API live on pull request merges, and it includes TLS/SSL for secure HTTPS access.",
    githubUrl: "https://github.com/hn275/cat-api",
    liveUrl: "https://api.haln.dev/cats",
  },
  {
    name: "distributed-storage",
    tech: ["Go", "Python", "Docker"],
    desc: "A research project that simulates a distributed storage system using Docker and docker-compose to model peer-to-peer networks and network latency. Implements per-node job scheduling and evaluates various load balancing strategies. Achieves up to 1200 requests/sec before performance degradation, with results visualized in Python for analysis and presentation.",
    githubUrl: "https://github.com/hn275/distributed-storage",
  },
];
