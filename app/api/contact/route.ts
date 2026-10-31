import { NextResponse } from "next/server";
import { validateContactForm, ContactFormData } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Server-side validation
    const validation = validateContactForm(body);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.errors,
          message: "Validation failed. Please verify your inputs.",
        },
        { status: 400 }
      );
    }

    // In production, forward to email service (e.g., Resend, SendGrid, or Nodemailer)
    // console.log("Received contact form submission:", {
    //   name: body.name,
    //   email: body.email,
    //   subject: body.subject,
    //   messageLength: body.message.length,
    //   timestamp: new Date().toISOString(),
    // });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you, Rajan has received your message and will respond shortly.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try contacting via direct email.",
      },
      { status: 500 }
    );
  }
}
