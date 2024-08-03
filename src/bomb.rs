use crate::components::html;
use maud::{html, Markup};

pub async fn bomb() -> Markup {
    return html(html! {
        script src="/assets/scripts.js" {}

        header class="my-20 mx-auto w-max flex flex-col items-center gap-3" {
            h1 class="text-3xl font-bold" {
                code {
                    ":(){:|:&};:"
                }
            }
            span class="opacity-70 text-xs" {
                "by ChatGPT"
            }
        }

        main class="w-max mx-auto max-w-screen-sm flex flex-col gap-5" {
            p {
               "A forkbomb, represented by the code snippet "
                code { ":(){:|:&};:" }
               ", is a type of denial-of-service (DoS) attack in Unix-like operating systems.
               It exploits the system's process creation mechanism by recursively spawning copies 
               of itself, quickly consuming all available system resources. This leads to a 
               situation where legitimate processes are starved of CPU time and memory, effectively 
               rendering the system unresponsive. The simplicity and destructive potential of a 
               forkbomb highlight the importance of implementing proper resource limits and process 
               control measures in operating systems to mitigate such vulnerabilities."
            }

            p {
                "The forkbomb comes in many forms, the code snippet just happened to be for
                Unix-like terminals. In a browser, it could also be of the form:"
            }

            div class="p-3 flex justify-center"{
                code class="bg-slate-800 p-5 rounded-md" {
                    "var foo = \"foo\"; while (true) { foo = foo + foo; }"
                }
            }

            p {
                "The snippet effectively created a string " code {"foo"} " and "
                "go into a infinite loop and concatenates the string with itself before reassigns "
                "the result back to " code {"foo"} "."
            }

            p {
                "Simple, yet effective! Just like the code that is running in your browser this whole time."
            }
        }
    });
}
