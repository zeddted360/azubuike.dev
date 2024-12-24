import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_APP_PASS,
    },
  });

  // Format the current date
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  try {
    const info = await transporter.sendMail({
      from: email,
      to: process.env.MY_EMAIL,
      subject: `Portfolio Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Portfolio Message</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; background-color: #f9fafb;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">New Portfolio Message</h1>
              </div>

              <!-- Main Content -->
              <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                <!-- Sender Info -->
                <div style="margin-bottom: 25px; padding-bottom: 20px; border-bottom: 2px solid #f0f0f0;">
                  <p style="margin: 0; font-size: 16px; color: #4b5563;">
                    <span style="color: #6b7280;">From:</span> 
                    <strong style="color: #1f2937;">${name}</strong>
                  </p>
                  <p style="margin: 5px 0 0 0; font-size: 16px; color: #4b5563;">
                    <span style="color: #6b7280;">Email:</span> 
                    <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                  </p>
                  <p style="margin: 5px 0 0 0; font-size: 14px; color: #6b7280;">
                    Received on: ${currentDate}
                  </p>
                </div>

                <!-- Message -->
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                  <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px;">Message:</h2>
                  <div style="white-space: pre-line; color: #4b5563; font-size: 16px; line-height: 1.8;">
                    ${message}
                  </div>
                </div>

                <!-- Footer -->
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #f0f0f0;">
                  <p style="margin: 0; color: #6b7280; font-size: 14px;">
                    This message was sent from your portfolio website
                  </p>
                  <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 14px;">
                    © ${new Date().getFullYear()} azubuike.dev - All rights reserved
                  </p>
                </div>
              </div>

              <!-- Quick Actions -->
              <div style="margin-top: 20px; text-align: center;">
                <a href="mailto:${email}" style="display: inline-block; padding: 12px 24px; background-color: #3b82f6; color: white; text-decoration: none; border-radius: 6px; font-weight: 500; margin: 0 10px;">
                  Reply to ${name}
                </a>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Email delivered with ID:", info.messageId);
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Error sending email:",
      error instanceof Error ? error.message : "Unknown error"
    );
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
};
