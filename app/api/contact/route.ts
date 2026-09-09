import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body ?? {};

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // TODO: send this via a real email service, e.g. Resend:
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Amanah Atelier <hello@amanahatelier.com>",
  //   to: "hello@amanahatelier.com",
  //   subject: `New message from ${name}`,
  //   text: `${email}\n\n${message}`,
  // });
  //
  // For now this just logs it so you can confirm the form works end to end.
  console.log("Contact form submission:", { name, email, message });

  return NextResponse.json({ ok: true });
}
