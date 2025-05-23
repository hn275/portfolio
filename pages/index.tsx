import { DefaultLayout, Container } from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section id="#">
        <Container className="text-[1rem] md:text-[2rem] h-[70vh] grid items-center">
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
    </DefaultLayout>
  );
}
