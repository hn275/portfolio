import { WorkProps } from "./types";
import Collabify from "./assets/collabify_code.svg";
import Telus from "./assets/telus_phone.svg";

export const WORK: WorkProps = {
  collabify: {
    svg: Collabify,
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
  telus: {
    svg: Telus,
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
};
