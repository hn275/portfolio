use crate::components::{exp, html, li, project, section};
use maud::{html, Markup};

pub async fn home() -> maud::Markup {
    return html(maud::html! {
        (nav())

        main class="w-full max-w-screen-sm mx-auto flex flex-col gap-5 py-5 px-5" {
            (header())
            (section("About", html! {(about())}))
            (section("Experiences", html! {(experiences())}))
            (section("Projects", html! {(projects())}))

        footer class="flex flex-col justify-center items-center text-sm py-5" {
            span class="mb-3" {
                "🦀 "
                a href="https://github.com/hn275/portfolio" target="_blank" class="underline" {
                    "Built with Rust"
                }
                " 🦀"
            }

            code class="text-slate-700 p-1 rounded-md bg-slate-900 pointer-events-none" { ":(){:|:&};:" }
            }
        }
    });
}

fn projects() -> Markup {
    maud::html! {
        (project(
            "RSA from scratch",
            Some("https://github.com/hn275/rsa"),
            None,
            Vec::from(["Rust"]),
            html! {
                "RSA From Scratch is an implementation of the renowned RSA crypto-system 
                with 2048 bit security. It employs the Miller-Rabin test to verify the 
                primality of the generated numbers."
            }
        ))

        (project(
            "file-encryptor",
            Some("https://github.com/hn275/file-encryptor"),
            None,
            Vec::from(["Rust"]),
            html! {
                "A Rust program designed to encrypt/decrypt files securely using the Advanced
                Encryption Standard in Galois/Counter Mode, or AES-GCM, with a 256-bit key generated 
                by applying Scrypt, a key derivation function, on the input password to protect 
                against brute force attack."
            }
        ))

        (project(
            "Silver Rock",
            None,
            Some("https://silverrock.ca"),
            Vec::from(["Next.js", "PostgreSQL", "Node.js", "TailwindCSS"]),
            html! {
                "A website for a property developer written in NextJS, complete with a custom-built
                CMS. The website is hosted by Vercel, with it's database being provided by Supabase."
            }
        ))

    }
}

fn experiences() -> Markup {
    html! {
        (exp(
            "Full-stack Developer",
            "INSO Systems",
            ("Oct 2023", "Jan 2024"),
            Vec::from([
                "Implemented JWT and Session Cookie authentication for enhanced system security.",
                "Developed and maintained a API's with CRUD operations.",
                "Applied SQL knowledge for seamless database management and migration.",
                "Streamlined deployment and development processes using Docker."
            ]),
        ))

        (exp(
            "Front-end Developer",
            "Hey Nova",
            ("May 2023", "Nov 2023"),
            Vec::from([
                "Developed responsive and accessible UI using mordern technologies (ReactJS/NextJS, SCSS, TailwindCSS) and CMSs (Airtable, Prismic).",
                "Queried GraphQL servers and Firebase for data integration.",
                "Collaborated with external clients to deliver and implement key features.",
            ]),
        ))

        (exp(
            "Sales Representative",
            "TELUS Retails LTD.",
            ("Apr 2017", "Dec 2022"),
            Vec::from([
                "Delivered customized communication solutions to clients, ensuring integration of services tailored to their specific needs.",
                "Conducted thorough credit checks as part of the sales process to ensure financial eligibility for customers.",
                "Resolved instances of fraudulent activity by implementing effective problem-solving skills and collaborating with relevant teams.",
            ]),
        ))
    }
}

fn about() -> Markup {
    html! {
        div class="flex flex-col gap-3" {
            span class="font-bold" {
                "Hello 👋!"
            }
            p {
                "I'm a 4th year Computer Science student at University of Victoria, with a
                strong focus on "
                span class="italic font-bold" {"Networking" }
                " and "
                span class = "italic font-bold" { "Information Security" }
                ". Beyond my
                academic pursuits, I'm 
                deeply passionate about Cryptography, Linux, and Free and Open Source 
                Software."
            }

            p {
                "My journey through the tech industry has led me to roles at various
                startups and freelancing opportunities, where I've authored code as a 
                full-stack software developer. These experiences have introduced me to the 
                modern web technologies, and standard security practices."
            }

            p {
                "Motivated to learn, I constantly seek to leverage my skills and expertise
                to contribute meaningfully to the realms of cybersecurity and open-source 
                innovation."
            }
        }
    }
}

fn nav() -> Markup {
    let navlinks = [
        ("github", "https://github.com/hn275"),
        ("linkedin", "https://linkedin.com/in/hn275"),
        ("email", "mailto:haln_01@proton.me"),
    ];

    html! {
        nav class="py-5 px-3 sticky top-0 bg-slate-950/50 backdrop-blur-sm" {
            div class="max-w-screen-md mx-auto flex justify-between" {
                span class="text-lg font-bold" {
                    (li(
                        html! {
                            a  href="/" {"haln.dev"}
                        }
                    ))
                }

                div {
                    ul class="flex gap-3" {
                        @for (display, link) in &navlinks {
                            (li(
                                html! {
                                    a class="underline italic" target="_blank" href=(link) {(display)}
                                }
                            ))
                        }
                    }
                }
            }
        }
    }
}

fn header() -> Markup {
    html! {
        header class="flex flex-col justify-center items-center gap-5 mt-10 mb-5" {
            h1 class="w-max text-slate-400 text-5xl font-bold" { "Hal Nguyen" }
            div class="flex flex-col justify-center items-center text-sm italic" {
                span { "4th year Computer Science Student" }
                span { "Cryptography Enthusiast" }
            }
        }
    }
}
