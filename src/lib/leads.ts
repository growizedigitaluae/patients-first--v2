import { z } from "zod";
import nodemailer from "nodemailer";
import { careAreas } from "@/data/care-areas";
import { destinations } from "@/data/destinations";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(6, "Please enter your phone number so we can reach you."),
  contactMethod: z.string().optional().or(z.literal("")),
  careArea: z.string().optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more about your situation."),
});

export type ContactLead = z.infer<typeof contactSchema>;

export const careAreaOptions = careAreas.map((a) => a.title);
export const destinationOptions = destinations.map((d) => d.name);

export type LeadResult =
  | { status: "success"; reference: string }
  | {
      status: "error";
      errors: Partial<Record<keyof ContactLead, string[]>>;
    };

export async function storeLead(lead: ContactLead): Promise<LeadResult> {
  const reference = `PFW-${Date.now().toString(36).toUpperCase()}`;

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const mailTo = process.env.MAIL_TO;

  if (!smtpHost || !smtpUser || !smtpPassword || !mailTo) {
    console.error("[lead] Missing email environment variables.");

    return {
      status: "error",
      errors: {},
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    /*
     * ============================================================
     * 1. INTERNAL NOTIFICATION
     * ============================================================
     *
     * Simple and informative email for the PFW team.
     *
     * Care Area is intentionally NOT included because the current
     * website form does not collect a Care Area.
     */

    await transporter.sendMail({
      from: `"Patients First Worldwide" <${smtpUser}>`,
      to: mailTo,
      replyTo: lead.email,
      subject: `New PFW Website Enquiry — ${reference}`,

      text: `
New enquiry received through the Patients First Worldwide website.

Reference: ${reference}

----------------------------------------
PATIENT / ENQUIRER DETAILS
----------------------------------------

Name:
${lead.name}

Email:
${lead.email}

Phone:
${lead.phone}

Preferred Contact Method:
${lead.contactMethod || "Not specified"}

----------------------------------------
MESSAGE
----------------------------------------

${lead.message}

----------------------------------------

This enquiry was submitted through:
https://www.patientfirstworldwide.com/contact

Please respond to the enquirer using the reply-to address above.

Reference: ${reference}
      `.trim(),

      html: `
        <div style="font-family:Arial, Helvetica, sans-serif; max-width:700px; margin:0 auto; color:#172033;">

          <div style="background:#06263D; padding:32px 36px; border-radius:12px 12px 0 0;">
            <h2 style="margin:0; color:#ffffff; font-family:Georgia, serif; font-size:30px;">
              New Website Enquiry
            </h2>

            <p style="margin:10px 0 0; color:#fCDA7B; font-size:18px;">
              Patients First Worldwide
            </p>
          </div>

          <div style="border:1px solid #e5e7eb; border-top:0; padding:36px 40px; border-radius:0 0 12px 12px;">

            <p style="margin-top:0; font-size:16px; line-height:1.6;">
              A new enquiry has been submitted through the PFW website.
            </p>

            <div style="background:#f7f7f5; padding:20px; border-radius:10px; margin:24px 0;">
              <strong>Reference:</strong> ${escapeHtml(reference)}
            </div>

            <h3 style="font-family:Georgia, serif; color:#06263D; font-size:24px;">
              Enquirer Details
            </h3>

            <table style="width:100%; border-collapse:collapse; font-size:16px;">

              <tr>
                <td style="padding:9px 0; font-weight:bold; width:220px;">
                  Name
                </td>
                <td style="padding:9px 0;">
                  ${escapeHtml(lead.name)}
                </td>
              </tr>

              <tr>
                <td style="padding:9px 0; font-weight:bold;">
                  Email
                </td>
                <td style="padding:9px 0;">
                  ${escapeHtml(lead.email)}
                </td>
              </tr>

              <tr>
                <td style="padding:9px 0; font-weight:bold;">
                  Phone
                </td>
                <td style="padding:9px 0;">
                  ${escapeHtml(lead.phone)}
                </td>
              </tr>

              <tr>
                <td style="padding:9px 0; font-weight:bold;">
                  Preferred Contact
                </td>
                <td style="padding:9px 0;">
                  ${escapeHtml(lead.contactMethod || "Not specified")}
                </td>
              </tr>

            </table>

            <h3 style="font-family:Georgia, serif; color:#06263D; margin-top:32px; font-size:24px;">
              Message
            </h3>

            <div style="background:#f7f7f5; padding:20px; border-radius:10px; white-space:pre-wrap; line-height:1.6;">
              ${escapeHtml(lead.message)}
            </div>

            <div style="margin-top:32px; padding-top:22px; border-top:1px solid #e5e7eb; font-size:13px; color:#64748b; line-height:1.6;">

              Submitted through
              <a
                href="https://www.patientfirstworldwide.com/contact"
                style="color:#06263D;"
              >
                patientsfirstworldwide.com
              </a>

              <br />

              Reference: ${escapeHtml(reference)}

            </div>

          </div>
        </div>
      `,
    });

    console.info(
      `[lead] ${reference} — internal notification sent successfully to ${mailTo}`
    );

    /*
     * ============================================================
     * 2. CUSTOMER CONFIRMATION EMAIL
     * ============================================================
     *
     * Responsive branded acknowledgement.
     *
     * The PFW logo is loaded from the live website.
     *
     * IMPORTANT:
     * The logo is NOT attached to the email.
     */

    try {
      await transporter.sendMail({
        from: `"Patients First Worldwide" <${smtpUser}>`,
        to: lead.email,
        replyTo: smtpUser,
        subject: `Thank You for Contacting Patients First Worldwide — ${reference}`,

        text: `
Dear ${lead.name},

Thank you for contacting Patients First Worldwide (PFW).

We have received your enquiry successfully and our coordination team will review the information you have provided.

Your enquiry reference is:

${reference}

A member of our coordination team will get back to you personally, usually within one business day.

Please keep the reference number above for future communication with our team.

We understand that healthcare enquiries may involve personal and sensitive information. Your information will be handled responsibly and respectfully in accordance with applicable data protection requirements.

Please note that this acknowledgement confirms receipt of your enquiry. It does not constitute medical advice, diagnosis or treatment, and does not create a doctor-patient relationship.

Patients First Worldwide
Your Dedicated Healthcare Coordination Partner

Dubai, United Arab Emirates
Email: ${smtpUser}
Phone: +971 56 696 0486
Website: https://www.patientfirstworldwide.com

Reference: ${reference}
        `.trim(),

        html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <meta name="x-apple-disable-message-reformatting" />

  <title>
    Thank You — Patients First Worldwide
  </title>

  <style>
    @media only screen and (max-width: 600px) {

      .email-wrapper {
        padding: 12px !important;
      }

      .email-container {
        width: 100% !important;
        max-width: 100% !important;
        border-radius: 12px !important;
      }

      .email-header {
        padding: 24px 18px !important;
      }

      .email-logo {
        width: 150px !important;
        max-width: 70% !important;
      }

      .email-content {
        padding: 30px 22px !important;
      }

      .email-title {
        font-size: 25px !important;
        line-height: 1.3 !important;
      }

      .email-body {
        font-size: 15px !important;
        line-height: 1.7 !important;
      }

      .reference-box {
        padding: 17px !important;
      }

      .reference-number {
        font-size: 20px !important;
      }

      .info-box {
        padding: 16px !important;
      }

      .email-footer {
        padding: 25px 20px !important;
      }

      .footer-text {
        font-size: 12px !important;
      }
    }
  </style>
</head>

<body
  style="
    margin:0;
    padding:0;
    background:#f4f5f3;
    font-family:Arial, Helvetica, sans-serif;
    color:#172033;
    -webkit-text-size-adjust:100%;
    -ms-text-size-adjust:100%;
  "
>

  <table
    role="presentation"
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
    style="
      width:100%;
      background:#f4f5f3;
    "
  >

    <tr>

      <td
        align="center"
        class="email-wrapper"
        style="
          padding:30px 15px;
        "
      >

        <!-- MAIN EMAIL CONTAINER -->

        <table
          role="presentation"
          width="680"
          cellpadding="0"
          cellspacing="0"
          border="0"
          class="email-container"
          style="
            width:100%;
            max-width:680px;
            background:#ffffff;
            border:1px solid #e5e7eb;
            border-radius:16px;
            overflow:hidden;
          "
        >

          <!-- ================================================= -->
          <!-- HEADER -->
          <!-- ================================================= -->

          <tr>

            <td
              align="center"
              class="email-header"
              style="
                background:#06263D;
                padding:32px 30px;
              "
            >

              <img
                src="https://www.patientfirstworldwide.com/images/pfw-email-logo.png"
                alt="Patients First Worldwide"
                width="190"
                class="email-logo"
                style="
                  display:block;
                  width:190px;
                  max-width:80%;
                  height:auto;
                  margin:0 auto;
                  border:0;
                  outline:none;
                  text-decoration:none;
                "
              />

            </td>

          </tr>


          <!-- ================================================= -->
          <!-- CONTENT -->
          <!-- ================================================= -->

          <tr>

            <td
              class="email-content"
              style="
                padding:42px 40px 36px 40px;
              "
            >

              <!-- EYEBROW -->

              <p
                style="
                  margin:0 0 8px 0;
                  color:#C88A2B;
                  font-size:12px;
                  font-weight:bold;
                  letter-spacing:2px;
                  text-transform:uppercase;
                "
              >
                Enquiry Received
              </p>


              <!-- TITLE -->

              <h1
                class="email-title"
                style="
                  margin:0 0 24px 0;
                  color:#06263D;
                  font-family:Georgia, 'Times New Roman', serif;
                  font-size:30px;
                  line-height:1.25;
                  font-weight:normal;
                "
              >
                Thank You — We've Received Your Enquiry
              </h1>


              <!-- GREETING -->

              <p
                class="email-body"
                style="
                  margin:0 0 18px 0;
                  color:#172033;
                  font-size:16px;
                  line-height:1.7;
                "
              >
                Dear ${escapeHtml(lead.name)},
              </p>


              <!-- INTRO -->

              <p
                class="email-body"
                style="
                  margin:0 0 18px 0;
                  color:#334155;
                  font-size:16px;
                  line-height:1.7;
                "
              >
                Thank you for contacting
                <strong>Patients First Worldwide (PFW)</strong>.
                We have received your enquiry successfully and our
                coordination team will review the information you have provided.
              </p>


              <!-- RESPONSE TIME -->

              <p
                class="email-body"
                style="
                  margin:0 0 24px 0;
                  color:#334155;
                  font-size:16px;
                  line-height:1.7;
                "
              >
                A member of our coordination team will get back to you
                personally, usually within
                <strong>one business day</strong>.
              </p>


              <!-- ================================================= -->
              <!-- REFERENCE -->
              <!-- ================================================= -->

              <table
                role="presentation"
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  width:100%;
                  margin:0 0 26px 0;
                "
              >

                <tr>

                  <td
                    class="reference-box"
                    style="
                      background:#f7f7f5;
                      border-left:4px solid #C88A2B;
                      border-radius:8px;
                      padding:20px 22px;
                    "
                  >

                    <p
                      style="
                        margin:0 0 6px 0;
                        color:#64748b;
                        font-size:12px;
                        font-weight:bold;
                        letter-spacing:1px;
                        text-transform:uppercase;
                      "
                    >
                      Your Enquiry Reference
                    </p>

                    <p
                      class="reference-number"
                      style="
                        margin:0;
                        color:#06263D;
                        font-size:23px;
                        font-weight:bold;
                        letter-spacing:.5px;
                        word-break:break-word;
                      "
                    >
                      ${escapeHtml(reference)}
                    </p>

                  </td>

                </tr>

              </table>


              <!-- REFERENCE INSTRUCTION -->

              <p
                class="email-body"
                style="
                  margin:0 0 24px 0;
                  color:#334155;
                  font-size:15px;
                  line-height:1.7;
                "
              >
                Please keep this reference number for future communication
                with our team.
              </p>


              <!-- ================================================= -->
              <!-- PRIVACY -->
              <!-- ================================================= -->

              <table
                role="presentation"
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  width:100%;
                  margin:0 0 20px 0;
                "
              >

                <tr>

                  <td
                    class="info-box"
                    style="
                      background:#f8fafc;
                      border-left:4px solid #C88A2B;
                      border-radius:8px;
                      padding:20px;
                    "
                  >

                    <p
                      style="
                        margin:0;
                        color:#475569;
                        font-size:14px;
                        line-height:1.7;
                      "
                    >
                      We understand that healthcare enquiries may involve
                      personal and sensitive information. Your information
                      will be handled responsibly and respectfully in
                      accordance with applicable data protection requirements.
                    </p>

                  </td>

                </tr>

              </table>


              <!-- ================================================= -->
              <!-- IMPORTANT NOTICE -->
              <!-- ================================================= -->

              <table
                role="presentation"
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  width:100%;
                  margin:0 0 28px 0;
                "
              >

                <tr>

                  <td
                    class="info-box"
                    style="
                      background:#f8fafc;
                      border-radius:8px;
                      padding:20px;
                    "
                  >

                    <p
                      style="
                        margin:0;
                        color:#475569;
                        font-size:13px;
                        line-height:1.7;
                      "
                    >

                      <strong style="color:#06263D;">
                        Please note:
                      </strong>

                      This acknowledgement confirms receipt of your enquiry.
                      It does not constitute medical advice, diagnosis or
                      treatment, and does not create a doctor-patient
                      relationship.

                    </p>

                  </td>

                </tr>

              </table>


              <!-- CLOSING -->

              <p
                style="
                  margin:0;
                  color:#06263D;
                  font-family:Georgia, 'Times New Roman', serif;
                  font-size:19px;
                  line-height:1.5;
                "
              >
                We look forward to speaking with you.
              </p>

            </td>

          </tr>


          <!-- ================================================= -->
          <!-- FOOTER -->
          <!-- ================================================= -->

          <tr>

            <td
              align="center"
              class="email-footer"
              style="
                background:#06263D;
                padding:28px 35px;
              "
            >

              <p
                style="
                  margin:0 0 7px 0;
                  color:#fCDA7B;
                  font-family:Georgia, 'Times New Roman', serif;
                  font-size:19px;
                  line-height:1.4;
                "
              >
                Patients First Worldwide
              </p>


              <p
                class="footer-text"
                style="
                  margin:0 0 12px 0;
                  color:#ffffff;
                  font-size:13px;
                  line-height:1.6;
                "
              >
                Your Dedicated Healthcare Coordination Partner
              </p>


              <p
                class="footer-text"
                style="
                  margin:0;
                  color:#dbe4eb;
                  font-size:12px;
                  line-height:1.9;
                "
              >

                Dubai, United Arab Emirates

                <br />

                <a
                  href="mailto:${escapeHtml(smtpUser)}"
                  style="
                    color:#fCDA7B;
                    text-decoration:none;
                  "
                >
                  ${escapeHtml(smtpUser)}
                </a>

                <br />

                <a
                  href="tel:+971566960486"
                  style="
                    color:#fCDA7B;
                    text-decoration:none;
                  "
                >
                  +971 56 696 0486
                </a>

                <br />

                <a
                  href="https://www.patientfirstworldwide.com"
                  style="
                    color:#fCDA7B;
                    text-decoration:none;
                  "
                >
                  www.patientfirstworldwide.com
                </a>

              </p>


              <!-- FOOTER DIVIDER -->

              <div
                style="
                  margin-top:20px;
                  padding-top:18px;
                  border-top:1px solid rgba(255,255,255,0.15);
                "
              >

                <p
                  style="
                    margin:0;
                    color:#94a3b8;
                    font-size:11px;
                    line-height:1.6;
                  "
                >
                  This is an automated acknowledgement of your enquiry.
                  <br />
                  Please keep your reference number for future communication.
                </p>


                <p
                  style="
                    margin:10px 0 0 0;
                    color:#94a3b8;
                    font-size:11px;
                  "
                >
                  Reference: ${escapeHtml(reference)}
                </p>

              </div>

            </td>

          </tr>

        </table>

      </td>
    </tr>

  </table>

</body>
</html>
        `.trim(),
      });

      console.info(
        `[lead] ${reference} — customer confirmation sent successfully to ${lead.email}`
      );
    } catch (customerEmailError) {
      /*
       * The internal enquiry has already been delivered.
       *
       * Do not return an error to the website simply because
       * the customer acknowledgement failed.
       */

      console.error(
        `[lead] ${reference} — customer confirmation email failed:`,
        customerEmailError
      );
    }

    /*
     * ============================================================
     * 3. SUCCESS
     * ============================================================
     */

    return {
      status: "success",
      reference,
    };
  } catch (error) {
    console.error(
      `[lead] ${reference} — internal email sending failed:`,
      error
    );

    return {
      status: "error",
      errors: {},
    };
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}