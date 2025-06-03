import { Code } from "@heroui/code";
import {
  DefaultLayout,
  Container,
  Section,
  SectionBody,
} from "@/layouts/default";
import { experiences } from "@/content/experiences";
import { ExperienceCard } from "@/components/ExperienceCard";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Contact, contacts } from "@/components/Contact";

export default function IndexPage() {
  const forkBomb = ":(){:|:&};:";
  return (
    <DefaultLayout>
      <section id="#">
        <Container className="text-[1rem] md:text-[2rem] h-[90vh] grid items-center">
          <div className="py-10 md:py-20 px-10">
            <h1 className="text-primary font-bold opacity-90 text-[2.5em]">
              hey! my name is hal.
            </h1>

            <div className="text-[1.5em] opacity-70">
              <p>Computer Science Graduate,</p>
              <p>Software Developer,</p>
              <p>Cryptography Enthusiast</p>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <Section header="About" id="about">
          <SectionBody className="self-center lg:max-w-[60ch] text-default-600">
            <span className="text-default-800 font-bold text-xl">
              Hello 👋!
            </span>
            <p>
              I’m a recent{" "}
              <span className="text-default-800 font-bold">
                Computer Science
              </span>{" "}
              graduate from the University of Victoria, specializing in&nbsp;
              <span className="text-default-800 font-bold">
                Computer Networking
              </span>{" "}
              and{" "}
              <span className="text-default-800 font-bold">
                Information Security
              </span>
              . My studies gave me a solid foundation in network protocols,
              secure system design, and distributed computing, fueling my
              interest in building secure, performant, and reliable software.
            </p>

            <p>
              I’ve worked as a{" "}
              <span className="text-default-800 font-bold">
                full-stack software developer
              </span>{" "}
              in both freelance and startup settings, where I built{" "}
              <span className="text-default-800 font-bold">
                client-facing applications
              </span>
              ,<span className="text-default-800">backend services</span>, and{" "}
              <span className="text-default-800 font-bold">
                secure authentication systems
              </span>
              . These roles sharpened my ability to deliver maintainable,
              production-ready code across the stack.
            </p>

            <p>
              Outside of tech, I enjoy{" "}
              <span className="text-default-800 font-bold">rock climbing</span>,{" "}
              <span className="text-default-800 font-bold">exercising</span>,
              and I am an expert when it comes to{" "}
              <span className="text-default-800 font-bold">
                guitar noodling
              </span>
              !
            </p>
          </SectionBody>
        </Section>
      </Container>

      <Container>
        <Section id="experiences" header="Experiences">
          <SectionBody className="flex flex-col justify-center items-center gap-8 mx-auto text-default-800">
            {experiences.map((exp, index) => (
              <ExperienceCard key={`exp${index}`} {...exp} />
            ))}
          </SectionBody>
        </Section>
      </Container>

      <Container>
        <Section id="projects" header="Projects">
          <SectionBody className="flex flex-col justify-center items-center gap-8 mx-auto">
            {projects.map((exp, index) => (
              <ProjectCard key={`exp${index}`} {...exp} />
            ))}
          </SectionBody>
        </Section>
      </Container>

      <Container className="mb-20">
        <Section id="contacts" header="Contacts">
          <SectionBody className="flex flex-col md:flex-row md:gap-10 justify-center items-start mx-auto">
            {contacts.map((exp, index) => (
              <Contact key={`exp${index}`} {...exp} />
            ))}
          </SectionBody>
        </Section>
      </Container>

      <span className="flex flex-col items-center mt-20 text-sm">
        <span>fun snippet to run in your terminal...</span>
        <Code>{forkBomb}</Code>
      </span>
    </DefaultLayout>
  );
}
