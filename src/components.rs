use maud::{html, Markup};

pub fn html(content: Markup) -> Markup {
    return html! {
        html {
            head {
                title {"Hal Nguyen"}
                link rel="stylesheet" type="text/css" href="/assets/styles.css" {}
                meta name="viewport" content="width=device-width,initial-scale=1.0" {}
                meta name="author" content="Hal Nguyen" {}
                meta name="description" content="4th-year Computer Science student at University of Victoria!" {}
            }
            body class="text-slate-50 scroll-smooth" { (content) }
        }
    };
}

pub fn li(content: Markup) -> Markup {
    html! {(content)}
}

pub fn section(href: &str, content: Markup) -> Markup {
    html! {
        section #(href) class="my-5" {
            h2 class="text-4xl font-semibold my-5" {
                (href)
            }
            (content)
        }
    }
}

pub fn exp(
    title: &str,
    affiliate: &str,
    date: (&str, &str),
    responsibilities: Vec<&str>,
) -> Markup {
    html! {
        section {
            div class="flex justify-between items-center mb-3 mt-6" {
                h3 class="text-lg text-slate-500 font-bold" {
                    (title)
                    span class="text-sm text-slate-50 font-medium" {" @ " (affiliate)}
                }
                span class="text-sm text-slate-500" {(date.0) " - " (date.1)}
            }

            ul class="list-disc pl-4" {
                @for &r in &responsibilities {
                    li {
                        (r)
                    }
                }
            }
        }
    }
}

pub fn project(
    title: &str,
    github: Option<&str>,
    live: Option<&str>,
    tools: Vec<&str>,
    content: Markup,
) -> Markup {
    html! {
        section class="flex flex-col gap-2 mt-6" {
            h3 class="text-xl text-slate-500 font-bold" {(title)}

            div class="flex gap-3 text-sm underline italic" {
                @if let Some(url) = github {
                    a href=(url) target="_blank" {"Github"}
                }
                @if let Some(url) = live {
                    a href=(url) target="_blank" {"Live site"}
                }
            }

            (content)

            div class="flex flex gap-2 text-xs" {
                @for tool in tools {
                    span class="p-2 rounded-lg bg-slate-900 w-max" {(tool)}
                }
            }
        }
    }
}
