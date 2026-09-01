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
     * ------------------------------------------------------------
     * 1. INTERNAL NOTIFICATION
     * ------------------------------------------------------------
     *
     * Sends the complete enquiry to:
     * info@patientsfirstworldwide.com
     *
     * replyTo is set to the customer's email so your team can
     * reply directly to the person who submitted the enquiry.
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
https://www.patientsfirstworldwide.com/contact

Please respond to the enquirer using the reply-to address above.

Reference: ${reference}
      `.trim(),

      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 700px; margin: 0 auto; color: #172033;">

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
                href="https://www.patientsfirstworldwide.com/contact"
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
     * ------------------------------------------------------------
     * 2. CUSTOMER CONFIRMATION EMAIL
     * ------------------------------------------------------------
     *
     * Sends an automatic acknowledgement to the customer.
     *
     * This is deliberately handled separately from the internal
     * notification. If this email fails, the lead has still been
     * successfully delivered to the PFW team.
     */

    try {
      await transporter.sendMail({
        from: `"Patients First Worldwide" <${smtpUser}>`,
        to: lead.email,
        replyTo: smtpUser,
        subject: `Thank You for Contacting Patients First Worldwide — ${reference}`,

        text: `
Dear ${lead.name},

Thank you for contacting Patients First Worldwide.

We have received your enquiry successfully.

One of our dedicated care coordinators will review your enquiry and get back to you personally, usually within one business day.

Your enquiry reference is:

${reference}

Please keep this reference number for future communication with our team.

Please note that this email confirms receipt of your enquiry. It does not constitute medical advice, diagnosis or treatment, and does not create a doctor-patient relationship.

Your information is handled responsibly and in accordance with applicable data protection requirements.

Kind regards,

Patients First Worldwide
Your Dedicated Healthcare Coordination Partner

Email: ${smtpUser}
Website: https://www.patientsfirstworldwide.com

Reference: ${reference}
        `.trim(),

        html: `
          <div style="font-family: Arial, Helvetica, sans-serif; max-width: 700px; margin: 0 auto; color: #172033;">

            <div style="background:#06263D; padding:32px 36px; border-radius:12px 12px 0 0;">
              <h2 style="margin:0; color:#ffffff; font-family:Georgia, serif; font-size:30px;">
                Thank You for Contacting Us
              </h2>

              <p style="margin:10px 0 0; color:#fCDA7B; font-size:18px;">
                Patients First Worldwide
              </p>
            </div>

            <div style="border:1px solid #e5e7eb; border-top:0; padding:36px 40px; border-radius:0 0 12px 12px;">

              <p style="font-size:17px; line-height:1.7; margin-top:0;">
                Dear ${escapeHtml(lead.name)},
              </p>

              <p style="font-size:16px; line-height:1.7;">
                Thank you for contacting Patients First Worldwide.
                We have received your enquiry successfully.
              </p>

              <p style="font-size:16px; line-height:1.7;">
                One of our dedicated care coordinators will review your
                enquiry and get back to you personally, usually within
                one business day.
              </p>

              <div style="background:#f7f7f5; padding:22px; border-radius:10px; margin:26px 0;">

                <p style="margin:0 0 8px; font-size:13px; color:#64748b; text-transform:uppercase; letter-spacing:1px;">
                  Your Enquiry Reference
                </p>

                <p style="margin:0; color:#06263D; font-size:24px; font-weight:bold; font-family:Georgia, serif;">
                  ${escapeHtml(reference)}
                </p>

              </div>

              <p style="font-size:15px; line-height:1.7;">
                Please keep this reference number for future communication
                with our team.
              </p>

              <div style="margin-top:28px; padding:20px; background:#f8fafc; border-left:4px solid #C88A2B; border-radius:8px;">

                <p style="margin:0; font-size:13px; line-height:1.7; color:#475569;">
                  <strong>Please note:</strong> This email confirms receipt
                  of your enquiry. It does not constitute medical advice,
                  diagnosis or treatment, and does not create a
                  doctor-patient relationship.
                </p>

              </div>

              <p style="font-size:15px; line-height:1.7; margin-top:28px;">
                Your information is handled responsibly and in accordance
                with applicable data protection requirements.
              </p>

              <p style="font-family:Georgia, serif; color:#06263D; font-size:18px; margin-top:32px;">
                We look forward to speaking with you.
              </p>

              <div style="margin-top:30px; padding-top:22px; border-top:1px solid #e5e7eb; font-size:13px; color:#64748b; line-height:1.7;">

                <strong style="color:#06263D;">
                  Patients First Worldwide
                </strong>

                <br />

                Your Dedicated Healthcare Coordination Partner

                <br />

                <a
                  href="mailto:${escapeHtml(smtpUser)}"
                  style="color:#06263D;"
                >
                  ${escapeHtml(smtpUser)}
                </a>

                <br />

                <a
                  href="https://www.patientsfirstworldwide.com"
                  style="color:#06263D;"
                >
                  patientsfirstworldwide.com
                </a>

                <br /><br />

                Reference: ${escapeHtml(reference)}

              </div>

            </div>
          </div>
        `,
      });

      console.info(
        `[lead] ${reference} — customer confirmation sent successfully to ${lead.email}`
      );
    } catch (customerEmailError) {
      /*
       * The internal enquiry has already been delivered.
       *
       * Do not return an error to the website just because the
       * customer's confirmation email failed.
       */
      console.error(
        `[lead] ${reference} — customer confirmation email failed:`,
        customerEmailError
      );
    }

    /*
     * ------------------------------------------------------------
     * 3. SUCCESS
     * ------------------------------------------------------------
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