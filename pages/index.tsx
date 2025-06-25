import { Code } from "@heroui/code";
import {
  DefaultLayout,
  Container,
  Section,
  SectionBody,
} from "@/layouts/default";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";
import { experiences } from "@/content/experiences";
import { ExperienceCard } from "@/components/ExperienceCard";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Contact, contacts } from "@/components/Contact";
import { Link } from "@heroui/link";
import { Typewriter } from "react-simple-typewriter";

export default function IndexPage() {
  const forkBomb = ":(){:|:&};:";

  return (
    <DefaultLayout>
      <section id="#" className="grid justify-center items-center h-[100vh]">
        <Container className="text-[0.9rem] md:text-[1rem] lg:text-[1.5rem]">
          <h1 className="text-primary font-bold text-[2.5em]">
            hey! my name is hal.
          </h1>

          <div className="text-[1em] md:text-[1em]">
            I am a{" "}
            <span className="text-default-800 font-bold italic">
              back-end engineer
            </span>
            &nbsp;@&nbsp;
            <Link
              href="https://vsc.eco"
              target="_blank"
              className="text-[1em] font-bold underline text-primary"
            >
              VSC Network
            </Link>
            .
          </div>
        </Container>
      </section>

      <Container>
        <Section header="About" id="about">
          <SectionBody className="self-center lg:max-w-[60ch]">
            <span className="text-default-800 font-bold text-xl">
              Hello 👋!
            </span>
            <p>
              At my day job, I'm working on decentralized infrastructure for
              verifiable sustainability — building{" "}
              <span className="font-bold italic">distributed systems</span>
              ,&nbsp;
              <span className="font-bold italic">scalable services</span>,
              and&nbsp;
              <span className="font-bold italic">DevOps</span> related things.
            </p>

            <p>
              Outside of software, I’m a&nbsp;
              <span className="font-bold italic">rock climber</span>, and a
              seasoned{" "}
              <Popover backdrop="blur">
                <PopoverTrigger>
                  <span className="font-bold underline cursor-pointer italic">
                    guitar
                  </span>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">
                      Current Guitar Goal
                    </div>
                    <div className="text-tiny">
                      PRS SE NF3 with Rosewood Fingerboard 👌
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              &nbsp;noodler!
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
