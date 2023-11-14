export type Work = {
    role: string;
    employer: string;
    duration: {
        start: string;
        end: string;
    };
    tasks: Array<string>;
};

export const works: Array<Work> = [
    {
        role: "Jr. Software Developer",
        employer: "Hey Nova",
        duration: {
            start: "May 2023",
            end: "Current",
        },
        tasks: [
            "Developed responsive and accessible UI using mordern technologies (ReactJS/NextJS, SCSS, TailwindCSS) and CMSs (Airtable, Prismic).",
            "Queried GraphQL servers and Firebase for data integration.",
            "Collaborated with external clients to deliver and implement key features.",
        ],
    },
    {
        role: "Backend Developer",
        employer: "INSO System",
        duration: {
            start: "Oct 2023",
            end: "Current",
        },
        tasks: [
            "Implemented JWT and Session Cookie authentication for enhanced system security.",
            "Developedkknd maintained a API's with CRUD operations.",
            "Applied SQL knowledge for seamless database management and migration.",
            "Streamlined deployment and development processes using Docker.",
        ],
    },
    {
        role: "Sales Representative",
        employer: "TELUS Retails LTD.",
        duration: {
            start: "Apr 2017",
            end: "Dec 2020",
        },
        tasks: [
            "Delivered customized communication solutions to clients, ensuring integration of services tailored to their specific needs.",
            "Conducted thorough credit checks as part of the sales process to ensure financial eligibility for customers.",
            "Resolved instances of fraudulent activity by implementing effective problem-solving skills and collaborating with relevant teams.",
        ],
    },
];
