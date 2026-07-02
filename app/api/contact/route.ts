import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, phone, subject, message } = await req.json();

    // Validate required fields
    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Prakash.Madeb@invictakentmanagment.co.uk",
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Structured HTML email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px; text-align: left;">
          <tr>
            <td style="padding: 12px; border: 1px solid #e0e0e0; background: #f8f9fa; font-weight: bold; width: 30%; vertical-align: top;">
              Full Name
            </td>
            <td style="padding: 12px; border: 1px solid #e0e0e0; vertical-align: top;">
              ${fullName}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e0e0e0; background: #f8f9fa; font-weight: bold; vertical-align: top;">
              Email
            </td>
            <td style="padding: 12px; border: 1px solid #e0e0e0; vertical-align: top;">
              <a href="mailto:${email}">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e0e0e0; background: #f8f9fa; font-weight: bold; vertical-align: top;">
              Phone
            </td>
            <td style="padding: 12px; border: 1px solid #e0e0e0; vertical-align: top;">
              <a href="tel:${phone}">${phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e0e0e0; background: #f8f9fa; font-weight: bold; vertical-align: top;">
              Subject
            </td>
            <td style="padding: 12px; border: 1px solid #e0e0e0; vertical-align: top;">
              ${subject}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e0e0e0; background: #f8f9fa; font-weight: bold; vertical-align: top;">
              Message
            </td>
            <td style="padding: 12px; border: 1px solid #e0e0e0; white-space: pre-wrap; vertical-align: top;">${message}</td>
          </tr>
        </table>

        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          This email was sent from the Invicta Kent Management contact form.
        </p>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Invicta Kent Website" <Prakash.Madeb@invictakentmanagment.co.uk>`,
      to: "Prakash.Madeb@invictakentmanagment.co.uk",
      replyTo: email,
      subject: `Contact Form: ${subject} - from ${fullName}`,
      html: htmlContent,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
