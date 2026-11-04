import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateContactForm, ContactFormData } from "@/lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const destinationEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL || "rajank5038383@gmail.com";

    // Send formatted email via Resend
    const { data, error: sendError } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [destinationEmail],
      replyTo: body.email,
      subject: `[Portfolio Inquiry] ${body.subject} — from ${body.name}`,
      text: `New contact message from Rajan Jaiswal Portfolio\n\nSender: ${body.name}\nEmail: ${body.email}\nSubject: ${body.subject}\n\nMessage:\n${body.message}\n`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #17243A; max-width: 600px; margin: 0 auto; border: 1px solid #E4E8F0; border-radius: 12px; padding: 24px; background-color: #FFFFFF;">
          <div style="border-bottom: 2px solid #5577E8; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #17243A; margin: 0; font-size: 20px;">New Portfolio Contact Message</h2>
            <p style="color: #667085; margin: 4px 0 0; font-size: 13px;">Received from your personal website contact form</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #667085; width: 90px; font-weight: 600;">Sender:</td>
              <td style="padding: 6px 0; color: #17243A; font-weight: bold;">${body.name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #667085; font-weight: 600;">Email:</td>
              <td style="padding: 6px 0;"><a href="mailto:${body.email}" style="color: #5577E8; text-decoration: none;">${body.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #667085; font-weight: 600;">Subject:</td>
              <td style="padding: 6px 0; color: #17243A;">${body.subject}</td>
            </tr>
          </table>

          <div style="background-color: #F8F9FC; border: 1px solid #E4E8F0; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
            <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #667085; letter-spacing: 0.5px;">Message Content:</p>
            <p style="margin: 0; white-space: pre-wrap; font-size: 14px; color: #17243A;">${body.message}</p>
          </div>

          <p style="font-size: 12px; color: #667085; margin: 0; border-top: 1px solid #E4E8F0; padding-top: 12px;">
            Tip: You can directly click <strong>Reply</strong> in your email client to reply to <strong>${body.name}</strong>.
          </p>
        </div>
      `,
    });

    if (sendError) {
      console.error("Resend API delivery error:", sendError);
      return NextResponse.json(
        {
          success: false,
          message:
            "Could not dispatch email. Please reach out directly to rajank5038383@gmail.com.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you, Rajan has received your message and will respond shortly.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "An unexpected error occurred. Please try contacting via direct email.",
      },
      { status: 500 }
    );
  }
}
