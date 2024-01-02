import type { APIContext } from "astro";
import nodemailer from "nodemailer";

const EMAIL_ADDR: string = import.meta.env.EMAIL_ADDR;
const EMAIL_PASS: string = import.meta.env.EMAIL_PASS;
const EMAIL_TO: string = import.meta.env.EMAIL_TO;
const EMAIL_HOST: string = "smtp.gmail.com";
const EMAIL_PORT: number = 465;

// To enable on-demand rendering
// https://docs.astro.build/en/guides/server-side-rendering/
export const prerender = false;

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export async function POST({ request }: APIContext) {
  try {
    const b: ContactForm = await request.json();
    const { rejected } = await sendEmail(b);
    if (rejected.length) {
      throw new Error(`Failed to deliver email to ${EMAIL_ADDR}`);
    }
    return new Response(undefined, { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response("Something went wrong.", { status: 500 });
  }
}

function sendEmail(c: ContactForm) {
  return nodemailer
    .createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: true,
      auth: {
        user: EMAIL_ADDR,
        pass: EMAIL_PASS,
      },
    })
    .sendMail({
      from: EMAIL_ADDR,
      to: EMAIL_TO,
      subject: `Message from: ${c.name}`,
      html: `
<p style="margin-bottom:20px">
  Name: ${c.name}
  <br />
  Email: ${c.email}
  <br />
  Message:
  <br />
  ${c.message}
</p>

<a 
  style="padding:10px;background-color:black;color:white;border-radius:5px"
  href="mailto:${c.email}" target="_blank"
>
  Reply to ${c.email}
</a>
<br />
`,
    });
}
