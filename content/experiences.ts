export type ExperienceProps = {
  company: string;
  position: string;
  timeStart: string;
  timeEnd: string;
  tasks: string[];
};

export const experiences: ExperienceProps[] = [
  {
    company: "INSO Systems",
    position: "Full-stack Developer, Contract",
    timeStart: "Oct 2023",
    timeEnd: "Jan 2024",
    tasks: [
      "Developed and deployed a web platform for local homeless shelters, improving occupant management and communication.",
      "Designed a Go server and SQL database schemas support business needs, reducing query latency by an average of 20%.",
      "Deployed and maintained CI/CD pipelines, enhancing operational efficiency across development and deployment processes.",
    ],
  },

  {
    company: "Hey Nova",
    position: "Jr. Front-end Developer, Intern",
    timeStart: "May 2023",
    timeEnd: "Nov 2023",
    tasks: [
      "Contributed to Connected North, a self-learning platform for individuals of the indigenous communities.",
      "Optimized GraphQL queries, reducing client-side rendering latency by 70% through data pagination integration.",
      "Developed accessible UIs with React.js, maintained projects and resolved dependencies in the Node.js ecosystem.",
    ],
  },

  {
    company: "TELUS Communications LTD.",
    position: "Sales Representative",
    timeStart: "Apr 2017",
    timeEnd: "Dec 2022",
    tasks: [
      "Provided exceptional service by assisting customers with phone setup, account management, and bill payments.",
      "Demonstrated strong communication skills to effectively address customer inquiries and concerns.",
      "Handled administrative tasks such as inventory management and documentation accurately and efficiently.",
    ],
  },
];
