import { NextResponse } from "next/server";

//  ------------------------------ | API - MAILERLITE SUBSCRIBE | ------------------------------  //

// POST handler for /api/subscribe
export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    // MailerLite API endpoint
    const mailerLiteUrl = `${process.env.MAILERLITE_API_ENDPOINT}/subscribers`;

    // Build request body
    const body: Record<string, unknown> = { email };

    // Only include groups if configured
    const groupEnv = process.env.MAILERLITE_GROUP?.trim();
    if (groupEnv) {
      body.groups = groupEnv.replaceAll(" ", "").split(",").filter(Boolean);
    }

    // Make the POST request to MailerLite
    const response = await fetch(mailerLiteUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("MailerLite API error:", errorData);
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: response.status }
      );
    }

    // Handle successful response
    return NextResponse.json(
      { message: "Subscribed successfully!" },
      { status: 200 }
    );
  } catch (error) {
    // Handle failure response
    console.error("Error subscribing:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
