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

export default function IndexPage() {
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
          <SectionBody className="self-center lg:max-w-[60ch]">
            <span className="font-bold">Hello 👋!</span>
            <p>
              I am a recent grad year as a Computer Science student at
              University of Victoria, with a strong focus on Networking and
              Information Security. Beyond my academic pursuits, I'm deeply
              passionate about Cryptography, Linux, and Free and Open Source
              Software.
            </p>
            <p>
              My journey through the tech industry has led me to roles at
              various startups and freelancing opportunities, where I've
              authored code as a full-stack software developer. These
              experiences have introduced me to the modern web technologies, and
              standard security practices.
            </p>
            <p>
              Motivated to learn, I constantly seek to leverage my skills and
              expertise to contribute meaningfully to the realms of
              cybersecurity and open-source innovation.
            </p>
          </SectionBody>
        </Section>
      </Container>

      <Container>
        <Section id="experiences" header="Experiences">
          <SectionBody className="flex flex-col justify-center items-center gap-5 mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={`exp${index}`} {...exp} />
            ))}
          </SectionBody>
        </Section>
      </Container>

      <Container>
        <Section id="projects" header="Projects">
          <SectionBody className="flex flex-col justify-center items-center gap-5 mx-auto max-w-[65ch] w-full bg-red-500">
            {projects.map((exp, index) => (
              <ProjectCard key={`exp${index}`} {...exp} />
            ))}
          </SectionBody>
        </Section>
      </Container>
    </DefaultLayout>
  );
}
