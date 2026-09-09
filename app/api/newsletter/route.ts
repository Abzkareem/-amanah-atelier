import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body ?? {};

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // TODO: connect this to a real email service provider, e.g. Mailchimp or Klaviyo,
  // by calling their API here with process.env.MAILCHIMP_API_KEY / list ID, etc.
  console.log("Newsletter signup:", email);

  return NextResponse.json({ ok: true });
}
